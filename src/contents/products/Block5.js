import { Accordion, AccordionDetails, AccordionSummary, Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useRouter } from 'next/router';

function Block5({filter,setfilter}) {
  const router=useRouter();
  const handleClick =(min,max)=>{
    console.log(min);
    console.log(max);
    const path=router.query.category;
    setfilter({"$and":[{"price.mrp":{"$gte":min, "$lte":max}},{"title.shortTitle":{"$regex":path,"$options":"i"}}]});
  }
  
  return (

    <>
          <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Size</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Box>
  <div className='flex'>
    <div className='common-button'>
      4
    </div>
    <div className='common-button'>
      5
    </div>
    <div className='common-button'>
      6
    </div>
    <div className='common-button'>
      7
    </div>
  </div>
  <div className='flex'>
    <div className='common-button'>
      8
    </div>
    <div className='common-button'>
      9
    </div>
    <div className='common-button'>
      10
    </div>
    <div className='common-button'>
      11
    </div>
  </div>
  <div className='flex'>
    <div className='common-button'>
      12
    </div>
    <div className='common-button'>
      41
    </div>
    <div className='common-button'>
      42
    </div>
    <div className='common-button'>
      43
    </div>
  </div>
  <div className='flex'>
    <div className='common-button'>
      44
    </div>
    <div className='common-button'>
      45
    </div>
  </div>
</Box>
        </AccordionDetails>
      </Accordion>
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Brand</Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Box>
      <FormGroup>
      <FormControlLabel  control={<Checkbox defaultChecked />} label="J.Fontini" />
      <FormControlLabel required control={<Checkbox />} label="Mochi" />
      <FormControlLabel required control={<Checkbox />} label="Genx" />
      <FormControlLabel required control={<Checkbox />} label="Clarks" />
      <FormControlLabel required control={<Checkbox />} label="Language" />
      <FormControlLabel required control={<Checkbox />} label="Vou Welx" />
      <FormControlLabel required control={<Checkbox />} label="Id" />
      <FormControlLabel required control={<Checkbox />} label="Mochi" />
      <FormControlLabel required control={<Checkbox />} label="Genx" />
      <FormControlLabel required control={<Checkbox />} label="Clarks" />
      <FormControlLabel required control={<Checkbox />} label="Language" />
      <FormControlLabel required control={<Checkbox />} label="Vou Welx" />
      <FormControlLabel required control={<Checkbox />} label="Id" />

    </FormGroup>

      </Box>
        </AccordionDetails>
      </Accordion>

      <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
        <Typography>Price</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
          <FormGroup>
          <FormControlLabel onClick={(e)=>{handleClick(0,1000)}} required control={<Checkbox/>} label="Rs. 0 To Rs. 1000"/>
          <FormControlLabel  onClick={(e)=>{handleClick(0,1000)}} required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel  onClick={(e)=>{handleClick(0,1000)}}  required control={<Checkbox />} label="Rs. 2000 To Rs. 3000" />
          <FormControlLabel  onClick={(e)=>{handleClick(0,1000)}}required control={<Checkbox />} label="Rs. 3000 To Rs. 4000" />
          <FormControlLabel  onClick={(e)=>{handleClick(0,1000)}}required control={<Checkbox />} label="Rs. 4000 To Rs. 5000" />
          <FormControlLabel  onClick={(e)=>{handleClick(0,1000)}}required control={<Checkbox />} label="Rs. 5000 To Rs. 6000" />
          <FormControlLabel  onClick={(e)=>{handleClick(0,1000)}}required control={<Checkbox />} label="Rs. 6000 To Rs. 7000" />
          <FormControlLabel onClick={(e)=>{handleClick(0,1000)}} required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel onClick={(e)=>{handleClick(0,1000)}} required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel  onClick={(e)=>{handleClick(0,1000)}}required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel  onClick={(e)=>{handleClick(0,1000)}}required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel  onClick={(e)=>{handleClick(0,1000)}}required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel  onClick={(e)=>{handleClick(0,1000)}}required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
    
        </FormGroup>
    
          </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
        <Typography>Discount</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
          <FormGroup>
          <FormControlLabel required control={<Checkbox/>} label="Rs. 0 To Rs. 1000"/>
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 2000 To Rs. 3000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 3000 To Rs. 4000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 4000 To Rs. 5000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 5000 To Rs. 6000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 6000 To Rs. 7000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
    
        </FormGroup>
    
          </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
      <Typography>Heels Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
          <FormGroup>
          <FormControlLabel required control={<Checkbox/>} label="Rs. 0 To Rs. 1000"/>
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 2000 To Rs. 3000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 3000 To Rs. 4000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 4000 To Rs. 5000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 5000 To Rs. 6000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 6000 To Rs. 7000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
    
        </FormGroup>
    
          </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
        <Typography>Heels height</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
          <FormGroup>
          <FormControlLabel required control={<Checkbox/>} label="Rs. 0 To Rs. 1000"/>
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 2000 To Rs. 3000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 3000 To Rs. 4000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 4000 To Rs. 5000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 5000 To Rs. 6000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 6000 To Rs. 7000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
    
        </FormGroup>
    
          </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
        <Typography>Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
          <FormGroup>
          <FormControlLabel required control={<Checkbox/>} label="Rs. 0 To Rs. 1000"/>
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 2000 To Rs. 3000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 3000 To Rs. 4000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 4000 To Rs. 5000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 5000 To Rs. 6000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 6000 To Rs. 7000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
          <FormControlLabel required control={<Checkbox />} label="Rs. 1000 To Rs. 2000" />
    
        </FormGroup>
    
          </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
        <Typography>Lining Material</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
          <FormGroup>
          <FormControlLabel required control={<Checkbox/>} label="LEATHER"/>
          <FormControlLabel required control={<Checkbox />} label="SYNTHESIS" />
          <FormControlLabel required control={<Checkbox />} label="FABRIC" />
          <FormControlLabel required control={<Checkbox />} label="N/A" />
          <FormControlLabel required control={<Checkbox />} label="MESH" />
        </FormGroup>
    
          </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
        <Typography>Colour</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
          <FormGroup>
          <FormControlLabel required control={<Checkbox/>} label="BLACK"/>
          <FormControlLabel required control={<Checkbox />} label="TAN" />
          <FormControlLabel required control={<Checkbox />} label="MAROON" />
          <FormControlLabel required control={<Checkbox />} label="GREY" />
          <FormControlLabel required control={<Checkbox />} label="BROWN" />
          <FormControlLabel required control={<Checkbox />} label="GREEN" />
          <FormControlLabel required control={<Checkbox />} label="OLIVE" />
          <FormControlLabel required control={<Checkbox />} label="WHITE" />
    
        </FormGroup>
    
          </Box>
            </AccordionDetails>
          </Accordion>
          <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls="panel1a-content"
      id="panel1a-header"
    >
        <Typography>Ocassion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
          <FormGroup>
          <FormControlLabel required control={<Checkbox/>} label="FORMAL"/>
          <FormControlLabel required control={<Checkbox />} label="CASUAL" />
          <FormControlLabel required control={<Checkbox />} label="ETHNIC" />
          <FormControlLabel required control={<Checkbox />} label="PARTY" />
          <FormControlLabel required control={<Checkbox />} label="SPORT" />
        </FormGroup>
    
          </Box>
            </AccordionDetails>
          </Accordion>
          </>
  )
}

export default Block5