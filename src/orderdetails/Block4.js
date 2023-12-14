
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

const style = {
  width: '100%',
  maxWidth:'100%',
  bgcolor: 'background.paper',
};

function Block4() {
  return (
    <>
    <table className='w-full '>
    <tr className='border-2 text-xs'>
      <th>Item</th>
      <th>Price</th>
      <th>Qty Discount</th>
      <th>Subtotal</th>
      <th>Status</th>
      <th>Action</th>
    </tr>
    <tr className='border-2'>
      <td><img src="https://admin.mochishoes.com/product/16-447/250/16-447M23.jpg"  className='w-14 h-16' alt="" /> </td>
      <td>Rs.0</td>
       <td>1</td>
       <td>Rs. 2,490</td>
       <td>ORDER CONFIRMED</td>
       <td><button className='text-white text-xs py-1 px-2 bg-blue-400'>Cancel</button></td>
    </tr>   
  </table>
  <div>
    <List sx={style} component="nav" aria-label="mailbox folders">
    <ListItem button>
      <ListItemText primary="Subtotal: Rs.2,400 " />
    </ListItem>
    <Divider />
    <ListItem button divider>
      <ListItemText primary="Coupon Discount: Rs.0.00" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Grand Total:Rs.2400" />
    </ListItem>
    <Divider light />
  </List>
  </div>
  </>
);
}
export default Block4