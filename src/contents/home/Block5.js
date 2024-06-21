import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import { styled } from '@mui/styles';
import Item from './item/Item';
import { ChevronLeftOutlined, ChevronRightOutlined } from '@mui/icons-material';
import Header from './header/Header';
import { styled } from '@mui/material';
import { useSelector } from 'react-redux';

const SliderContainer = styled('div')({
width:"95%",
height:"400px",
display:"flex",
flexDirection:"column",
margin:"0 0px 0px 0px",
overflow:"hidden",
// boxShadow: "0 1px 5px rgba(104, 104, 104, 0.8)",
// "@media (max-width: 1490px)": {
//  margin:"2% -1.5%"

// },
"@media (max-width: 1200px)": {
  width:"95%",
   margin:"1% 1rem"
 
 },

})
const SliderInnerContainer = styled('div')(({ theme }) => ({
  display: "flex",
  gap:'10px',
  justifyContent:"space-between",
  flexDirection:"column",
 
  padding:"0 0px 0 0px",
  [theme.breakpoints.down('sm')]: {
    padding:"0 0 0 4px",
},
}));


const PreviousBtn = (props) =>{
  const {className,onClick} = props;
 console.log(props.sliderData)
  
   return (
         <div className={className}   onClick={onClick}>
          <ChevronLeftOutlined style={{color:'black',zIndex:'10',fontSize:'2.5rem' }} />
         </div>  
   )
}

const NextBtn = (props) =>{
   const {className,onClick} = props;
   return (
     <div  className={className}  onClick={onClick}>
       <ChevronRightOutlined style={{color:'black',  zIndex:'10',fontSize:'2.5rem'}} />
     </div>
   )
}

export default function Block5(props) {
console.log(props.sliderData)
    const settings = {
        dots: false,
        arrows:true,
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        initialSlide:0,
        prevArrow:<PreviousBtn />,
        nextArrow:<NextBtn />,
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                speed: 300,
                arrows:false,
              },
            },
             {
              breakpoint: 960,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 3,
                speed: 300,
                arrows:false,
              },
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                speed: 300,
                arrows:false,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                speed: 300,
                arrows:false,
              },
            },
             {
               breakpoint: 500,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 2,
                 speed: 300,
                 arrows:false,
             },
           },
             {
              breakpoint: 365,
               settings: {
                 slidesToShow: 1,
                 slidesToScroll: 2,
                 speed: 300,
                 arrows:false,
             },
             },
        ]
      };
      
      const product=useSelector((state)=>state?.product?.product);
      console.log(product);
  return (
    <>
    
    {/* <div className='items-center gap-10 justify-center'> */}
    <SliderContainer sx={{  }}>         
      <SliderInnerContainer  sx={{}}>
        {/* <Header sliderH={props.sliderData.category}/> */}
        <Slider {...settings}  sx={{}} >
        { product.data && product.data.length > 0 && product.data?.map((item,index)=>(
        <Item posterLinks={item} key={index} />
        ))}
        </Slider>
      </SliderInnerContainer>  
    </SliderContainer>
    {/* </div> */}
    
    </>
  )
}
