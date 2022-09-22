/* eslint-disable max-len */
import { Box, Grid } from '@mui/material';
import image from '../../assets/blogging.svg';

const AboutUs = () => {
  const str = 'AboutUs';
  return (
    <Grid container>
      <Grid item>
        AboutUs
        Codnity Group is located in Latvia. Latvia is globally known for its high-quality workforce that is precise, hard-working, respectful, and always open-minded. We work 9 months a year 24/7, other months there is nothing to do as the weather is cold and daylight is on average 8 hours a day. Most of the Latvians speak almost pure English with that 1% of colorful Russian swearword addition.

        However, Codnity Group doesn&apos;t consist of Latvians only. We are actively looking for talent in other parts of the world - East Europe, Russia, Azerbaijan, Vietnam, China, India, etc. We believe that the virtues which we are looking for in our team members are all around the world. Therefore, our current team is global with hard-working people.
      </Grid>
      <Grid item md={5}>
        <Box component="img" src={image} />
      </Grid>
    </Grid>
  );
};

export default AboutUs;
