// import { Button, TextField } from '@mui/material'
import React from 'react'
import { AddressSchema } from '../../schema/AddressSchema';
import { updateUser } from '../../redux/slices/Auth';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';



function Block6() {
  const dispatch=useDispatch();
  const user=useSelector((state)=>state.user.user)
  console.log(user)
  const initialValue = {
    locality: "",
    city: "",
    state:"",
    country:"",
    zipcode:""
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
  useFormik({
    initialValues: initialValue,
    validationSchema: AddressSchema,
    onSubmit: async (values, action) => {
      console.log(values);
      const data={address:[values]}
      console.log(data)
      const result = await dispatch(updateUser(data,user.id));
      // if (result) {
      //   alert("Update Successfully");
      //   router.push("/");
      // }

      console.log(result);
      action.resetForm();
    },
  }); 
  return (

    <>
    <div  className='mx-10 '>
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
            <h1 className="text-sm w-full py-1">locality</h1>
            <input
              type="locality"
              name="locality"
              value={values.locality}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border w-full py-2 text-sm px-2 border-emerald-500"
            />
            {errors.locality && touched.locality && (
              <div style={{ color: "red" }}>{errors.locality}</div>
            )}
            <h1 className="text-sm w-full py-1">city</h1>
            <input
              type="city"
              name="city"
              value={values.city}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border w-full py-2 text-sm px-2 border-emerald-500"
            />
            {errors.city && touched.city&& (
              <div style={{ color: "red" }}>{errors.city}</div>
            )}
            <h1 className="text-sm w-full py-1">state</h1>
            <input
              type="state"
              name="state"
              value={values.state}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border w-full py-2 text-sm px-2 border-emerald-500"
            />
            {errors.state && touched.state && (
              <div style={{ color: "red" }}>{errors.state}</div>
            )}
             <h1 className="text-sm w-full py-1">country</h1>
            <input
              type="country"
              name="country"
              value={values.country}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border w-full py-2 text-sm px-2 border-emerald-500"
            />
            {errors.country && touched.country && (
              <div style={{ color: "red" }}>{errors.country}</div>
            )}
            <h1 className="text-sm w-full py-1">pincode</h1>
            <input
              type="zipcode"
              name="zipcode"
              value={values.zipcode}
              onChange={handleChange}
              onBlur={handleBlur}
              className="border w-full py-2 text-sm px-2 border-emerald-500"
            /> 
            {errors.zipcode && touched.zipcode && (
              <div style={{ color: "red" }}>{errors.zipcode}</div>
            )}
          
     
      <h1>Select Address Type</h1>
      <div>
        <input type="checkbox" name="Home" id="Home" className=' py-2 mx-2' placeholder='Home' />Home
        <input type="checkbox" name="Home" id="Home" className='py-1 mx-2' placeholder='Home' />Office
      </div>
      <div>
        <button  type='submit' className='bg-green-700 flex justify-end rounded-md font-mulish font-[700px] text-white px-2 py-2' >Submit</button>
      </div>
    </form>
    </div>
    </>
  )
}

export default Block6