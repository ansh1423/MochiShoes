import React from 'react';
import { Drawer, List, ListItem, ListItemText, Accordion, AccordionSummary, AccordionDetails, Typography, Divider } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const CustomDrawer = () => {
  return (
    <Drawer variant="permanent" anchor="left">
      <div className="w-96 px-4 py-4 text-white font-semibold text-base bg-blue-500">
        <Typography variant="h6">LOGIN</Typography>
      </div>
      <Divider />
      <List>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="font-semibold text-sm">MEN</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem button>
                <ListItemText primary="CONTACT US" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="SHOE CARE TIPS" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="FOOT CARE TIPS" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="BUYING GUIDE" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="TRACK ORDER" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className="font-semibold text-sm">WOMEN</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem button>
                <ListItemText primary="CONTACT US" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="SHOE CARE TIPS" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="FOOT CARE TIPS" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="BUYING GUIDE" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="TRACK ORDER" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className="font-semibold text-sm">KIDS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem button>
                <ListItemText primary="CONTACT US" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="SHOE CARE TIPS" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="FOOT CARE TIPS" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="BUYING GUIDE" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="TRACK ORDER" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography className="font-semibold text-sm">SALE</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem button>
                <ListItemText primary="CONTACT US" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="SHOE CARE TIPS" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="FOOT CARE TIPS" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="BUYING GUIDE" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="TRACK ORDER" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel5a-content"
            id="panel5a-header"
          >
            <Typography className="font-semibold text-sm">ACCESSORIES</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem button>
                <ListItemText primary="CONTACT US" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="SHOE CARE TIPS" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="FOOT CARE TIPS" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="BUYING GUIDE" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="TRACK ORDER" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel6a-content"
            id="panel6a-header"
          >
            <Typography className="font-semibold text-sm">BAGS</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem button>
                <ListItemText primary="CONTACT US" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="SHOE CARE TIPS" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="FOOT CARE TIPS" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="BUYING GUIDE" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="TRACK ORDER" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel7a-content"
            id="panel7a-header"
          >
            <Typography className="font-semibold text-sm">BRAND</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <List>
              <ListItem button>
                <ListItemText primary="CONTACT US" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="SHOE CARE TIPS" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="FOOT CARE TIPS" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="BUYING GUIDE" />
              </ListItem>
              <ListItem button>
                <ListItemText primary="TRACK ORDER" />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </List>
    </Drawer>
  );
};

export default CustomDrawer;
