import React from 'react'
import Block4 from './Block4'
import { useSelector } from 'react-redux'
import { Router, useRouter } from 'next/router';

function Block6() {

const router=useRouter();
    const product=useSelector((state)=>state?.product?.product);
     console.log(product)
  return (
    <>
    <div className='flex flex-wrap gap-10'>
    {product && product.length>0 && product.map((item,index)=>(

        <Block4 data={item} key={index} />
   ))} 
       
    </div>
   
</>
  )
}

export default Block6