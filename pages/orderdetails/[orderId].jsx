import React, { useEffect } from 'react'
import Block1 from '../../src/orderdetails/Block1'
import Navabar from '../../src/layouts/Navabar/index'
import Footer from '../../src/layouts/Footer'
import { useRouter } from 'next/router'
import { Orderlist } from '../../src/redux/slices/Order'
import { useDispatch } from 'react-redux'
function Orderdetails() {
  const router = useRouter();
  const dispatch=useDispatch();
  console.log(router.query, "orderdetails")
  useEffect(() => {
    const getOrderDetails = async () => {
      try {
        const result = await dispatch(Orderlist());
        console.log(result.data);
      } catch (error) {
        console.error('Error fetching order details:', error);
      }
      // setLoading(false); // Uncomment this if you have a loading state
    };

    getOrderDetails();
  },  [])

  return (
    <>
    <Navabar/>
  <Block1/>
  <Footer/>
  </>
  )
}

export default Orderdetails