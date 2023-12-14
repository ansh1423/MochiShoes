import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

import { HomeSlider } from '../../constants/home/HomeSlider';
import SliderItem from './slider/SliderItem';
import { ArrowBack, ArrowForward, ChevronLeftOutlined, ChevronRightOutlined, } from '@mui/icons-material';

import { Box, Button, styled, Typography } from '@mui/material';

const SliderContainer = styled('div')({
width:"100%",
height:"500px",
display: "flex",
justifyContent:'center',
alignItems:'center',
overflow:"hidden",
backgroundColor:'#EBEBEB',
position:'relative',
// border:'1px solid black',
// boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
borderRadius:'0px',
"@media (max-width: 900px)": {
    width:"100%",
height:"400px",
backgroundColor:'white',
 },

"@media (max-width: 765px)": {
    // backgroundColor:'white',
    // width:"100%",
    // marginTop:'80px',
    // height:"350px",
    display:'none'
 },


})
const SliderInnerContainer = styled('div')({
 
  width:'100%',
  height:'auto',
  // border:'1px solid black',
  overflow:"hidden",
  backgroundColor:'#EBEBEB',
// paddingRight:'40px',
  // boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
  "@media (max-width: 900px)": {
    width:'100%',
    
 
 },

  "@media (max-width: 600px)": {
    width:'100%',
    height:"350px",
 
 },
})




const PreviousBtn = (props) =>{
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


const Block1 = () => {
// console.log(sliderData)  
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
   
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 300,
            arrows:true,
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
  return (
    <>
    <div className=' '>
     {/* <Box sx={{display:'flex',padding:{xs:'20px',sm:'30px',md:'0px 0px 30px 200px'},justifyContent:'center',flexDirection:'column'}}>
       <Typography sx={{fontSize:{xs:'30px',sm:'30px',md:'30px'},fontWeight:'500',color:'black'}}>Popular Courses</Typography>
       <Typography sx={{fontSize:{xs:'15px',sm:'20px',md:'15px'},fontWeight:'500',color:'black'}}>Limitless learning, more possibilities</Typography>
      
       </Box> */}
    <SliderContainer>         
       <SliderInnerContainer>
    <Slider {...settings}>
     {HomeSlider && HomeSlider.map((item)=>(
      <SliderItem  key={item.key} posterLinks={item} />
      ))}
    </Slider>
      </SliderInnerContainer>  
    </SliderContainer>
    </div>
{/* 
      <Box sx={{display:'flex',justifyContent:'center',marginTop:'30px'}}>
      <Button variant='contained' sx={{backgroundColor:'#FE8C3C',color:'white',border:'1px solid black',borderRadius:'10px',"&:hover":{backgroundColor:'black',color:'white'},width:'150px',fontSize:'20px'}}>Explore All</Button>
      </Box> */}

    </>
  )
}

export default Block1