import { useRouter } from "next/router";
import React from "react";

function Block3() {
   const router=useRouter();  
  
  return (
    <div className="flex justify-center max-md:invisible py-2 m-4 px-4 gap-3   max max-lg:grid max-lg:grid-cols-2 ">
      <div>
        <img
        onClick={()=> router.push("/products/men")}
          src="https://admin.mochishoes.com/banner/1695019594DESKTOP-CATEGORIES-BANNER_AUGUST_MOCHI_MEN.jpg"
          className="w-[300px] mx-1  max-xl:w-[300px] max-xl:h-40 cursor-pointer  max-lg:w-96 max-lg:h-64  h-52"
          alt=""
        />
        <h3 onClick={()=> router.push("/products/men")} className="font-semibold  cursor-pointer  mx-3 my-2 text-sm">MEN SHOES</h3>
      </div>
      <div>
        <img
        onClick={()=> router.push("/products/men")}
          src="https://admin.mochishoes.com/banner/1695019614DESKTOP-CATEGORIES-BANNER_AUGUST_MOCHI_WOMEN.jpg"
          className="w-[300px] mx-1 max-xl:w-[300px] max-xl:h-40 cursor-pointer  max-lg:w-96 max-lg:h-64  h-52"
          alt=""
        />
        <h3
        onClick={()=> router.push("/products/men")} className="font-semibold cursor-pointer   mx-3 my-2 text-sm">WOMEN SHOES</h3>
      </div>

      <div>
        <img
        onClick={()=> router.push("/products/men")}
          src="https://admin.mochishoes.com/banner/1684749261DESKTOP-CATEGORIES-BANNER_KIDS.jpg"
          className="w-[300px] mx-1 cursor-pointer  max-xl:w-[300px]  max-xl:h-40 max-lg:w-96 max-lg:h-64  h-52"
          alt=""
        />
        <h3 onClick={()=> router.push("/products/men")} className="font-semibold cursor-pointer  mx-3 my-2 text-sm">KIDS SHOES</h3>
      </div>
      <div>
        <img
        onClick={()=> router.push("/products/men")}
          src="https://admin.mochishoes.com/banner/1695019653DESKTOP-CATEGORIES-BANNER_AUGUST_MOCHI_ACCESSORIES.jpg"
          className="w-[300px] mx-1 max-xl:w-[300px] max-xl:h-40 cursor-pointer  max-lg:w-96 max-lg:h-64  h-52"
          alt=""
        />
        <h3 onClick={()=> router.push("/products/men")} className="font-semibold cursor-pointer  mx-3 my-2 text-sm">ACCESSORIES</h3>
      </div>
    </div>
  );
}

export default Block3;
