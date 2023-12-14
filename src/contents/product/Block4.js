import { Button } from '@mui/material'
import React from 'react'
import ShareIcon from '@mui/icons-material/Share';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import Forward30Icon from '@mui/icons-material/Forward30';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useDispatch, useSelector } from 'react-redux';
import { createCart } from '../../redux/slices/Cart';
import { useRouter } from 'next/router';
function Block4() {
  const router=useRouter();
  const path=router.query.ProductId;
  console.log(path);
  const data = useSelector((state)=>state.product.product)
  const dataItem =  data && data.length>0 && data?.filter((item)=> item.id === path)
  console.log(dataItem);
  const dispatch = useDispatch()
  const {user} = useSelector((state)=> state.user)
  
  
  const addCart = async (productId) => {
    const data = {
      "userId":user.id,
      "products":[{
        "productId":productId,
        "qty":1
      }]
    }
    console.log(data)
   const result=  await dispatch(createCart(data))
   console.log(result);
   if(result){
    router.push('/Cart');

   }
   
  }

 
  const images1=dataItem && dataItem[0] && dataItem[0].productImages;
  console.log(dataItem && dataItem[0] && dataItem[0].title.longTitle)
  return (
    <>
    <div className='mx-8 font-mulish'>
    <h1 className='text-[30px] font-[700] my-2'>Mochi</h1>
    <div className='flex justify-between '>
    <p className='text-[17px] font-[600] '>{dataItem && dataItem[0] && dataItem[0].title && dataItem[0].title.shortTitle}</p>
    <p className="mx-9 "><ShareIcon  /></p>
    </div>
   <p className='text-sm py-2'>SKU: 18-1582-11-40</p> 
    <p className='text-3xl font-[900]'>Rs.{ dataItem && dataItem[0] && dataItem[0].price && dataItem[0].price.mrp}.00</p>
    <p className='text-sm font-medium text-teal-400'>(Inclusive of all taxes)</p>
    <p className='my-2 py-2 font-bold'>SELECT SIZE (UK)</p>
    <div className='flex '> 
     <div className='w-14 hover:border-[#37C2DD] cursor-pointer h-14 border-black border mx-1 rounded-full items-center flex justify-center'>
     6 
     </div>
     <div className='w-14 h-14 hover:border-[#37C2DD] cursor-pointer border-black border mx-1 rounded-full items-center flex justify-center'>
        7
     </div>
     <div className='w-14 hover:border-[#37C2DD] cursor-pointer h-14 border-black border mx-1 rounded-full items-center flex justify-center'>
        8
        </div>
        <div className='w-14 hover:border-[#37C2DD] cursor-pointer h-14 border-black border mx-1 rounded-full items-center flex justify-center'>
         9  
        </div>
        <div className='w-14  hover:border-[#37C2DD] cursor-pointer h-14 border-black border mx-1 rounded-full items-center flex justify-center'>
        10
        </div>
        <div className='w-14 h-14 hover:border-[#37C2DD] cursor-pointer border-black border mx-1 rounded-full items-center flex justify-center'>
          11 
        </div>
    </div>
    <h1 className='my-2 py-2 font-bold'>AVAILABLE COLORS</h1>
    <div className='flex  py-2'>
    <div className='w-14 h-14 object-contain  border rounded-full items-center flex justify-center'>
      
         <img src={images1[0]?.path} alt="" />
         {/* <Image1 src={dataItem && dataItem.length>0 && dataItem[0].productImages && dataItem[0].productImages[index].path} /> */}
        </div>
        <div className='w-14 h-14 object-contain  border mx-1 rounded-full items-center flex justify-center'>
           <img src={images1[2]?.path} alt="" />
        </div>
        
    </div>
     <div>
        <button onClick={()=>addCart(dataItem && dataItem[0] && dataItem[0].id)} className="border py-2 my-4 px-4  rounded-md border-neutral-400">ADD TO CARD</button>
        <button onClick={()=>router.push("/checkout")}  className=" py-2 px-24 rounded-md mx-4 bg-teal-500 text-white ">BUY NOW</button>
     </div>
     <div>
     <h1 className='my-2 py-2 font-bold'>AVAILABLE COLORS</h1>
     </div>
     <div className='flex '>
      <input type="text" name="pincode" id="" className='py-2 border px-4 w-96' placeholder='Check Pincode ' />
      <button className=" py-2 px-7 border  bg-teal-500 text-white ">Check</button>
     </div>
     <div>
     <p className='flex items-center py-2  mx-2 text-center'>
     <LocalShippingIcon sx={{fontSize:"30px"}} /> 
         <p className='mx-2'> Usually Ships in 3-4 Days </p> 
      </p>
      <p className='flex items-center py-2  mx-2 text-center'>
     <Forward30Icon sx={{fontSize:"30px"}} /> 
         <p className='mx-2'> Usually Ships in 3-4 Days </p> 
      </p>
      <p className='flex items-center py-2  mx-2 text-center'> 
     <LocalShippingIcon sx={{fontSize:"30px"}} /> 
         <p className='mx-2'> Usually Ships in 3-4 Days </p> 
      </p>
      <p className='flex items-center py-2  mx-2 text-center'>
     <Forward30Icon sx={{fontSize:"30px"}} /> 
         <p className='mx-2'> Usually Ships in 3-4 Days </p> 
      </p>
     </div>
    <div>
    <h1 className='my-2 py-2  text-2xl '>PRODUCT DETAILS</h1>
    <p className='py-2'>Mochi Tan Formal Derby</p>
     <div className='grid grid-cols-2 '>
      <div className='border-b'>
       
     <p className='font-[300]'>Type</p>
     <h1 className=' font-[600] text-[18px]'>Sandals</h1>
     
      </div>
      
      <div className=''>
     <p className='font-[300]'>Upper Material</p>
     <h1 className='py-2 font-[600] text-[18px] '>Synthetic </h1>
     <hr />
      </div>
      <div className='border-b'>
     <p className='font-[300]'>Occasion</p>
     <h1 className='font-[600] text-[18px]'>Casual</h1>
      </div>
      <div >
     <p className='font-[300]'>Gender</p>
     <h1 className='py-2 font-[600] text-[18px]'>Men</h1>
     <hr />
      </div>
      <div  className='border-b'>
     <p className='font-[300]'>Color</p>
     <h1 className=' font-[600] text-[18px]'>Tan</h1>
      </div>
      <div>
     <p className='font-[300]'>Brand</p>
     <h1 className=' font-[600] text-[18px] py-2'>Mochi</h1>
     <hr />
      </div>
      <div className='border-b'>
     <p className='font-[300]'>Country of Origin</p>
     <h1 className=' font-[600] text-[18px]'>India</h1>
      </div>
      <div className='border-b'>
     <p className='font-[300]'>Net Quantity</p>
     <h1 className=' font-[600] text-[18px]'>Net Quantity: 1 Pair</h1>
      </div>


     </div>
    </div>
    <div className='my-4'>
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='font-[400] text-[20px]'>Care Instruction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Keep your product dry avoid gettign it wet or damp. to clean it, simply wipe with a dry cloth. Keep fasteners and zip running smoothly by running pencil leads over the open teeth.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='font-[400] text-[20px]'>Return and shipping policy</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The return/replacement/refund policy is customer friendly so that you will feel more comfortable in making online buying decision. Only unused merchandise will be eligible for return within 15 days from the date of delivery. No return/refund/replacement on SALE products. You can return the merchandise via courier by raising the return request through the website My Account section by providing a valid reason. Please return to us the unused merchandise in original packing (Same box in which the merchandise was sent to you) for inspection. Replacement, if available will be couriered to you or a refund will be available for unhampered products.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className='font-[400] text-[20px]'>Other Details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Manufactured by : MFG by Metro Brands LTD
              Net Quantity: 1 Pair
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className='font-[400] text-[20px]'>Consumer Complain Contact</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          For customer complaint contact at marketer address    
Email:customercare@mochishoes.com
         Phone:+91-797 7311 647
          </Typography>
        </AccordionDetails>
      </Accordion>

      </div>
      </div>
      
   </>
  )
}

export default Block4