import React, { useEffect } from 'react'
import Block1 from '../../src/order/Block1'
import Navabar from '../../src/layouts/Navabar/index'
import Footer from '../../src/layouts/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { Orderlist, createOrder, getOrder } from '../../src/redux/slices/Order'
function Index() {
  const dispatch=useDispatch();
   
  // useEffect(() => {
  //   const getOrder= async () => {
    
  //   const result = await dispatch(createOrder());
  
  //    console.log(result)
  //   }
  //   getOrder();  
  //   }, []) 

  useEffect(()=>{
    const orderlist= async()=>{
      const result= await dispatch(Orderlist())
      console.log(result);
    }
    orderlist()
  },[])
  return (
    <>
    <Navabar/>
    <Block1/>
    <Footer/>
    </>
  )

}

export default Index