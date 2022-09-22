import {
  Link,
  Typography,
  Container,
  Grid,
} from '@mui/material';
import Box from '@mui/material/Box';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AdbIcon from '@mui/icons-material/Adb';

const Footer = () => (
  <Box
    sx={{
      py: 3,
      mt: 'auto',
      backgroundColor: (theme) => theme.palette.grey[200],
    }}
  >
    <Container maxWidth="lg">
      <Grid
        container
        spacing={5}
        display="flex"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          sm={4}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Link href="https://codnity.com/lv/">
            <AdbIcon sx={{ color: 'black' }} />
          </Link>
          <Typography
            variant="body1"
            sx={{
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Codnity
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          display="flex"
          justifyContent="center"
        >
          <Typography
            variant="caption"
          >
            &copy; Codnity, 2022. All rights reserved.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          display="flex"
          justifyContent="center"
        >
          <Link href="https://www.google.com/">
            <GoogleIcon
              sx={{ color: '#000' }}
            />
          </Link>
          <Link href="https://github.com/Slater8242" sx={{ ml: 2 }}>
            <GitHubIcon
              sx={{ color: '#000' }}
            />
          </Link>
          <Link href="https://youtube.com" sx={{ ml: 2 }}>
            <YouTubeIcon
              sx={{ color: '#000' }}
            />
          </Link>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Footer;
