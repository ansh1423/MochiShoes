import React from 'react'

import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Block2 from './Block2';
import Block3 from './Block3';
import { Box } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
}));
function Block1() {
    return (
      <div className='mx-8 max-sm:mx-2 mt-32 max-sm:mt-4'>
      <Box sx={{ flexGrow: 0 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Item><Block2 /></Item>
          </Grid>
          <Grid item xs={12} md={8}>
            <Item><Block3 /></Item>
          </Grid>
        </Grid>
      </Box>
    </div>

      );
    }

export default Block1