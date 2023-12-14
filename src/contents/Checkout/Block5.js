import React from 'react'
import Block6 from './Block6'
import Block2 from './Block2'
import { Box, Grid } from '@mui/material'

function Block5() {
  return (
    <>
    <div className='my-28 mx-10'>
   <h1 className='mx-8 py-2'>Shipping Address</h1>
  <Box sx={{ flexGrow: 1 }}>
  <Grid container spacing={2} columns={16}>
    <Grid sx={{position:"sticky", top:"100px", maxHeight:"120vh"}} item xs={10}>
      <Block6/>
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

export default Block5