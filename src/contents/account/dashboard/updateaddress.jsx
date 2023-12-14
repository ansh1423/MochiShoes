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
import { UpdateAddressSchema } from "../../../schema/UpdateAddress";


function UpdateAddress({setUpdate}) {
    const handleClear=()=>{
        setUpdate(false)
    }
    const[value]=useFormik({
      validationSchema: UpdateAddressSchema,
      initialValues: initialValue,
    })
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
          width: "490px",
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
        <Typography className=" mb-5 ">Edit Address</Typography>
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
              name="Fullname"
              className="border w-full py-2 text-sm px-2 border-emerald-500"
              value={values.Fullname}
              id="Fullname"
            />
             <h1 className="text-sm py-1">House/Flat/Room No.</h1>
            <input
              type="text"
              name=""
              className="border w-full py-2 text-sm px-2 border-emerald-500"
             
              id=""
            />
             <h1 className="text-sm py-1">Street Address</h1>
            <input
              type="text"
              name=""
              className="border w-full py-2 text-sm px-2 border-emerald-500"
             
              id=""
            />
             <h1 className="text-sm py-1">LandMark</h1>
            <input
              type="text"
              name=""
              className="border w-full py-2 text-sm px-2 border-emerald-500"
             
              id=""
            />
             <h1 className="text-sm py-1">Pincode</h1>
            <input
              type="number"
              name=""
              className="border w-full py-2 text-sm px-2 border-emerald-500"
             
              id=""
            />
             <h1 className="text-sm py-1">Area</h1>
            <input
              type="text"
              name=""
              className="border w-full py-2 text-sm px-2 border-emerald-500"
             
              id=""
            />
             <h1 className="text-sm py-1">City</h1>
            <input
              type="text"
              name=""
              className="border w-full py-2 text-sm px-2 border-emerald-500"
             
              id=""
            />
             <h1 className="text-sm py-1">State</h1>
            <input
              type="text"
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
           <div className="border-2">
            <select name="myCar" className="py-3 w-full mb-3 text-sm border-emerald-500 " id="car">
                <option value="ind border-emerald-500">Male</option>
                <option value="swf">Female</option>
                 <option value="swf">Other</option>
            </select>

           </div>
        
             <button className="bg-teal-400 rounded-md mb-5 text-white text-sm py-2 px-2">UPDATE ADDRESS</button>
          </form>

       
          {/* {errors.password && touched.password  && <div style={{color:'red'}}>{errors.password}</div>} */}
      
        </form>
      </Box>
    </Box>
  </>
);
};

export default UpdateAddress;
