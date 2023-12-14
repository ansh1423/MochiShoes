import {
  Box,
  Button,
  TextField,
  Typography,
  useFormControl,
} from "@mui/material";
import React from "react";

import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
const UpdateProfile = ({ setOpen }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const initialValue = {
    username: "",
    password: "",
  };

  const updateprofile = () => {};

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues: initialValue,
      onSubmit: async (values, action) => {
        console.log(values);
        const result = await dispatch(login(values));
        if (result) {
          alert("LogIn Successfully");
          router.push("/");
        }

        console.log(result);
        action.resetForm();
      },
    });
  const handleClear = () => {
    setOpen(false);
  };

  const updateform =() =>{
    alert('Form is update Now');
  }

  return (
<>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          borderRadius: "20px",
        }}
      >
        <Box
          sx={{
            width:     "490px",
            gap: "20px",
            // border: "1px solid black",
            height: "400px",
            flexDirection: "column",
            display: "flex",
            postition: "relative",
            justifyContent: "start",
            alignItems: "",
            margin: "20px",
          }}
        >
          <CloseIcon
            onClick={handleClear}
            sx={{
              width: "17px",
              cursor: "pointor",
              position: "absolute",
              top: "14px",
              left: "90%",
            }}
          />
          <Typography className=" mb-5 ">Contact Information</Typography>
          <form
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "",
              alignItems: "",
              gap: "20px",
            }}
          >
            <form action="">
              <h1 className="text-sm py-1">Full Name</h1>
              <input
                type="text"
                name=""
                className="border w-full py-2 text-sm px-2 border-emerald-500"
               
                id=""
              />
              <h1 className="text-sm py-1">Email</h1>
              <input
                type="email"
                name=""
                className="border w-full py-2 text-sm px-2 border-emerald-500"
               
                id=""
              />
               <h1 className="text-sm py-1">Receiver Phone Number</h1>
              <input
                type="number"
                name=""
                className="border w-full py-2 text-sm px-2 border-emerald-500"
               
                id=""
              />
              
               <h1 className="text-sm py-1">Date Of Birth</h1>
              <input
                type="date"
                name=""
                className="border w-full py-2 text-sm px-2 border-emerald-500"
               
                id=""
              /> 
              
              <h1 className="text-sm py-1">Gender</h1>
              <input
                type="radio"
                name=""
                className="border w-full py-2 text-sm px-2 border-emerald-500"
               
                id=""
              /> 
               <button onClick={updateform} className="bg-teal-400 rounded-md mb-5 text-white text-sm py-2 px-2">UPDATE</button>
            </form>

         
            {/* {errors.password && touched.password  && <div style={{color:'red'}}>{errors.password}</div>} */}
        
          </form>
        </Box>
      </Box>
    </>
  );
};

export default UpdateProfile;
