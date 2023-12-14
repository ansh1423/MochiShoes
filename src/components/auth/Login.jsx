import {
  Box,
  Button,
  TextField,
  Typography,
  useFormControl,
} from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { LoginSchema } from "../../schema/Login";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";
import { login, register } from "../../redux/slices/Auth";
import {auth,provider} from '../googleSignin/config'



const Login = ({ setDilogOpen }) => {
  
  const router = useRouter();
  const dispatch = useDispatch();
  const handleForget = () => {
    router.push("/forget");
  };
  const handleRegister = () => {
    router.push("/signup");
  };
  const handleSubmitgoogle= ()=> {
     signIn('google', {callbackUrl:"http://localhost:3000"})
  }

  const handleClear = () => {
    setDilogOpen(false);
  };
  const initialValue = {
    username: "",
    password: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialValue,
      validationSchema: LoginSchema,
      onSubmit: async (values, action) => {
        console.log(values);
        const result = await dispatch(login(values));
        if (result) {
          alert("LogIn Successfully");
          router.push("/");
          handleClear();
         
        }

        console.log(result);
        action.resetForm();
      },
    }); // console.log(errors)
  

  return (
    <>
    <div className="flex justify-center  bg-rose-200     items-center">
      <Box
        sx={{ display: "flex", justifyContent: "center", borderRadius: "20px" }}
      >
        <Box
          sx={{
            width: "400px",
            gap: "",
            border: "1px solid black",
            height: "400px",
            flexDirection: "column",
            display: "flex",
            postition: "relative",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:"burlywood"
          }}
        >
          <CloseIcon
            onClick={handleClear}
            sx={{ position: "absolute", top: "12px", left: "90%" }}
          />
          <Typography className=" text-lg">LOG IN</Typography>
          <form
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "",
              alignItems: "",
              width: "100%",
              gap: "",
              padding: "20px",
            }}
            onSubmit={handleSubmit}
          >
            <h1 className="text-sm py-1">User Name</h1>
            <input
              type="name"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border w-full py-2 text-sm px-2 border-emerald-500"
            />
            {errors.username && touched.username && (
              <div style={{ color: "red" }}>{errors.username}</div>
            )}
            <h1 className="text-sm w-full py-1">Password</h1>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border w-full py-2 text-sm px-2 border-emerald-500"
            />
            {errors.password && touched.password && (
              <div style={{ color: "red" }}>{errors.password}</div>
            )}

            {/* {errors.password && touched.password  && <div style={{color:'red'}}>{errors.password}</div>} */}
            <Button
              type="submit"
              color="primary"
              className="bg-blue-500 my-8 text-white hover:bg-blue-500"
               onClick={handleSubmit}
            >
              Continue
            </Button>
            <Button
              type="submit"
              color="primary"
              className="bg-red-500 my-2 text-white hover:bg-blue-500"
               onClick={handleSubmitgoogle}
            >
              Login With Google
            </Button>
            <h1 onClick={handleForget} className="text-center cursor-pointer">
              Forget Password
            </h1>
          </form>
          <div className="flex gap-2">
            <Typography>Don't have an Account?  </Typography>
            <Typography
              onClick={handleRegister}
              className="cursor-pointer gap-1  "
            >
               Sign Up
            </Typography>
          </div>
        </Box>
      </Box>
      </div>
    </>
  );
};



export default Login;
