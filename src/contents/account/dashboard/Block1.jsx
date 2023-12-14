import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Block2 from '../dashboard/Block2'
import { Block3 } from './Block3';

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: '',
  color: theme.palette.text.secondary,
}));
export const Block1 = () => {
  
  return (
    <>
    <div className='mt-36 mb-9'>
    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Item><Block2/></Item>
      </Grid>
      <Grid item xs={9}>
        <Item><Block3/></Item>
      </Grid>
    </Grid>
  </Box>
  </div>
  </>
  )
}
