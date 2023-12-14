import { Dialog, Divider } from "@mui/material";
import React, { useState } from "react";
import UpdateProfile from "./updateprofile";
import UpdateAddress from "./updateaddress";
import { useSelector } from "react-redux";

export const Block3 = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(true);
  };

  const [update, setUpdate] = useState(false);
  const handleUpdate = () => {
    setUpdate(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const user=useSelector((state)=> state?.auth?.user)
  console.log(user)
  return (
    <>
      <div>
        <div className="flex gap-2 py-2">
          <h1 className="font-medium text-base">Contact Information </h1>
          <h2
            className="py-1 text-cyan-400 text-xs cursor-pointer underline"
            onClick={handleClick}
            
          >
            Edit{" "}
          </h2>
        </div>
        <Dialog open={open} onClose={handleClose}>
          <UpdateProfile setOpen={setOpen} />
        </Dialog>
        <Divider />
        {/* <p className="py-1">{state.username}</p> */}
        <p className="py-1">{user && user.email}</p>
        <p className="py-1">{user && user.phone}</p>
      </div>
      <div>
        <div className="flex gap-2 py-2">
          <h1 className="font-medium text-base">Default Shipping Addresses </h1>

          <div>
            <h2
              className="py-1 text-cyan-400 text-xs underline cursor-pointer"
              onClick={handleUpdate}
            >
              Edit{" "}
            </h2>
            <Dialog open={update} onClose={handleClose}>
              <UpdateAddress setUpdate={setUpdate} />
            </Dialog>
          </div>
          <h2 className="py-1 text-cyan-400 text-xs underline">
            Manage Address{" "}
          </h2>
        </div>
        <Divider />
        <Divider />

        <p className="py-1">{user && user.firstName}</p>
        <p className="py-1">{user && user.email}</p>
        <p className="py-1">{user && user.phone}</p>
        <p className="py-1">{user && user.name}</p>
        <p className="py-1">{user && user.name}</p>
        <p className="py-1">{user && user.email}</p>
        <p className="py-1">anshyadav42495@gmail.com</p>
      </div>
      <div>
        <h1 className="font-medium my-3 text-base ">Recent Orders </h1>
      </div>
      <div>
        <div className=" flex justify-between">
          <p className="text-xs font-bold ">Order#</p>
          <p className="text-xs font-bold ">Date</p>
          <p className="text-xs font-bold ">Ship to</p>
          <p className="text-xs font-bold ">Order total</p>
          <p className="text-xs font-bold ">Action</p>
        </div>
        <div className=" flex justify-between my-3">
          <p className="text-xs  ">MO2021292991</p>
          <p className="text-xs  ">5 JUL 2023</p>
          <p className="text-xs  ">Ansh Yss</p>
          <p className="text-xs  ">Rs.2464</p>
          <button className="bg-teal-400 text-xs text-white py-1 px-1">
            View & Track
          </button>
        </div>
        <div className=" flex justify-between my-3">
          <p className="text-xs  ">MO2021292991</p>
          <p className="text-xs  ">5 JUL 2023</p>
          <p className="text-xs  ">Ansh Yss</p>
          <p className="text-xs  ">Rs.2464</p>
          <button className="bg-teal-400 text-xs text-white py-1 px-1">
            View & Track
          </button>
        </div>
        <div className=" flex justify-between my-3">
          <p className="text-xs  ">MO2021292991</p>
          <p className="text-xs  ">5 JUL 2023</p>
          <p className="text-xs  ">Ansh Yss</p>
          <p className="text-xs  ">Rs.2464</p>
          <button className="bg-teal-400 text-xs text-white py-1 px-1">
            View & Track
          </button>
        </div>
      </div>
    </>
  );
};
