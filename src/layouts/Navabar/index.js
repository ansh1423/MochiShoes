import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import { AppBar, Avatar, Badge, Box, Button, Dialog, Drawer, IconButton, Popover, Stack, Typography } from "@mui/material";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import MenuIcon from "@mui/icons-material/Menu";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import MenuItems from "./MenuItems/index";
import Login from "../../components/auth/Login";
import { getUser, logoutUser } from "../../redux/slices/Auth";
import { listProduct } from "../../redux/slices/Product";

const Index = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.user.user);
  const cartItem = useSelector((state) => state.cart.cart);

  const [filter, setFilter] = useState();
  const [query, setQuery] = useState();
  const [openDrawer, setOpenDrawer] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    if (query) {
      fetchProducts();
    }
  }, [query]);

  const fetchProducts = async () => {
    try {
      const result = await dispatch(listProduct(query));
      if (result) {
        console.log(result.data, "filter list");
      }
    } catch (error) {
      console.error("Something went wrong", error);
    }
  };

  const handleQuery = (query) => {
    router.push(`/products/${query}`);
    setQuery(query);
    setFilter({ category: query });
  };

  const handleChangeSearchBar = (event) => {
    setQuery(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      router.push(`/products/search?query=${query}`);
    }
  };

  const handleClick = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleFavoriteClick = () => {
    setIsClicked(!isClicked);
  };

  const handleClicks = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const popoverOpen = Boolean(anchorEl);
  const popoverId = popoverOpen ? 'simple-popover' : undefined;
  //Logout
   
  const handleLogout = () =>{
    dispatch(logoutUser()); // Dispatch an action to log out the user
    setAnchorEl(null)
  }

  return (
    <div className="bg-white">
      <div className="py-4 max-sm:my-0 bg-white mb-[60px] max-sm:mb-[20px]">
        <Button onClick={handleClick}>Open Login Dialog</Button>
        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
          <Login setDilogOpen={setDialogOpen} />
        </Dialog>

        <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
          <MenuItems />
        </Drawer>
        <AppBar className="fixed top-0 bg-white text-black w-full z-10">
          <div className="flex pt-4 px-4 bg-white justify-between">
            <div className="flex justify-start items-center">
              <MenuIcon className="md:hidden" onClick={() => setOpenDrawer(true)} />
              <img
                src="https://www.mochishoes.com/images-mochi/mochi-logo.webp"
                alt="Mochi Logo"
                className="w-full max-md:w-28 max-md:h-9 h-16 my-1"
              />
            </div>
            <div className="flex items-center">
              <div className="relative text-[15px] max-md:hidden">
                <input
                  
                  type="text"
                  name="search"
                  id="search"
                  onKeyDown={handleKeyDown}
                  onChange={handleChangeSearchBar}
                  placeholder="What are you looking for....."
                  className="border-cyan-500 w-96 h-10 font-black border-2 max-md:hidden outline-1 px-2 py-3 text-black"
                  style={{ color: 'black' }}
                />
          
                <SearchIcon
                  sx={{ position: "absolute", color: "cyan", top: "8px", right: "30px" }}
                  onClick={() => handleQuery(query)}
                />
              </div>
              <IconButton onClick={handleFavoriteClick} sx={{ backgroundColor: isClicked ? "red" : "transparent", "&:hover": { backgroundColor: isClicked ? "darkred" : "lightgray" } }}>
                <FavoriteBorderOutlinedIcon sx={{ fontSize: "30px", color: "black" }} />
              </IconButton>
              <Box>
                {auth?.email ? (
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      alt="User Avatar"
                      src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg"
                      sx={{ width: 40, height: 40, cursor: 'pointer' }}
                      onClick={handleClicks}
                    />
                  </Stack>
                ) : (
                  <PermIdentityOutlinedIcon
                    sx={{ fontSize: "30px", color: "black", cursor: 'pointer' }}
                    onClick={handleClick}
                  />
                )}
                <Popover
                  id={popoverId}
                  open={popoverOpen}
                  anchorEl={anchorEl}
                  onClose={handleClosePopover}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                >
                  <Box sx={{ p: 2, minWidth: 100 }}>
                    <Stack direction="column" alignItems="center" spacing={2}>
                      <Avatar
                        alt="User Avatar"
                        src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg"
                        sx={{ width: 60, height: 60 }}
                      />
                      <Typography variant="h6">{auth?.email}</Typography>
                      <Button 
                       sx={{
                        '&:hover': {
                          backgroundColor: '#f50057',
                          color: 'white',
                        },
                      }} color="primary" onClick={() => alert('Profile clicked')}>
                        Profile
                      </Button>
                      <Button  color="secondary" sx={{
        '&:hover': {
          backgroundColor: '#f50057',
          color: 'white',
        },
      }} onClick={handleLogout}>
                        Logout
                      </Button>
                    </Stack>
                  </Box>
                </Popover>
              </Box>
              <Badge badgeContent={cartItem.length} color="secondary">
                <ShoppingBagOutlinedIcon sx={{ fontSize: "30px", color: "black" }} />
              </Badge>
            </div>
          </div>

          <ul className="flex max-sm:hidden justify-center bg-white mb-1 text-[15px] font-bold">
            {['Men', 'Women', 'Kids', 'Accessories', 'Bags', 'Brand', 'Sale', 'Fila'].map((category) => (
              <li key={category} onClick={() => handleQuery(category)} className="mx-6 cursor-pointer max-md:text-xs text-black text-[15px] font-bold max-lg:mx-1">
                {category.toUpperCase()}
              </li>
            ))}
          </ul>
        </AppBar>
      </div>
    </div>
  );
};

export default Index;
