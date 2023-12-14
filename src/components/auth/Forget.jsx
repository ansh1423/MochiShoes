
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ForgetPass } from "../../redux/slices/Auth";


function Forget() {
  const router=useRouter();
  const [value, setValue] = useState()
  console.log(value)
  const dispatch=useDispatch()
  const handleClick= async()=>{
    try{
const data = {email:value}
      const result = await dispatch(ForgetPass(data))
      console.log(result)
    }catch(err){
console.log(err)
    }
     router.push("/resetpass")
  }

  return (
    <div className="flex font-mulish justify-center  px-4 items-center h-screen">
      <div className=" h-[40%] rounded-md flex px-4 pb-3 pt-3 flex-col  w-[30%] border-2 bg-[#DEB786] ">
        <h1 className="text-[22px] text-center ">Forget Password</h1>
        <p className=" px-5 text-center   mt-4  ">
          Enter your email and send the reset password otp to the register email
        </p>
        <div className="flex justify-start py-2   w-full">
          <h1 className="   ">Email</h1>
        </div>
        <input
          type="email"
          name="email"
          value={value}
          onChange={(e)=> setValue(e.target.value)}
          id="email"
          className="w-full py-2 border-2 px-4  border-cyan-600 rounded-lg mb-3"
        />

        <button
          type="submit"
          className=" text-white text-xs w-full py-3 rounded-lg mb-4 bg-blue-700"
          onClick={handleClick}
        >
          Continue
        </button>
       <div className=" gap-2">
        <p className=" text-center">Do you have account ? </p>
        <p className="text-center cursor-pointer underline" onClick={()=>router.push("/login")}>Login</p>
        </div>
      </div>
    </div>
  );
}

export default Forget;
