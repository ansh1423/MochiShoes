import React from 'react'
// import { styled } from '@mui/styles'
import { Card, styled } from '@mui/material';

const SliderContainer = styled("div")({
    width:"99%",
    // height:"auto",
})
const ImageContainer = styled(Card)(({ theme }) => ({
    width:'23vw',
    height:'300px',
    display:"flex",
    // alignItems:"center",
    justifyContent:'center',
    flexDirection:"column",
    margin:"10px 10px",
    "@media (max-width: 1200px)": {
        width:"27vw",
        height:"200px",
    },
    [theme.breakpoints.down('md')]: {
        width:"37vw",
        height:"200px",
    },
    // "@media (max-width: 800px)": {
    //     width:"26vw",
    //     height:"250px",
    // },
    [theme.breakpoints.down('sm')]: {
        width:"72vw",
        height:"190px",
    },

}));
const Image = styled("img")(({ theme }) => ({
   
    width:"100%",
    height:"87%",
    objectFit:"",
    [theme.breakpoints.down('md')]: {
        width:"100%",
        height:"85%",
    },
    [theme.breakpoints.down('sm')]: {
        width:"100%",
        height:"82%",
    },
    // [theme.breakpoints.down('xs')]: {
    //     width:"70px",
    //     height:"75px",
    // },
}));
const Head = styled("h3")({
    fontSize: "16px",
    fontWeight:"500",
    paddingLeft:'15px',
    paddingTop:'0px',
    // textAlign:"center",
    marginBottom:"5px",
    "@media (max-width: 600px)": {
       fontSize: "10px",
       },
    "@media (max-width: 980px)": {
       fontSize: "13px",
       },
})
const Para = styled("p")({
    fontSize:"14px",
    fontWeight:"600",
    paddingLeft:'15px',
    paddingBottom:'50px',
    "@media (max-width: 600px)": {
        fontSize: "10px",
        paddingBottom:'15px',
        },
    "@media (max-width: 980px)": {
        fontSize: "13px",
        paddingBottom:'15px',
        },
})

export default function Item({posterLinks}) {
    console.log(posterLinks);
  return (
    <SliderContainer>
        <ImageContainer sx={{borderRadius:'5px',}}>
            <Image src={posterLinks.image} />
            <Head className='font-[600] w-20'>Mochi</Head>
            <Head className='font-[500] text-[16px] '>{posterLinks.title.shortTitle}</Head>
            <Para className='font-[700] text-[15px]'>Rs. {posterLinks.price.mrp}.00</Para>
        </ImageContainer>
    </SliderContainer>
  )
}
