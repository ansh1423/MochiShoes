import { useRouter } from 'next/router';
import React from 'react'
import { useSelector } from 'react-redux'

function Block2() {
  const router=useRouter();
 
  const {cart } = useSelector((state)=> state.cart)
  console.log(cart)
let mrp = 0;
let cost = 0;

for(let cart2 of cart){
  for(let product of cart2.products){
       mrp += (product.productId && product.productId.price && product.productId.price.mrp)
       cost += (product.productId && product.productId.price && product.productId.price.cost)
  }
  
}

let discount2 = ((mrp) - (cost))
let gst = ((cost)*(0.08))
let total = ((cost) + (gst))

console.log(mrp)

  return (
    <>
     
    <div className=' w-96 h-[26rem] bg-[#FAFAFA]  px-4 mx-4'>
        <p className='py-2 text-[18px]'>Order Summary</p>
        <hr></hr>
        <div className='flex  py-3 justify-between'>
          <p className='flex font-extralight text-md '>Coupon</p>
          <button type="Apply" className='flex font-extralight text-sm border-2 py-1 px-2 rounded-md'>Apply</button>
        </div>
        <p className='mb-2 text-[18px]'> Price Details</p>
        <hr></hr>
        <div className='flex text-sm   font-thin py-3 justify-between'>
          
          <p className='flex '>Total MRP</p>
          <button type="Apply" className='flex text-[14px] font-[600] '>Rs. {discount2}.00</button>
        </div> 
        <div className='flex text-sm font-thin py-3 justify-between'>
          <p className='flex '>Total Discount on MRP</p>
          <button type="Apply" className='flex '>- Rs. 0.00</button>
        </div>

        <div className='flex text-sm font-thin py-3 justify-between'>
          <p className='flex '>Total Discount</p>
          <button type="Apply" className='flex '>- Rs. 0.00</button>
        </div>

        <div className='flex text-sm font-thin py-3 justify-between'>
          <p className='flex '>Shiping Charge</p>
          <button type="Apply" className='flex '>-Rs. 0.00</button>
        </div>

        <div className='flex text-sm font-bold py-3 justify-between'>
          <p className='flex '>Order Total</p>
          <button type="Apply" className='flex '>Rs. {discount2}.00</button>
        </div>
        
      

       <div className='px-14 my-2 cursor-pointer bg-sky-500 text-white flex justify-center py-3 rounded-md'>
       <p onClick={() => router.push("/checkout")} className='text-sm'>CHECKOUT </p>

       </div>
        
      </div>
      </>
  )
}

export default Block2