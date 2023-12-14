import React, { useEffect, useRef, useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import { HomeSlider } from '../../constants/home/HomeSlider';
import SliderItem from './slider/SliderItem';
import { ArrowBack, ArrowForward, ChevronLeftOutlined, ChevronRightOutlined, } from '@mui/icons-material';

import { Box, Button, styled, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Shoesimage } from './Block4/Shoesimage';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import { useRouter } from 'next/router';
import { addProduct, getProduct } from '../../redux/slices/Product';
import InfiniteScroll from "react-infinite-scroll-component";

const SliderContainer = styled('div')({
width:"22%",
height:"22%",
// display: "flex",
overflow:"hidden",

position:'relative',
// border:'1px solid black',
// boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
borderRadius:'0px',
"@media (max-width: 900px)": {
    width:"100%",
height:"600px",
height:"400px",
backgroundColor:'white',
 },

"@media (max-width: 600px)": {
    backgroundColor:'white',
    width:"100%",
    marginTop:'80px',
    height:"350px",
 },


})
const SliderInnerContainer = styled('div')({
 
  width:'100%',
  height:'60%',
  // border:'1px solid black',
  overflow:"hidden",
  backgroundColor:'#EBEBEB',
 
// paddingRight:'40px',
  // boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  "@media (max-width: 900px)": {
    width:'100%',
    
 
 },

  "@media (max-width: 600px)": {
    width:'10%',
    height:"40px",
 
 },
})




const PreviousBtn = () =>{
  const {className,onClick} = props;
  
   return (
         <div className={className}   onClick={onClick}>
          <ArrowBack sx={{color:'black',zIndex:'100',background:'white',borderRadius:'50px',fontSize:'40px',marginLeft:'50px' }} />
         </div>  
   )
}

const NextBtn = (props) =>{
   const {className,onClick} = props;
   return (
    <div className={className}   onClick={onClick}>
          <ArrowForward sx={{color:'black',fontSize:'40px',background:'white',borderRadius:'50px',marginLeft:'-30px'}}/>
         </div> 
   )
}


const Block4 = ({data}) => {
  const [datas, setDatas] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const scrollObserver = useRef(null);
  const dispatch=useDispatch();
  


 
  const router=useRouter();
  const datae = useSelector((state)=>state?.product)
  console.log(datae)
  // const fetchDataFromAPI = async (pageNum) => {
  //   try {
  //     setLoading(true);
  //     const response = await dispatch(addProduct({}, pageNum));
  //     console.log(responce)
  //     setDatas((prevData) => [...prevData,...response]);
  //     setPage((prevPage) => prevPage + 1);
  //     setHasMore(responce.length > 0);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };
  // useEffect(() => {
  //   fetchDataFromAPI(page);
  // }, [page]);
  
  // const handleScroll = () => {
  //   const element = scrollObserver.current;
  
  //   if (element) {
  //     const { scrollTop, scrollHeight, clientHeight } = element;
  //     const atBottom = scrollTop + clientHeight >= scrollHeight;
  
  //     if (atBottom && !loading && hasMore) {
  //       fetchDataFromAPI(page + 1);
  //     }
  //   }
  // };
  
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [loading, hasMore, page]);
  
  const settings = {
    dots: false,
    arrows:false,
    infinite:true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    initialSlide:0,
    // prevArrow:<PreviousBtn />,
    // nextArrow:<NextBtn />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
          },
        },
         {
          breakpoint: 960,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
          },
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            arrows:false,
            autoplay:true,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 200,
            arrows:false,
            autoplay:true,
            // dots: true,
          },
        },
    ]
  };
  console.log(data);
  
  return (
    <>
     
     
    <SliderContainer className='relative'>         
       <SliderInnerContainer  onClick={()=>router.push(`/product/${data.id}`)} >
    <Slider {...settings} className='border  cursor-pointer' ref={scrollObserver} >
      
     {data && data.productImages.length >0 && data.productImages?.map((item) => (
      
    <SliderItem key={item} posterLinks={item}  />
))} 
    </Slider>
    
    <div className=' bg-white py-2 '>
    <h1 className='text-[15px] text-black font-mulish font-[800] text-start   '>Mochi</h1>
    <h2 class='text-[15px] text-start  font-mulish font-[600]   '>{data?.title?.shortTitle}</h2>
    <h3 class='text-[16px] text-start  text-black font-[1000]  font-mulish '>Rs. {data?.price?.mrp}.00 </h3>
    </div>
    
      </SliderInnerContainer>  
    </SliderContainer>
    
    
  

    </>
  )
}

export default Block4