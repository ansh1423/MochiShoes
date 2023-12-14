import { Box, Button, styled, Typography } from '@mui/material'
import React from 'react'
import { useRouter } from 'next/router'



const SliderContainer = styled("div")({
  width: "100%",
  height: "500px",
 
  display: 'flex',

  flexDirection: 'column',
  alignItems: 'center',
  
  "@media (max-width: 900px)": {
    width: "100%",
    height: "400px",
  },
  "@media (max-width: 600px)": {
    width: "100%",
    height: "350px",
  },

})
const ImageContainer = styled("div")({
  display: "flex",
  width: "100%",
  height: "800px",
  position: 'relative',
  background: '#F2F2F2',
  
  "@media (max-width: 900px)": {
    width: "100%",
    height: "600px",
  },
  "@media (max-width: 600px)": {
    width: "100%",
    height: "600px",
  },

})
const Image = styled("img")({
  width: "100%",
  height: "500px",
  objectFit: "cover",
  borderRadius: '0px',
 
  "@media (max-width: 900px)": {
    width: '100%',
    height: '400px',

  },

  "@media (max-width: 600px)": {
    width: '100%',
    height: '350px',

  },

})

const SliderItem = ({ posterLinks }) => {
  // console.log(posterLinks)
  const router = useRouter();

 
  return (
    <>
      <SliderContainer>
        <ImageContainer>
          <Box sx={{ width: '100%',  }}>
            <Image src={posterLinks.image} alt="divineyogpeeth yoga" />
          </Box>
          {/* <Box sx={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: { xs: '350px', sm: '400px', md: '500px' }, flexDirection: 'column' }}>
            <Typography sx={{ color: 'white', fontSize: { xs: '20px', sm: '23px', md: '25px' }, }}>With Divine Yogpeeth</Typography>
            <Typography sx={{ fontyFamily: 'Kaushan Script', fontSize: { xs: '35px', sm: '35px', md: '45px' }, fontWeight: '700', color: 'white' }}>Balance Your Life</Typography>
            <Button variant='contained' sx={{ borderRadius: '0px', background: 'white', color: 'black' }} onClick={handleContact}> Book Now</Button>
          </Box> */}
        </ImageContainer>
      </SliderContainer>
    </>
  )
}

export default SliderItem