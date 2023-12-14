import { Box, Grid } from '@mui/material'
import React from 'react'
import Block2 from './Block2'
import Block3 from './Block3'

function Block1() {
  return (
    <> 
     <div className='mt-10 border-t-2 mb-10'>
    <div className='text-3xl mx-4  mb-5 mt-10'>
        Shopping Cart
    </div>
     <Box sx={{ flexGrow: 1 }}>
     <Grid container spacing={2} columns={16}>
       <Grid sx={{position:"sticky", top:"100px", maxHeight:"100vh"}} item xs={11}>
         <Block3/>
       </Grid>
      
       <Grid item xs={5}>
        <Block2/>
       </Grid>
     </Grid>
   </Box>
   </div>
   </>
  )
}

export default Block1