import React from 'react'
import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Block2 from '../order/Block2'
import Block3 from './Block3'
import { useRouter } from 'next/router';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
}));
function Block1() {
  const router = useRouter();
  
  return (
    <div className='mx-8  mt-32'>
    <boxs sx={{ flexGrow: 0 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <Item><Block2/></Item>
        </Grid>
        <Grid item xs={12} md={8}>
          <Item><Block3/></Item>
        </Grid>
      </Grid>
    </boxs>
    </div>
  );
}
  

export default Block1