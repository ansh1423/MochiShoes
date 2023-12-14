import { useRouter } from "next/router";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

function ResetPass() {
    const router = useRouter()
    const dispatch=useDispatch();
    const [value,setvalue]=useState({
      code:"",
      newPassword:""
    })

   const handleChangeValue = (e)  =>{
      setvalue({...value,[e.target.name]:e.target.value })
      console.log(value)
    }
    
    const handleClick = async() => {
      try{
        const data = {...value}
        const result = await dispatch(ResetPass(data))
        console.log(result)
      }catch{

      }
    router.push("/home");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="h-80 rounded-md flex px-4  flex-col justify-center items-center w-72 border-2 bg-orange-400 ">
        <h1 className="font-semibold mb-3">Reset Password</h1>
        <div className="flex justify-start py-2  w-full">
          <h1 className="text-xs   ">Validate Otp</h1>
        </div>
        <input
          type="txt"
          name="code"
          id="code"
          value={value.code}
          onChange={(e)=> handleChangeValue(e)}
          className="w-full py-2 border-2 px-4  border-cyan-600 rounded-lg mb-3"
        />
        <div className="flex justify-start py-2  w-full">
          <h1 className="text-xs   ">New Password</h1>
        </div>
        <input
          type="password"
          name="newPassword"
          value={value.newPassword}
          onChange={(e)=> handleChangeValue(e)}
          id="newPassword"
          className="w-full py-2 border-2 px-4  border-cyan-600 rounded-lg mb-3"
        />

        <button
          type="submit"
          onClick={handleClick}
          className=" text-white text-xs w-full py-3 rounded-lg mb-4 bg-blue-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default ResetPass;
