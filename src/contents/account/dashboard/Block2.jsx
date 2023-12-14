import { Divider } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
const Block2 = () => {
  
  return (
   
      <div className='mx-2 w-full'>
        <p className='py-3 px-3   hover:bg-slate-300'>MY PROFILE</p>
    
      <Divider/>
      <p className='py-3 px-3  hover:bg-slate-300'>MY ORDER</p>
    
    <Divider/>
    <p className='py-3 px-3  hover:bg-slate-300'>WISHLIST</p>
    
    <Divider/>
    <p className='py-3 px-3  hover:bg-slate-300'>ADDRESS BOOK</p>
    
    <Divider/>
    <p className='py-3 px-3  hover:bg-slate-300'>RETURN</p>
    
    <Divider/>
    <p className='py-3 px-3  hover:bg-slate-300'>MY COUPON</p>
    
    <Divider/>
    <p className='py-3 px-3  hover:bg-slate-300'>LOYALTY TRANSACTION</p>
    
    <Divider/>
    </div>
  )
}
export default Block2
