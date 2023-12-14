import React from "react";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AddCardIcon from "@mui/icons-material/AddCard";
import Forward10Icon from "@mui/icons-material/Forward10";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
  styled,
} from "@mui/material";
import { Margin } from "@mui/icons-material";
import { blueGrey } from "@mui/material/colors";

function Footer() {
  const ColoredLocalShippingIcon = styled(LocalShippingIcon)(({ theme }) => ({
    fontSize: '50px',
    color: '#36C7E7', // Change this color value to whatever you prefer
  }));
  
  return (
    <>
      <div className="flex flex-col h-full">
        <div className="w-full h-auto py-18 bg-gray-200 border-8 border-solid border-slate-100">
          <div className="my-2 py-4 px-1  justify-around max-lg:flex-col max-lg:justify-center flex">
            <div className="max-lg:my-5 py-3 m">
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px] ">
                PAY SECURELY BY
              </h1>
              <img
                src="https://www.mochishoes.com/images-mochi/payment-logos.png"
                className="w-60 h-6 max-lg:w-80 max-lg:h-11 flex max-lg:m-auto"
              />
            </div>
            <div className="flex max-lg:justify-around  max-md:flex-col">
              <h1 className="text-xs  flex text-[12px] font-[700px] gap-2 max-md:justify-center items-center mx-3 max-md:py-2">
               <Forward10Icon className="text-cyan-500 text-[50px]"/> 10 DAYS FREE RETURN
              </h1>

              <h1 className="text-xs  flex gap-2 text-[12px] font-[700px] max-md:justify-center  items-center mx-8 py-3 max-md:py-2">
                {" "}
                <ColoredLocalShippingIcon  className="text-cyan-500 text-[50px]" /> FREE DELIVERY
              </h1>

              <h1 className="text-xs flex  text-[12px] font-[700px] gap-2 max-md:justify-center items-center mx-3 max-md:py-2">
                {" "}
                <AddCardIcon  className="text-cyan-500 text-[50px]" /> CASH ON DILEVERY
              </h1>
            </div>
            <div class="border-l-4 border-black ..."></div>
            <div>
              <h1 className="flex font-mulish text-xs max-lg:justify-center max-lg:py-3">
                Follow us{" "}
              </h1>
              <div>
                <h1 className="flex justify-center">
                  <InstagramIcon  className="bg-cyan-500 px-1 cursor-pointer mx-1 text-white rounded-full text-center text-[35px]" sx={{ fontSize: "30px"}} />{" "}
                  <YouTubeIcon className="bg-cyan-500 px-1 cursor-pointer  mx-1 text-white rounded-full text-center text-[35px]"  sx={{ fontSize: "30px" }} />{" "}
                  <FacebookIcon className="bg-cyan-500 cursor-pointer px-1 mx-1 text-white rounded-full text-center text-[35px]"  sx={{ fontSize: "30px" }} />{" "}
                  <TwitterIcon className="bg-cyan-500 cursor-pointer px-1 mx-1 text-white rounded-full text-center text-[35px]" sx={{ fontSize: "30px" }} />{" "}
                  <PinterestIcon className="bg-cyan-500 cursor-pointer px-1 mx-1 text-white rounded-full text-center text-[35px]" sx={{ fontSize: "30px" }} />
                </h1>
              </div>
              <h1 className="flex  text-xs max-lg:justify-center ">
                #StayAwesome{" "}
              </h1>
            </div>
          </div>
          <div className="border border-black my-4 h-0.2">
            
          </div>
          <div className="flex justify-evenly w-full  px-4">
            <div className="max-sm:hidden">
              <h1 className="text-[15px] font-[600px] py-2 text-[#4D4D4D] ">CUSTOMER</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">CONTACT US</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">SHOE CARE TIPS</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">FOOT CARE TIPS</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">BUYING GUIDE</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">TRACK ORDER</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">FOOT CARE TIPS</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">BUYING GUIDE</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">TRACK ORDER</h1>
            </div>

            <div className="max-sm:hidden">
              <h1 className="text-[15px] font-[600px] py-2 text-[#4D4D4D]">KNOW US</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">ABOUT</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">CAREERS</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">FAQ'S</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">STORE LOCATER</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">SIDE MAPS</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">FAQ'S</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">STORE LOCATER</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">SIDE MAPS</h1>
            </div>

            <div className="max-sm:hidden">
              <h1 className="text-[15px] font-[600px] py-2 text-[#4D4D4D]">COLLECIONS</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">TERMS & CONDITIONS</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">
                SHIPPING & RETURN POLICY
              </h1>
            </div>
            <div className="max-sm:hidden">
              <h1 className="text-[15px] font-[600px] py-2 text-[#4D4D4D]">POLICIES</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">METRO SHOES</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">WALKWAY SHOES</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">FITFLOP</h1>
              
            </div>
            <div className="max-sm:hidden">
              <h1 className="text-[15px] font-[600px] py-2 text-[#4D4D4D]">MY MOCHI</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">LOYALTY PROGRAM</h1>
            </div>

            <div className="max-sm:hidden">
              <h1 className="text-[15px] font-[600px] py-2 text-[#4D4D4D]">PATNERS</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">METRO SHOES</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">WALKWAY SHOES</h1>
              <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">FITFLOP</h1>
            </div>

            <div className="max-sm:w-full">
              <Accordion sx={{ display: { sm: "none" } }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Customer</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">CONTACT US</h1>
                  <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">SHOE CARE TIPS</h1>
                  <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">FOOT CARE TIPS</h1>
                  <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">BUYING GUIDE</h1>
                  <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">TRACK ORDER</h1>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ display: { sm: "none" }, width: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Know us</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">ABOUT</h1>
                  <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">CAREERS</h1>
                  <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">FAQ'S</h1>
                  <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">STORE LOCATER</h1>
                  <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">SIDE MAPS</h1>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ display: { sm: "none" } }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Carrer us</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">
                    TERM AND CONDITION
                  </h1>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ display: { sm: "none" } }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>About</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">
                    TERM AND CONDITION
                  </h1>
                  <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">
                    SHIPPING & RETURN POLICY
                  </h1>
                  <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">PRIVACY POLICY</h1>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{ display: { sm: "none" } }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>My Moto</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">PATNERS</h1>
                  <h1 className="text-sm py-2 font-semibold">PATNERS</h1>
                  <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">METRO SHOES</h1>
                  <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">WALKWAY SHOES</h1>
                  <h1 className="text-[12px] py-1 cursor-pointer hover:underline font-[700px]">FITFLOP</h1>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
        <div>
          <h1 className="w-full max-sm:justify-center max-sm:text-sm py-3 flex justify-end items-end">
            © 2023 Metro Brands Limited. ALL RIGHTS RESERVED.
          </h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
