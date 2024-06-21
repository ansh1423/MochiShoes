import React from 'react';
import { Card, styled } from '@mui/material';

const SliderContainer = styled("div")({
  height: "500px",
  marginLeft: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "start",
});

const ImageContainer = styled(Card)(({ theme }) => ({
  height: '300px',
  display: "flex",
  alignItems: "center",
  justifyContent: 'center',
  flexDirection: "column",
  margin: "10px",
  borderRadius: "10px",
  overflow: "hidden",
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Adjusted shadow for a more lifted appearance
  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition for hover effects
  transform: 'translateY(0)', // Default position
  "&:hover": {
    transform: 'translateY(-10px)', // More lift on hover
    boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)', // Stronger shadow on hover
  },
  "@media (max-width: 1200px)": {
    width: "20vw",
    height: "200px",
  },
  [theme.breakpoints.down('md')]: {
    width: "20vw",
    height: "200px",
  },
  "@media (max-width: 800px)": {
    width: "30vw",
    height: "250px",
  },
  [theme.breakpoints.down('max-sm')]: {
    width: "50vw",
    height: "200px",
  },
  
  [theme.breakpoints.down('sm')]: {
    width: "35vw",
    height: "190px",
  },
}));

const Image = styled("img")(({ theme }) => ({
  width: "auto",
  height: "300px",
  objectFit: "cover",
  [theme.breakpoints.down('md')]: {
    width: "100%",
    height: "85%",
  },
  [theme.breakpoints.down('sm')]: {
    width: "100%",
    height: "82%",
  },
  [theme.breakpoints.down('xs')]: {
    width: "100px",
    height: "75px",
  },
}));

const Head = styled("h3")({
  fontSize: "15px",
  fontWeight: "700",
  paddingLeft: '15px',
  paddingTop: '0px',
  marginBottom: "5px",
  textAlign: "start",
  "@media (max-width: 600px)": {
    fontSize: "10px",
  },
  "@media (max-width: 980px)": {
    fontSize: "13px",
  },
});

const Para = styled("p")({
  fontSize: "15px",
  fontWeight: "600",
  paddingLeft: '15px',
  paddingBottom: '50px',
  "@media (max-width: 600px)": {
    fontSize: "10px",
    paddingBottom: '15px',
  },
  "@media (max-width: 980px)": {
    fontSize: "13px",
    paddingBottom: '15px',
  },
});

export default function Item({ posterLinks }) {
  console.log(posterLinks);
  return (
    <SliderContainer>
      <ImageContainer
        sx={{
            overflow:"hidden",
          border: 1,
          borderColor: '#FFFFFFF',
          p: 2, // Optional padding for better visibility
        }}
      >
        <Image src={posterLinks.image} />
      </ImageContainer>
      <Head>{posterLinks.name}</Head>
      <div className='flex flex-col justify-start'>
        <Head>{posterLinks.title.shortTitle}</Head>
        <Head>{posterLinks.title.longTitle}</Head>
        <Para>Rs.{posterLinks.price.mrp}.00</Para>
      </div>
    </SliderContainer>
  );
}
