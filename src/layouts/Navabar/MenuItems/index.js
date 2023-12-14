import React, { useEffect } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import { getUser } from "../../../redux/slices/Auth";
// import { getSupportedBrowsers } from "next/dist/build/utils";
function index() {


  return (
    <>
      <div className="w-96  px-2  py-4 text-white  font-semibold text-xs bg-blue-500">
        <h1>LOGIN</h1>
      </div>
      <Accordion className=" ">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className=" w-full py-2  font-semibold text-xs">
            MEN
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h1 className="text-xs py-1 font-semibold">CONTACT US</h1>
          <h1 className="text-xs py-1 font-semibold">SHOE CARE TIPS</h1>
          <h1 className="text-xs py-1 font-semibold">FOOT CARE TIPS</h1>
          <h1 className="text-xs py-1 font-semibold">BUYING GUIDE</h1>
          <h1 className="text-xs py-1 font-semibold">TRACK ORDER</h1>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ display: {} }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className=" w-full py-2  font-semibold text-xs">
            WOMEN
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h1 className="text-xs py-1 font-semibold">CONTACT US</h1>
          <h1 className="text-xs py-1 font-semibold">SHOE CARE TIPS</h1>
          <h1 className="text-xs py-1 font-semibold">FOOT CARE TIPS</h1>
          <h1 className="text-xs py-1 font-semibold">BUYING GUIDE</h1>
          <h1 className="text-xs py-1 font-semibold">TRACK ORDER</h1>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ display: {} }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className=" w-full py-2  font-semibold text-xs">
            KIDS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h1 className="text-xs py-1 font-semibold">CONTACT US</h1>
          <h1 className="text-xs py-1 font-semibold">SHOE CARE TIPS</h1>
          <h1 className="text-xs py-1 font-semibold">FOOT CARE TIPS</h1>
          <h1 className="text-xs py-1 font-semibold">BUYING GUIDE</h1>
          <h1 className="text-xs py-1 font-semibold">TRACK ORDER</h1>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ display: {} }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className=" w-full py-2  font-semibold text-xs">
            SALE
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h1 className="text-xs py-1 font-semibold">CONTACT US</h1>
          <h1 className="text-xs py-1 font-semibold">SHOE CARE TIPS</h1>
          <h1 className="text-xs py-1 font-semibold">FOOT CARE TIPS</h1>
          <h1 className="text-xs py-1 font-semibold">BUYING GUIDE</h1>
          <h1 className="text-xs py-1 font-semibold">TRACK ORDER</h1>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ display: {} }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className=" w-full py-2  font-semibold text-xs">
            ACCESSORIES
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h1 className="text-xs py-1 font-semibold">CONTACT US</h1>
          <h1 className="text-xs py-1 font-semibold">SHOE CARE TIPS</h1>
          <h1 className="text-xs py-1 font-semibold">FOOT CARE TIPS</h1>
          <h1 className="text-xs py-1 font-semibold">BUYING GUIDE</h1>
          <h1 className="text-xs py-1 font-semibold">TRACK ORDER</h1>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ display: {} }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className=" w-full py-2  font-semibold text-xs">
            BAGS
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h1 className="text-xs py-1 font-semibold">CONTACT</h1>
          <h1 className="text-xs py-1 font-semibold">SHOE CARE TIPS</h1>
          <h1 className="text-xs py-1 font-semibold">FOOT CARE TIPS</h1>
          <h1 className="text-xs py-1 font-semibold">BUYING GUIDE</h1>
          <h1 className="text-xs py-1 font-semibold">TRACK ORDER</h1>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ display: {} }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className=" w-full py-2  font-semibold text-xs">
            BRAND
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <h1 className="text-xs py-1 font-semibold">CONTACT US</h1>
          <h1 className="text-xs py-1 font-semibold">SHOE CARE TIPS</h1>
          <h1 className="text-xs py-1 font-semibold">FOOT CARE TIPS</h1>
          <h1 className="text-xs py-1 font-semibold">BUYING GUIDE</h1>
          <h1 className="text-xs py-1 font-semibold">TRACK ORDER</h1>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default index;
