import React from 'react'
import { Box, Grid } from '@mui/material'
// import React from 'react'
import Block2 from '../Checkout/Block2'
import Block3 from '../Checkout/Block3'
function Block4() {
  return (
      <>
      <div className='my-28 mx-10'>
     <h1 className='mx-8 py-2'>CHOOSE PAYMENT MODE</h1>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2} columns={16}>
      <Grid sx={{position:"sticky", top:"100px", maxHeight:"100vh" , width:'100%'}} item xs={10} >
        <Block3/>
      </Grid>
     
      <Grid item xs={6}>
       <Block2/>
      </Grid>
    </Grid>
  </Box>
  </div>
  </>
  )
}

export default Block4