import React from 'react'
import { Box, Button, styled } from '@mui/material';
// import { styled } from '@mui/styles';
import { East } from '@mui/icons-material';

const SliderHead = styled("div")({
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
  })
  const Head = styled('span')({
  fontSize:"24px",
  fontWeight:"600",
  paddingLeft:'10px',
  })

export default function Header(props) {
  return (
    <Box>
      <SliderHead>  
        <Head>{props.sliderH}</Head>
        <Button color="primary" variant="contained" endIcon={<East/>} size="small" sx={{margin:"10px 10px 0px 0",borderRadius:'5px',fontFamily:"Roboto"}} >View More  </Button>
      </SliderHead>
    </Box>
  )
}
