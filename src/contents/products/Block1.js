import React from 'react';
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';

function Block1() {
  const [openAcc1, setOpenAcc1] = React.useState(true);
  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const router = useRouter();
  // const selector =useSelector();
  // const productdata = useSelector((state) => state?.products?.data?.[0]?.title);
  const productpage = useSelector((state) => state?.product?.product?.data?.[0]?.category ?? "defaultCategory");

  const product = productpage || [];
  console.log(productpage,"productform")
  const data = useSelector((state) => state?.product?.product?.paginator?.itemCount);
  
  return (
    <>
      <div className='text-base mx-5 py-'>
        <p className='text-[14px] font-[700] my-3 max-lg:hidden'>
          <span className='inline text-base font-mulish font-[600]'>Home  /  Footwear / </span>{product} Shoes
        </p>
        <div className='flex'>
          <p className='m-0 font-[400] w-72 text-[16px] max-lg:hidden'>
            <h1 className='font-[700] text-[16px]'>{product} Shoes</h1> {data} items
          </p>
          <div>
            <h1 className="text-[25px] font-semibold">Upgrade Your Style Quotient with Stylish Shoes for {product}</h1>
            <p className='flex text-[16px] py-2 my-2'>
              Along with wearing fashionable attire, a dashing pair of shoes is just as essential to complement an outfit.
            </p>
            {/* Example Accordion Usage */}
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

export default Block1;
