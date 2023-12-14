import React, { useEffect } from 'react'
import Block1 from '../../src/contents/Cart/Block1'
import Navabar from '../../src/layouts/Navabar/index'
import Footer from '../../src/layouts/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { Cartlist, createCart } from '../../src/redux/slices/Cart'
import {getCart} from '../../src/redux/slices/Cart'
import { getUser } from '../../src/redux/slices/Auth'
function Index() {
  const dispatch=useDispatch();

  const fetchdata= async () => {
    
    const result = await dispatch(Cartlist());
    console.log(result)
     
    }
  useEffect(() => {
    dispatch(getUser())
   
    fetchdata();  
    }, []) 

  return (
   <>
   <Navabar/>
   <Block1/>
   {/* <Footer/> */}
   </>
  )
  }

export default Index