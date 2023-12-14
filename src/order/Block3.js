import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Orderlist } from '../redux/slices/Order';

function Block3() {
  const router=useRouter();
  const dispatch=useDispatch();
  const data=useSelector((state)=>state?.order?.order);
  console.log(data)
  useEffect(()=>{
    const Order= async()=>{
      const result=await dispatch(Orderlist());
      console.log(result)
    }
  },[])
  return (
    <>
  {data && data.length > 0 && data.map((item, index) => (
  <div key={index}>
    {item && item.products && item.products.length > 0 && item.products.map((product, productIndex) => (
      
      <table key={productIndex} className='w-full'>

  <tr class="text-[13px] mx-2 font-[700px] font-mulish">
    
    <th className='flex justify-start'>Order #</th>
    <th>Date and Time</th>
    <th>Order Total</th>
    <th>Order Items id/SKDU</th>
    <th>Status</th>
    <th>Action</th>
  </tr>

  <tr className='font-mulish font-[400px] text-[14px]'>
    <td className='font-[400px] text-[14px]'>
      <div className='flex  items-center '>
      <img src={product?.productId?.image} className='w-14 h-12' alt="" />
      <p className='text-center'>{product?.productId?.shortTitle}</p>
      </div>
      </td>
    <td className='mx-3 font-[400px] text-[14px]'>{item.updatedAt}</td>
    <td className='mx-8'>Rs. {product?.productId?.price?.mrp}.00</td>
     <td>{product?.productId?.id}</td>
     <td>ORDER CONFIRMED</td>
     <td><button onClick={()=>router.push(`/orderdetails/${product?.productId?.id}`)} className='text-white text-[12px] px-[5px] py-[1px] bg-[#36C2DD]'>View Details</button></td>
  </tr>
  </table>
    ))}
  </div>
))}
</>
  )
}

export default Block3