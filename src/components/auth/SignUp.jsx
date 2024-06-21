import { Box, Button, TextField, Typography, IconButton } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { SignUpSchema } from "../../schema";
import { useDispatch } from "react-redux";
import { register } from "../../redux/slices/Auth";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";

const SignUp = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const initialValues = {
    firstName: "",
    email: "",
    password: "",
    phone: "",
  };

  const handleClear = () => {
    router.push("/");
  };

  const { values, errors, touched, handleChange, handleBlur, handleSubmit } = useFormik({
    validationSchema: SignUpSchema,
    initialValues,
    onSubmit: async (values, action) => {
      const result = await dispatch(register(values));
      if (result) {
        alert("Registered Successfully");
        router.push("/login");
      }
      action.resetForm();
    },
  });

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <Box className="flex justify-center h-screen bg-rose-200 items-center">
      <Box sx={{ width: "100%", maxWidth: 400, mx: 2 }}>
        <Box
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 2,
            p: 4,
            bgcolor: "background.paper",
            boxShadow: 3,
          }}
        >
          <IconButton
            onClick={handleClear}
            sx={{ position: "absolute", top: 16, right: 16 }}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" component="h1" gutterBottom>
            Sign Up
          </Typography>
          <form className="flex flex-col w-full" onSubmit={handleSubmit}>
            <TextField
              label="Full Name"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.firstName && Boolean(errors.firstName)}
              helperText={touched.firstName && errors.firstName}
              margin="normal"
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
              margin="normal"
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
              margin="normal"
              fullWidth
            />
            <TextField
              label="Mobile Number"
              name="phone"
              type="tel"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phone && Boolean(errors.phone)}
              helperText={touched.phone && errors.phone}
              margin="normal"
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
            <Box className="flex justify-center" sx={{ mt: 2 }}>
              <Typography variant="body2">
                Already have an account?{" "}
                <Button color="secondary" onClick={handleLogin}>
                  Login Now
                </Button>
              </Typography>
            </Box>
          </form>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
