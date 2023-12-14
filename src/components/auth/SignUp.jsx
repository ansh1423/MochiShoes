import { Box, Button, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import React from "react";
import { SignUpSchema } from "../../schema";
import { useDispatch } from "react-redux";
import { register } from "../../redux/slices/Auth";
import { useRouter } from "next/router";
import CloseIcon from "@mui/icons-material/Close";

const SignUp = () => {
  const router  = useRouter();
  const dispatch = useDispatch()

  const intialValue = {
    firstName: "",
    email: "",
    password: "",
    phone: "",

  };
  const handleClear = () => {
    router.push("/")
  };
  const { values,errors,touched, handleChange, handleBlur, handleSubmit } = useFormik({
    validationSchema: SignUpSchema,
    initialValues: intialValue,
    //  console.log(values)
    onSubmit: async(values, action) => {
      // console.log("ansh")
      // console.log(values);
      const result  = await dispatch(register(values))
      console.log(result)
      if (result){
        alert("Registered Successfully")
        router.push("/login")
      }
      action.resetForm();
    },
  });
  
  return (
    <div className="flex justify-center h-screen bg-rose-200     items-center">
    <Box sx={{ width: "30%", display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          width: "400px",
          height: "450px",
          display: "flex",
          flexDirection: "column",
          border:'2px solid ',
          alignItems: "center",
          justifyContent: "center",
          borderRadius: '16px',
          padding:"15px",
          margin:"10px",
          backgroundColor:"burlywood"
        
        }}
      >
         <CloseIcon
            onClick={handleClear}
            sx={{ position: "absolute", top: "12px", left: "90%" }}
          />
        <Typography className='text-lg '>Sign Up</Typography>
        <form className="flex flex-col w-full " 
          onSubmit={handleSubmit}
        >
           <h1 className="text-sm py-1">Full Name</h1>
            <input
             type="name"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border w-full  py-2 text-sm px-2 "
            />
           {errors.firstName && touched.firstName && <div style={{color:'red'}}>{errors.firstName}</div>}
           <h1 className="text-sm py-1">Email</h1>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border w-full py-2 text-sm px-2 border-emerald-500"
            />
             {errors.email && touched.email && <div style={{color:'red'}}>{errors.email}</div>}
             <h1 className="text-sm py-1">Password</h1>
            <input
              type="password"
              name="password"
              value={values.password}
              className="border w-full py-2 text-sm px-2 border-emerald-500"
              onChange={handleChange}
              onBlur={handleBlur}
            />
           {errors.password && touched.password && <div style={{color:'red'}}>{errors.password}</div>}
           <h1 className="text-sm py-1">Mobile Number</h1>
            <input
              type="number"
              name="phone"
              value={values.phone}
              className="border w-full py-2 text-sm px-2 border-emerald-500"
              onChange={handleChange}
              onBlur={handleBlur}
            />
           {errors.phone && touched.phone && <div style={{color:'red'}}>{errors.phone}</div>}
           <button className="bg-teal-400 rounded-md mt-2 mb-1 text-white text-sm py-2 px-2" onSubmit={handleSubmit}>Submit</button>
           <div className="flex gap-2 mb-2 text-center justify-center ">
             <h1>Already have account ? </h1>
             <h2 className="cursor-pointer o hover:underline" >Login Now</h2>
           </div>
        </form>
      </Box>
    </Box>
    </div>
  );
};

export default SignUp;
