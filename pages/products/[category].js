import React, { useEffect, useState } from 'react'
import Block1 from '../../src/contents/products/Block1'
import Navabar from '../../src/layouts/Navabar/index'
import Block2 from '../../src/contents/products/Block2'
import Block3 from '../../src/contents/products/Block3'

import Footer from '../../src/layouts/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, getProduct } from '../../src/redux/slices/Product'
import Block4 from '../../src/contents/products/Block4'
import { useRouter } from 'next/router'

function Index() {
  const router=useRouter();
  
  const [query,setQuery] = useState()
  const[filter,setfilter]=useState({"category":query});
  const dispatch = useDispatch();
  const product=useSelector((state)=>state.product);
  
  useEffect(() => {
  const getProduct= async () => {
  const result = await dispatch(addProduct(filter));

   console.log(result)
  }
  getProduct();  
  }, [filter,query]) 


  return (
    
    <>
     <Navabar setQuery={setQuery}/>
      <Block1/>
      <Block2/>  
    <Block3 filter={filter}  setfilter={setfilter} />  
   <Footer/> 
    </>
  )
}

export default Index