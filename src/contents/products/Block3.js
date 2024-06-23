import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Block5 from './Block5';
import Block6 from './Block6';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Block3({ filter, setfilter }) {
  return (
    <Box sx={{ flexGrow: 1, border: '1px' }}>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={4} md={3}>
          <Item>
            <Block5 filter={filter} setfilter={setfilter} />
          </Item>
        </Grid>
        <Grid item xs={12} sm={8} md={9}>
          <Item>
            <Block6 />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
export default Block3