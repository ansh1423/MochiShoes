import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useFormik } from "formik";
import { LoginSchema } from "../../schema/Login";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slices/Auth";
import { signIn } from "next-auth/react";

const Login = ({setDilogOpen}) => {
  console.log(setDilogOpen,'setDilogOpen');
  const router = useRouter();
  const dispatch = useDispatch();

  const handleForget = () => {
    router.push("/forget");
  };

  const handleRegister = () => {
    router.push("/signup");
  };

  const handleSubmitGoogle = () => {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  };

  const handleClear = () => {
    setDilogOpen(false);
  };

  const initialValues = {
    username: "",
    password: "",
  };
  const [loginResult, setLoginResult] = useState(null);


  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: LoginSchema,
      onSubmit: async (values, action) => {
        const result = await dispatch(login(values));
        setLoginResult(result); 
        if (result) {
          alert("Login Successfully");
          router.push("/");
          handleClear();
        }
        action.resetForm();
      },
    });
    useEffect(() => {
      if (loginResult) {
        window.location.reload(); // Reload the page on successful login
      }
    }, [loginResult]);
  

  return (
    <>
      <Box
       sx={{
        width: "400px",
        p: 4,
        borderRadius: "20px",
        boxShadow: 3,
        backgroundColor: "white",
        position: "relative",
        '@media (max-width: 600px)': {
          width: "300px",
        },
      }}
        >
      
        <IconButton
          onClick={handleClear}
          sx={{ position: "absolute", top: 16, right: 16 }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" align="center" gutterBottom>
          LOG IN
        </Typography>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <TextField
            label="User Name"
            name="username"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && Boolean(errors.username)}
            helperText={touched.username && errors.username}
            fullWidth
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password && errors.password}
            fullWidth
          />
          <Button
            type="submit"
            // variant="contained"
            color="primary"
            fullWidth
          >
            Continue
          </Button>
          <Button
            type="button"
            // variant="contained"
            color="secondary"
            onClick={handleSubmitGoogle}
            fullWidth
          >
            Login With Google
          </Button>
          <Typography
            variant="body2"
            align="center"
            sx={{ cursor: "pointer" }}
            onClick={handleForget}
          >
            Forget Password
          </Typography>
        </form>
        <Box mt={2} display="flex" justifyContent="center" alignItems="center">
          <Typography variant="body2">Don't have an account?&nbsp;</Typography>
          <Typography
            variant="body2"
            color="primary"
            sx={{ cursor: "pointer" }}
            onClick={handleRegister}
          >
            Sign Up
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Login;
