// import React, { useEffect, useState } from 'react'
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { useRouter } from 'next/router';
// import { useDispatch, useSelector } from 'react-redux';
// // import { getUser } from '../../../src/redux/slice/auth';

// import { toast, ToastContainer } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";
// import { Orderlist, updateOrder } from '../../../src/redux/slices/Order';
// import { Cartlist } from '../../../src/redux/slices/Cart';
// import { getUser } from '../../../src/redux/slices/Auth';

// function Payment() {

//     const dispatch = useDispatch()
//     const router = useRouter();
    
    
    
//     //Use Selector --> Redux 
//     const {user} = useSelector((state)=> state.auth);
//     // const {carts} = useSelector((state)=> state.cart);
//     const {orders} = useSelector((state) => state.order);
    
//      useEffect(()=> {
//          dispatch(getUser());
        
//          dispatch(Cartlist())
//      },[])
//     useEffect(()=> {
//         // dispatch(getUser());
//         dispatch(Orderlist())
        
//         // dispatch(cartList())
//     },[])

//     // function -> to get total MRP
//     // let price = 0;

//     // for(let  j= 0; j<  carts.length ; j++){
//     // let ans = (carts[j].products[0].productId.price.mrp) * (carts[j].products[0].qty);
//     //     price += ans;
//     // }
//     // let totalPrice = price + price * 0.12 ;
//     // console.log(filters)
    
//     const routerId = router.query.id;
//     // const userid = user.id;
//     const id = orders && orders.length > 0 && orders[0] && orders[0].id ;
//     // console.log(ordersId)
//     useEffect(() => {
        
//         const checkOrder = async () => {
//             const filters = {
//                  paymentId : routerId,
                  
//               };
//            let orderData = await dispatch(orderList(filters));
//             console.log(orderData) 
//            if(orderData && orderData && orderData.status === 'RECORD_NOT_FOUND' && orderData.data === null){
//              let data = {       
//              "products": [{
                         
//                         "orderStatus":{
//                             "orderConfirm": {
//                             "isConfirmed": true,
//                             "date": new Date()
//                             },
//                             "shipped": {
//                                 "isConfirmed": false,
//                             },
//                             "outForDelivery": {
//                                 "isConfirmed": false,
//                             },
//                             "delivered": {
//                                 "isConfirmed": false,
//                             },
//                             "cancel": {
//                             "isConfirmed": false,
//                             },
//                             "refunded": {
//                                 "isConfirmed": false,
//                             },
//                         },
                         
//                         "status": "pending",
//                         "paymentId":routerId,
//                         "paymentStatus": "confirmed",
                         
//                     }]
//              }
//                  console.log(data)
//                  console.log(id)
//                 try{
                   
//                     const res = await dispatch(updateOrder(data,id));
                    
//                     console.log(res)
//                     if(res){
//                         toast.success("Successfully Order Placed")
//                         return true
        
//                     }else{
//                         return false
//                     }
//                 }catch(e){
//                     console.log(e);
//                 }  

//             }  
//         }
       
//         checkOrder()
        
//         // const timeoutId = setTimeout(checkOrder, 5000);
//         // return () => clearTimeout(timeoutId);
//     },[id])
    
//     // useEffect(() => {
//     //     const handleCleanCart =async () => {
//     //         try{
//     //             let ids = [];
//     //             for(let k of carts){
//     //               ids.push(k.id);
//     //             }
//     //             const result = await dispatch(deleteManyCart(ids));
//     //             router.push('/checkout/orderplaced');
//     //             if(result){
                    
//     //                 return true
        
//     //             }else{
//     //                 return false
//     //             }
                
//     //         }catch(err){
//     //             console.log(err)
//     //         }
        
//     //     };
//     //     handleCleanCart()
//     //     // const timeoutId = setTimeout( handleCleanCart , 5000);
//     //     // // Clean up the timeout when the component unmounts
//     //     // return () => clearTimeout(timeoutId);
//     //   }, []);
     

//   return (
    
//     <div className='mt-[50px]  h-[100vh] flex justify-center items-center border'>
//      <div className='w-[500px] h-[350px] border border-gray-600 flex flex-col justify-center items-center rounded-lg
//      shadow-3xl'>
//             <div>
//                  <CheckCircleIcon sx={{color:"#39BF83",fontSize:"100px",marginLeft:"40px"}}/>
//                  <div className='text-[#39BF83] text-[25px]'>Payment successfully</div>
//             </div>
//             <div className='flex justify-between w-full px-8 py-1 mt-[10px]'>
//                 <div className='text-gray-400 font-normal'>Payment Type</div>
//                 <div className='text-black font-semibold'>Net Banking</div>
//             </div>
//             <div className='flex justify-between w-full px-8 py-1'>
//                 <div className='text-gray-400 font-normal'>Email</div>
//                 {/* <div className='text-black font-semibold'>{user.email}</div> */}
//             </div>
//             <div className='flex justify-between w-full px-8 py-1'>
//                 <div className='text-gray-400 font-normal'>Amount Paid</div>
//                 <div className='text-black font-semibold'></div>
//             </div>
//             <div className='flex justify-between w-full px-8 py-1'>
//                 <div className='text-gray-400 font-normal'>Tranaction Id</div>
//                 <div className='text-black font-semibold'>{router.query.id}</div>
//             </div>
//             <div>
//                 <button className='mt-[5px] ml-[10px] bg-white text-black w-[150px] h-[40px] rounded-3xl border border-black tracking-wide leading-3 mb-[20px] hover:bg-[#374A94] hover:text-[#fff] hover:border ' 
//                    onClick={()=> router.push("/checkout/orderplaced")}  >Check ORDER</button>
//             </div>
//      </div>
//      <ToastContainer/>
//     </div>
//   )
// }

// export default Payment
