import { Box, styled } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react'
import { useSelector } from 'react-redux';
import Slider from "react-slick";
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
// import { baseUrl } from "./config";
const Container = styled(Box)(({ theme }) => ({

    width: "700px",
    height: "600px",
    [theme.breakpoints.down('lg')]: {
      width:"440px",
      height:"330px",
      marginRight:"10px"
  
      },
      [theme.breakpoints.down('md')]: {
        width:"380px",
        height:"350px"
        },
  
  }))
const ImageWrapper = styled(Box)(({ theme }) => ({
    display: "flex",
    marginLeft: "140px",
    gap:"",
    [theme.breakpoints.down('lg')]: {
       marginLeft:'80px',
       marginRight:"10px"
      },
  }))
const Image = styled("img")(({ theme }) => ({
    width:"550px",
    height:"450px",
    objectFit:"cover",
    // "&:hover": {
    //   filter: "blur(2px)"
    // },
    [theme.breakpoints.down('lg')]: {
      width:"350px",
      height:'320px'
      },
      [theme.breakpoints.down('md')]: {
        width:"299px",
        height:'280px'
        },
  
  }))
  const Image1 = styled("img")(({ theme }) => ({
    width:'140px',
    height:"140px",
    marginBottom:'20px',
    marginLeft:"30px",
     
    border:"1px solid teal",
    [theme.breakpoints.down('lg')]: {
      width:"100px",
      height:'100px'
      },
    }))
function Block3 (){
  const router=useRouter();
  const path=router.query.ProductId;
  console.log(path)
  const data = useSelector((state)=>state.product.product)
  console.log(data);
  const dataItem =  data && data.length>0 && data?.filter((item)=> item.id === path)
  console.log(data.Item);
  console.log(dataItem);
  
    const settings = {
        customPaging: function(index) {
          return (
            <a className='relative bottom-[26rem] right-10'> 
              <Image1 src={dataItem && dataItem.length>0 && dataItem[0].productImages && dataItem[0].productImages[index].path} />
            </a>
          );
        },
        dots: true,
        dotsClass: "",
        infinite: true,
        autoPlay:true,
        autoPlaySpeed:2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };    
      
  return (
    <Container className='z-[1px] absolute'>
      <FavoriteBorderSharpIcon sx={{width:'100px'}} className='relative  left-[40rem]'/>
    {/* <h2>Custom Paging</h2> */}
    <Slider {...settings}>
      {dataItem &&  dataItem.length>0 && dataItem[0].productImages.length>0 && dataItem[0].productImages.map((item,index)=>(
      <ImageWrapper key={index}>
      <Image src={item.path} />
      </ImageWrapper>
      ))}
       {/* </ImageWrapper>
      <ImageWrapper>
      </ImageWrapper>
      <ImageWrapper>
        <Image src='https://admin.mochishoes.com/product/19-120/660/19-120M23.jpg' />
      </ImageWrapper>
        */}
    </Slider>
  </Container>
);
  }

export default Block3