import React from 'react'
import Block4 from './Block4'

function Block3() {
  return (
    <>
    <div className='flex justify-between text-base my-6 font-medium'>
    <h1 className='text-black '>Order details (MO2021292991)</h1>
    <h2 className='bg-cyan-500 text-sm py-2 mt-5 rounded-lg text-white font-medium px-3 '>Cancel Order</h2> 
  </div>
  <hr />
  <div className='flex justify-between py-2  text-base font-medium'>
    <h1 className=' font-semibold text-sm '>Shipping method</h1>
    <h1 className=' font-semibold text-sm  '>Ship to</h1>
    <h1 className=' font-semibold text-sm  '>Payment Method</h1>
  </div>
  <div className='flex justify-between   text-base font-medium'>
    <h1 className='  text-sm w-56'>Shipping-Free</h1>
    <h1 className=' mb-10 text-sm mx-5  w-44 '>ansh yss
67676, sjshdskjfhjdjkgebihebwlb,4jdfdgh
Arand , Jaunpur, UTTAR PRADESH, 222139
T: 7652018013

</h1> 
<div className=''>
    <h1 className='  text-sm  '>CASH ON DELIVERY</h1>
    <h1 className='  text-sm font-semibold '>Order Date</h1>
    <h1 className='  text-sm '>23-July-2023</h1>

</div>
  </div>
  <div className='mb-16'>
    <Block4/>

  </div>
    </>
  )
}

export default Block3