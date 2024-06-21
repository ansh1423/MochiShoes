import { useRouter } from "next/router";
import React from "react";

function Block3() {
   const router=useRouter();  
  
  return (
    <div className="flex justify-center  py-2 m-4 px-2 gap-3   max max-lg:grid max-lg:grid-cols-2 ">
      <div>
        <img
        // onClick={()=> router.push("/products/men")}
          src="/Homepage/2.jpg"
          className="w-[300px] mx-1 max-sm:w-[200px] max-sm:h-40  max-xl:w-[300px] max-xl:h-40 cursor-pointer  max-lg:w-96 max-lg:h-64  h-52"
          alt=""
        />
        <h3 onClick={()=> router.push("/products/men")} className="font-semibold  cursor-pointer  mx-3 my-2 text-sm">MEN SHOES</h3>
      </div>
      <div>
        <img
        onClick={()=> router.push("/products/women")}
        src="/Homepage/3.webp"
          className="w-[300px] mx-1 max-xl:w-[300px] max-sm:w-[200px] max-sm:h-40 max-xl:h-40 cursor-pointer  max-lg:w-96 max-lg:h-64  h-52"
          alt=""
        />
        <h3
        onClick={()=> router.push("/products/women")} className="font-semibold cursor-pointer   mx-3 my-2 text-sm">WOMEN SHOES</h3>
      </div>

      <div>
        <img
        onClick={()=> router.push("/products/kids")}
        src="/Homepage/4.webp"
          className="w-[300px] mx-1 cursor-pointer max-sm:w-[200px] max-sm:h-40  max-xl:w-[300px]  max-xl:h-40 max-lg:w-96 max-lg:h-64  h-52"
          alt=""
        />
        <h3 onClick={()=> router.push("/products/kids")} className="font-semibold cursor-pointer  mx-3 my-2 text-sm">KIDS SHOES</h3>
      </div>
      <div>
        <img
        onClick={()=> router.push("/products/accessories")}
        src="/Homepage/1.jpg"
          className="w-[300px] mx-1 max-xl:w-[300px] max-sm:w-[200px] max-sm:h-40 max-xl:h-40 cursor-pointer  max-lg:w-96 max-lg:h-64  h-52"
          alt=""
        />
        <h3 onClick={()=> router.push("/products/accessories")} className="font-semibold cursor-pointer  mx-3 my-2 text-sm">ACCESSORIES</h3>
      </div>
    </div>
  );
}

export default Block3;
