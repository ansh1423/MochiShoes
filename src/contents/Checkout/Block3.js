import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../redux/slices/Order';
import { deleteCart } from '../../redux/slices/Cart';
import Script from 'next/script'
import axios from 'axios';

const Accordion = styled((props) => (


  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails= styled(MuiAccordionDetails )(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));
function Block3() {
  const dispatch=useDispatch();
  const router=useRouter();
  const handleorders = async()=>{
    router.push('/order')
  } 
  const user=useSelector((state)=>state?.user?.user);
  console.log(user);

  const cart= useSelector((state)=>state?.cart?.cart)
  console.log(cart)
  let totalPrice =1000000;
  
 for(let i =0;i<cart.length;i++){
 let ans = (cart[i]?.products[0]?.productId?.price.mrp)*(cart[i]?.products[0].qty)
  // console.log(ans)
 totalPrice=totalPrice+ans; 
 }
 console.log(totalPrice);
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };  
  const cashOnDelivery = async ()=>{
    let data =  {
      "userId":`${user.id}`,
      "products":[],
      "address":{
        "locality" : `${user && user.address.length>0 && user.address[0].locality }`,
        "city" : `${user && user.address.length>0 && user.address[0].city}`,
        "state" : `${user && user.address.length>0 && user.address[0].state}`,
        "country" : `${user && user.address.length>0 && user.address[0].country}`,
        "zipcode" : user && user.address.length>0 && user.address[0].zipcode
      },
    }
    
     cart && cart?.map((item)=>{

       item.products[0].productId !==undefined && data?.products?.push({
          "productId": `${item.products[0].productId.id}`,
          "qty": `${item.products[0].qty}`, 
          "status": "upcoming",
          "paymentStatus": "pending",
          "orderStatus":{
              "orderConfirm":{
               "isConfirmed":true,
               "date":new Date()
              },
              "shipped":{
               "isConfirmed":false,
              },
              "outForDelivery":{
               "isConfirmed":false,
              },
              "delivered":{
               "isConfirmed":false,
              },
              "cancel":{
               "isConfirmed":false,
              },
              "refunded":{
               "isConfirmed":false,
              } 
          }
        }) 
      })
      console.log(data)
      if(user?.currentUser===null){
        router.push('/login');
    }
    else{
    const res = await dispatch(createOrder(data));
    console.log(res);

    let query = {"userId":`${user.id}`,"isDeleted":false}
    console.log(query)
    let sort = {"name":1}
    console.log(sort)
    if(res){
      {cart.map((item)=>{
     dispatch(deleteCart(item.id));
        
      })}
    //   router.push('/order');
      
      alert('Order Placed  Successfully');
     }
     else{
     alert('Some errors are occurred');
     }
    }
  
  }

   
  const handlePay = async () =>{

    console.log("heelo pay")
  
      const option = {
        amount : 10000,
        currency : 'INR'
      }
  

      cashOnDelivery()
      const {data} = await axios.post(`${process.env.NEXT_PUBLIC_HOST}/userapp/payment/checkout`,option, {
       headers: { Authorization: `Bearer ${localStorage.getItem('accessToken')}` }
   });
    //  if(data.status==='SUCCESS'){


      const options = {
        key:process.env.NEXT_PUBLIC_RAZORPAY_API_ID,
        "amount": totalPrice, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": user.email,
        "description": "Test Transaction",
        "image": "https://avatars.githubusercontent.com/u/86181346?v=4",
        // "order_id": data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "callback_url": `${process.env.NEXT_PUBLIC_HOST}/userapp/payment/paymentVerify`,
        "prefill": {
            "name":  user.email,
            "email": user.email,
            "contact":user.phone
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };
       var rzp1 = new window.Razorpay(options);
        rzp1.open();
  
  }
  


  return (
    <>
     <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>
    <Accordion expanded={expanded === 'panel1'} sx={{width:'100%'}} onChange={handleChange('panel1')}>
      <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
        <Typography >CREDIT CARD</Typography>
      </AccordionSummary>
      <AccordionDetails className='flex justify-end'>
         <button onClick={handlePay} className='py-3  flex justify-end text-white my-2 px-6 rounded-lg text-xl bg-teal-500'>Pay now</button>
      </AccordionDetails >
    </Accordion>
    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <Typography>DEBIT CARD</Typography>
      </AccordionSummary>
      <AccordionDetails className='flex justify-end'>
      <button className='py-3  flex justify-end text-white my-2 px-6 rounded-lg text-xl bg-teal-500'>Pay now</button>
      </AccordionDetails >
    </Accordion>
    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <Typography>WALLET</Typography>
      </AccordionSummary>
      <AccordionDetails className='flex justify-end'>
      <button className='py-3  flex justify-end text-white my-2 px-6 rounded-lg text-xl bg-teal-500'>Pay now</button>
      </AccordionDetails >
    </Accordion>
    <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
      <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
        <Typography>NET BANKING</Typography>
      </AccordionSummary>
      <AccordionDetails className='flex justify-end'>
      <button className='py-3  flex justify-end text-white my-2 px-6 rounded-lg text-xl bg-teal-500'>Pay now</button>
      </AccordionDetails >
    </Accordion>
    <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
      <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
        <Typography>CASH ON DELIVERY</Typography>
      </AccordionSummary>
      <AccordionDetails className='flex justify-end'>
      <button  onClick={cashOnDelivery}  className='py-3  flex justify-end text-white my-2 px-6 rounded-lg text-xl bg-teal-500'>Pay now</button>
      </AccordionDetails >
    </Accordion>
  </>
);
}

export default Block3