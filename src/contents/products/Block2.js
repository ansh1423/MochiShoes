
import { FormControl, InputLabel, MenuItem, OutlinedInput, Select, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 2.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
const names = [
    'Price:Low to High',
    'Price:High to Low',
    'Discount',
    'Popularity',
    'Newest',
  ];
  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }
  
function Block2() {
    const theme = useTheme();
    const [personName, setPersonName] = useState([]);
    const data = useSelector((state)=>state?.product?.product?.[0]?.category)
    console.log(data);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
   
  return (
    <>
    <div class=' border-b mx-4 flex w-full  max-md:hidden'>
    <div className='flex  w-full justify-between pb-2 px-2   '>
   <div className='text-[15px]  font-[600px] '>
     <p className='py-2  '>FILTERS</p>
   </div>
     <div class='flex gap-2 '>
       <h1 className='font-[400px] py-3  text-[16px]  bg-slate-100 rounded-lg px-2 '>{data} Chappal</h1>
       <h1 className='font-[400px]  py-3 text-[16px] bg-slate-100 rounded-lg px-2 '>{data} Sandals</h1>
       <h1 className='font-[400px] py-3  text-[16px] bg-slate-100 rounded-lg px-2 '>{data} Sneakers</h1>
       <h1 className='font-[400px] py-3 text-[16px] bg-slate-100 rounded-lg px-2 '>{data} Loafers</h1>
       <h1 className='font-[400px] py-3 text-[16px] bg-slate-100 rounded-lg px-2'>{data} Jutis</h1>
       </div>
     <div className='flex  mx-6'>
    <FormControl sx={{  width:300,  }}>
    <InputLabel id="demo-multiple-name-label  mr-4 text-[2px]">Sort By : Popularity</InputLabel>
    <Select
      labelId="demo-multiple-name-label"
      id="demo-multiple-name"
      multiple
      value={personName}
      onChange={handleChange}
      input={<OutlinedInput label="Name" />}
      MenuProps={MenuProps}
    >
      {names.map((name) => (
        <MenuItem
          key={name}
          value={name}
          style={getStyles(name, personName, theme)}
        >
          {name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
</div> 
</div>
</div>

</>
  )
}

export default Block2