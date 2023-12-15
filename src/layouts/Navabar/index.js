import React, { useEffect } from "react";
import PropTypes from "prop-types";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  Badge,
  Dialog,
  Typography,
} from "@mui/material";
import MenuItems from "./MenuItems/index";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Login from "../../components/auth/Login";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/slices/Auth";
import { useRouter } from "next/router";
import { addProduct, getProduct } from "../../redux/slices/Product";

const Index = ({setQuery}) => {
  const router = useRouter()
  const dispatch=useDispatch();
  const auth = useSelector((state)=> state.user.user)
  const [filter,setFilter] = useState()
  
  useEffect(()=>{
   const getUserData = async()=>{
    await dispatch(getUser())
   }
   getUserData();
 
  }, [])
  const [open, setOpen] = useState(false);
  const [dilogOpen, setDilogOpen] = useState(false);
  const handleClick = () => {
    setDilogOpen(true);
  };
  const cartItem =useSelector((state)=>state?.cart?.cart)
console.log(cartItem);

const fetchProducts = async(state) => {
   let result = await dispatch(addProduct(filter))
   if(result){
    return true
   }
}

useEffect(()=>{
  fetchProducts()
},[filter])

const handleQuery = (query) => {
  console.log(query)
  router.push(`/products/${query}`)
   setQuery(query)
  setFilter({"category":query})
}
  return (
    <div class='bg-white'>
    <div className="my-4 bg-white mb-[127px] ">
      <Dialog open={dilogOpen}>
        <Login setDilogOpen={setDilogOpen} />
      </Dialog>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <MenuItems />
      </Drawer>
      <AppBar className="fixed top-0 bg-whitee text-black  w-full z-10">
        <div className="flex mt-4 mx-4 bg-white justify-between">
          <div className="flex justify-start items-center  ">
            <MenuIcon className="md:hidden" onClick={() => setOpen(true)} />
            <img
              src="https://www.mochishoes.com/images-mochi/mochi-logo.webp"
              alt=""
              className="w-full max-md:w-36 max-md:h-9 h-16 my-1"
            />
          </div>
          <div className="flex  items-center   ">
            <div className="relative text-sm  max-md:hidden">
              <input
                type="search"
                name=""
                id=""
                placeholder="Search for Men Footwear, Women Footwear & more..."
                className="border-cyan-500 w-96  h-10 border-2 max-md:hidden outline-1 px-2 py-3"
              />
              <SearchIcon
                sx={{ position: "absolute",  color: "black", top: "8px", right: "10px " }}
              />
            </div>
            <p className="px-3 py-3">
              <FavoriteBorderOutlinedIcon sx={{ fontSize: "30px", color: "black" }} />
            </p>
           {auth?.email  ?  (<p className="px-2 py-3 w-10 h-10 flex justify-center items-center text-lg font-bold bg-red-400 uppercase rounded-full">
              {auth?.email?.slice(0,1)}
            </p>) : 
             (<p className="px-2 py-3">
             <PermIdentityOutlinedIcon
               sx={{ fontSize: "30px", color: "black" }}
               onClick={handleClick}
             />
           </p>)
            }
            <p className="px-2 py-3">
            <Badge badgeContent={cartItem.length} color="secondary">
              <ShoppingBagOutlinedIcon sx={{ fontSize: "30px", color: "black" }} />
            </Badge>
            </p>
          </div>
        </div>

        <ul className="flex max-sm:hidden justify-center bg-white  my-2 text-xs font-bold">
          <li  onClick={()=>handleQuery('Men')} className="mx-6 cursor-pointer max-md:text-xs bg-red text-black text-sm font-bold max-lg:mx-1">
            MEN
          </li>
          <li onClick={()=>handleQuery('Women')}className="mx-6  cursor-pointer bg-white max-md:text-xs text-black  bg-red text-sm font-bold max-lg:mx-1">
            WOMEN
          </li>
          <li onClick={()=>handleQuery('Kids')} className="mx-6 cursor-pointer max-md:text-xs text-black bg-red text-sm font-bold max-lg:mx-1">
            KIDS
          </li>
          <li onClick={()=>handleQuery('Accessories')} className="mx-6 cursor-pointer text-black max-md:text-xs text-sm font-bold max-lg:mx-1">
            ACCESSORIES
          </li>
          <li onClick={()=>handleQuery('Bags')} className="mx-6 cursor-pointer text-black max-md:text-xs text-sm font-bold max-lg:mx-1">
            BAGS
          </li>
          <li onClick={()=>handleQuery('Sale')} className="mx-6  cursor-pointer text-sm text-black font-bold max-lg:mx-2">BRAND</li>
          <li className="mx-6 max-md:text-xs text-sm text-black font-bold max-lg:mx-2">
            SALE
          </li>
          <li onClick={()=>handleQuery('Fila')} className="mx-6 cursor-pointer text-black text-sm max-md:text-xs font-bold max-lg:mx-2">
            FILA
          </li>
        </ul>
      </AppBar>
    </div>
    </div>
  );
};

export default Index;
