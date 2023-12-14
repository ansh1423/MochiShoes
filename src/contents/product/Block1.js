import { useRouter } from 'next/router';
import React from 'react'
import { useSelector } from 'react-redux';

function Block1() {
  const router=useRouter()
  console.log("router.query", router.query);
  const product=useSelector((state) => state?.product?.product?.[0]?.category);
  console.log(product)

  return (
    <>
    <div className='text-base mx-5 py- '>
        <p className=' text-[14px] font-[700px] my-3 max-lg:hidden'> <p className='inline text-base font-mulish font-[600]'>Home  /  Footwear / </p>{product}Shoes</p>
      <div className='flex'>

        <p className='m-[2px,0px,0px] font-[400px] w-72 text-[16px] max-lg:hidden  '><h1 className='font-[700] text-[16px]'>{product}Shoes</h1>  1 items</p>
        <div> 
      
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
  )
}

export default Block1