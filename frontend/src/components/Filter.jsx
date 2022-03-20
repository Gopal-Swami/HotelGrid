import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Filter = () => {
  const marks = [
    {
      value: 0,
      label: '500',
    },
    {
      value: 20,
      label: '2000',
    },
    {
      value: 40,
      label: '4000',
    },
    {
      value: 100,
      label: '10000+',
    },
  ];

  function valuetext(value) {
    return `${value}`;
  }
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Room Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Single" />
            <FormControlLabel control={<Checkbox />} label="Double" />
            <FormControlLabel control={<Checkbox />} label="Triple" />
            <FormControlLabel control={<Checkbox />} label="Luxury" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Sort</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="Low To High" />
            <FormControlLabel control={<Checkbox />} label="High To Low" />
            <FormControlLabel control={<Checkbox />} label="Popularity" />
          </FormGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Price Range</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Slider
              aria-label="Always visible"
              defaultValue={0}
              getAriaValueText={valuetext}
              step={1}
              marks={marks}
            />
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Filter;
