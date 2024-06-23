import React, { useEffect } from 'react'
import Navabar from '../../src/layouts/Navabar/index'
import Block1 from '../../src/contents/product/Block1'
import Block2 from '../../src/contents/product/Block2'
import Block3 from '../../src/contents/product/Block3'
import Block5 from '../../src/contents/product/Block5'
import Block6 from '../../src/contents/product/Block6/Block6'
import Footer from '../../src/layouts/Footer'
import { Products } from '../../src/constants/home/Products'
import { useDispatch, useSelector } from 'react-redux'
import { listProduct } from '../../src/redux/slices/Product'
export default function Index() {
  const dispatch=useDispatch();
  const  data=useSelector((state)=>{state.product.product?.data?.[0].category});
  console.log(data)
  // const product=useSelector((state)=>state.product);
  useEffect(() => {
    const getProduct= async () => {
    
    const result = await dispatch(listProduct({ filter: '', sort: '' }));
  
     console.log(result)
    }
    getProduct();  
    }, []) 
    console.log(Products,"Product");

  return (
    <>


      // Show content once loading is false
    
        <Navabar />
        <Block1 />
        <Block2 />
        {/* <Block3 /> */}
        <Block5 />
        <Block6 sliderData={Products} />
        <Footer />
      </>
  
  );
}