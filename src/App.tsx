import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, Paper, Step, StepLabel, Stepper, ThemeProvider, createTheme } from '@mui/material';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { CheckBox } from '@mui/icons-material';
class item {
  name: string;
  price: number;
  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#c365d4',
    },
    secondary: {
      main: '#9c27b0',
    },

    background: {
      default: '#745e9a',

    },
  },
});

const App = () => {
  const steps = ['Services', 'Operating', 'Finish'];
  const [value, setValue] = useState<item[]>([])
  const [checked, setChecked] = useState<number>(0);
  const setItems = () => {
    if (true) {
      setValue([])
    }
    if (checked & (1 << 0)) {
      setValue((pre) => [...pre, new item('Adult Cut', 300)])
    }
    if (checked & (1 << 1)) {
      setValue((pre) => [...pre, new item('Cut & Shampoo', 400)])
    }
    if (checked & (1 << 2)) {
      setValue((pre) => [...pre, new item('Cut, Shampoo & Full Style', 360)])
    }
    if (checked & (1 << 3)) {
      setValue((pre) => [...pre, new item('30 minutes', 129)])
    }
  }
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Hair Salon
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>

        <Stepper activeStep={0} alternativeLabel className='mt'>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <Paper elevation={3} className='mm w200 h200 ' >
          <h4 className='hs'> HairSalon Services</h4>
          <h6 className='pl'> <AddLocationIcon> </AddLocationIcon> Shebin Elkom</h6>
          <h6 className='pp'> <AddIcCallIcon></AddIcCallIcon> 0104432622</h6>
          <div className='b' >
            <Button variant='outlined' color="secondary">Save Booking</Button> </div>
        </Paper>
      </div>


      <div className='ac'>
        <h1>Services</h1>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography>Haircuts</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography >
              <h2 > Adult Cut</h2>
              <b> 30 minutes</b> <br />
              Looking for a quick haircut? This is the one for you.

              <div className='c1'><text>300$</text>
                <Checkbox
                  value={300}
                  checked={Boolean(checked & (1 << 0))}
                  onChange={() => {
                    if (checked & (1 << 0))
                      setChecked(checked & (~(1 << 0)))
                    else
                      setChecked(checked | (1 << 0))
                  }} /> </div>
              <hr></hr>
              <h2> Cut & Shampoo</h2>
              <b> 1 hour</b> <br />
              This cut includes a shampoo service with some of our favorite professional products
              <div className='c1'><text >400$</text>
                <Checkbox
                  value={400}
                  checked={Boolean(checked & (1 << 1))}
                  onChange={() => {
                    if (checked & (1 << 1))
                      setChecked(checked & (~(1 << 1)))
                    else
                      setChecked(checked | (1 << 1))
                  }} /> </div>
              <hr></hr>
              <h2> Cut, Shampoo & Full Style</h2>
              <b> 1 hour</b> <br />
              This cut option offers styling with hot tools to complete your new look
              <div className='c1'> <text >360$</text>
                <Checkbox
                  value={360}
                  checked={Boolean(checked & (1 << 2))}
                  onChange={() => {
                    if (checked & (1 << 2))
                      setChecked(checked & (~(1 << 2)))
                    else
                      setChecked(checked | (1 << 2))
                  }} /></div>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>All-Over Color</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <h2> Permenant</h2>
              <b> 30 minutes</b> <br />
              (for gray coverage or going lighter or darker): Receive a professional hair color service performed by one of our experts to cover gray or to lighten or darken your natural hair color
              <div className='c2'> <text >129$</text>
                <Checkbox
                  value={129}
                  checked={Boolean(checked & (1 << 3))}
                  onChange={() => {
                    if (checked & (1 << 3))
                      setChecked(checked & (~(1 << 3)))
                    else
                      setChecked(checked | (1 << 3))
                  }}
                /> </div>
              <hr></hr>
              <h2> Semi</h2>
              <b> 1 hours</b> <br />
              Looking for a new color, but not ready for a total commitment? Ask your stylist if semi-permanent is right for you.
              <div className='c1'> <text >400$</text>
                <Checkbox /></div>


            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography> Deep Conditioning Treatment</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <h2> Basic Conditioning</h2>
            <b> 30 minutes</b> <br />
            This conditioning treatment provides intense moisture to strands and fortifies the hair with added protein.
            <div className='c1'> <text >129$</text>
              <Checkbox /> </div>
            <hr></hr>
            <h2> Speciality Conditioning</h2>
            <b> 1 hours</b> <br />
            Customizable conditioning treatments specifically designed for what your hair needs most. Your stylist will create a formula for color treated hair, moisturizing, smoothing, or strengthening.
            <div className='c2'> <text >400$</text>
              <Checkbox /> </div>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header">
            <Typography> Special Services</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <h2> Formal Styling/Special Occasion Hair</h2>
            <b> 30 minutes</b> <br />
            Special occasion styling includes braided up-styles, chignon, French twists, or any style to fit the event.
            <div className='c1'>  <text >129$</text>
              <Checkbox /> </div>
            <hr></hr>
            <h2> Blow Outs</h2>
            <b> 1 hours</b> <br />
            Enjoy a relaxing shampoo and a smooth blow out to de-frizz, create body and shine.
            <div className='c1'> <text >400$</text>
              <Checkbox />  </div>
          </AccordionDetails>
        </Accordion>
        <Button onClick={setItems} >set</Button>
        <Button onClick={() => console.log(value)} >show</Button>
      </div>

    </ThemeProvider>
  );
}

export default App;
