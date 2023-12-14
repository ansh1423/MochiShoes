import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';
// import { addProduct, getProduct } from '../../redux/slices/Product';
// import { useRouter } from 'next/router';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";  
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
  function Block1() {
  const [openAcc1, setOpenAcc1] = React.useState(true);
  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const router =useRouter();
  const product = useSelector((state) => state?.product?.product?.[0]?.category ?? 'Default Category');
  const data = useSelector((state) => state?.product?.product.length);
  console.log(data);
  

  
  // const totalProduct= useSelector((state)=>state?.product?.product.length>0);
  // console.log(totalProduct);
  
  return (
    <>
    <div className='text-base mx-5 py- '>
        <p className=' text-[14px] font-[700px] my-3 max-lg:hidden'> <p className='inline text-base font-mulish font-[600]'>Home  /  Footwear / </p>{product}Shoes</p>
      <div className='flex'>

        <p className='m-[2px,0px,0px] font-[400px] w-72 text-[16px] max-lg:hidden  '><h1 className='font-[700] text-[16px]'>{product}Shoes</h1>  {data} items</p>
        <div> 
        <h1 className="text-[25px] font-semibold">Upgrade Your Style Quotient with Stylish Shoes for {product}</h1>
       <p className='  flex text-[16px]   py-2 my-2 '> Along with wearing fashionable attire, a dashing pair of shoes is just as essential to complement an outfit.</p>

   
    {/* <div className='flex justify-end'>
    <Accordion open={openAcc1}>
        <AccordionHeader onClick={handleOpenAcc1}>What is Material Tailwind?</AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at. We&apos;re constantly
          growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
          ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>    
    </div> */}

        </div>
    </div>
    </div>
    
    </>
);
  }

export default Block1