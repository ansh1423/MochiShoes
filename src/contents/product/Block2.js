import { Box, Grid } from '@mui/material'
import React from 'react'
import Block3 from '../product/Block3'
import Block4 from '../product/Block4'
import { useSelector } from 'react-redux'

function Block2() {
 
  return (
    <Box sx={{ flexGrow: 1, marginLeft:'30px' }}>
    <Grid container spacing={2} columns={2}>
      <Grid sx={{position:"sticky", height:'100%' , top:"100px", }} item xs={1}>
        <Block3/>
      </Grid>
      <Grid item xs={1}>
       <Block4/>
      </Grid>
    </Grid>
  </Box>
  )
}
export default Block2