import { Box, Grid } from '@mui/material'
import React from 'react'
import Block2 from './Block2'
import Block3 from './Block3'

function Block1() {
 
  return (
    <> 
     <div className='mt-10 max-sm:mt-0 max-sm:mb-0 border-t-2 mb-10'>
    <div className='text-3xl mx-4  mb-5 mt-10'>
        Shopping Cart
    </div>
    <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2} columns={16}>
    <Grid sx={{ position: { xs: "none", md: "sticky" }, top: "0px", maxHeight: "10vh" }} item md={11} xs={16}>
      <Block3 />
    </Grid>
    <Grid item md={5} xs={16}>
      <Block2 />
    </Grid>
  </Grid>
</Box>
   </div>
   </>
  )
}

export default Block1