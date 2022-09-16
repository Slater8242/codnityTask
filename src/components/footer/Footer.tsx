import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const Footer = () => {
  const str = 'footer';
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        // minHeight: '100vh',
      }}
    >
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
          flexGrow: 1,
          backgroundColor: (theme) => theme.palette.grey[200],
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            My sticky footer can be found here.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
