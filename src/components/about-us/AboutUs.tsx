/* eslint-disable max-len */
import { Box, Grid, Typography } from '@mui/material';
import image from '../../assets/blogging.svg';

const AboutUs = () => (
  <Grid container>
    <Grid
      item
      lg={6}
      xs={12}
      sm={12}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          fontFamily: 'DM Sans',
          fontWeight: 700,
        }}
      >
        <Box component="div" borderBottom="solid #FFBD00 3px">
          About us
        </Box>
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          fontFamily: 'DM Sans',
        }}
      >
        Codnity Group is located in Latvia. Latvia is globally known for its high-quality workforce that is precise, hard-working, respectful, and always open-minded. We work 9 months a year 24/7, other months there is nothing to do as the weather is cold and daylight is on average 8 hours a day. Most of the Latvians speak almost pure English with that 1% of colorful Russian swearword addition.
      </Typography>
      <Typography
        variant="body1"
        gutterBottom
        sx={{
          fontFamily: 'DM Sans',
        }}
      >
        However, Codnity Group doesn&apos;t consist of Latvians only. We are actively looking for talent in other parts of the world - East Europe, Russia, Azerbaijan, Vietnam, China, India, etc. We believe that the virtues which we are looking for in our team members are all around the world. Therefore, our current team is global with hard-working people.
      </Typography>
    </Grid>
    <Grid
      item
      lg={6}
      xs={12}
      sm={12}
    >
      <Box component="img" src={image} mb={5} />
    </Grid>
  </Grid>
);

export default AboutUs;
