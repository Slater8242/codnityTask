import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const PageNotFound = () => (
  <>
    <Box sx={{
      height: '100%',
      display: { xs: 'flex', md: 'none' },
      justifyContent: 'center',
      my: 'auto',
      mx: 'auto',
    }}
    >
      <Typography variant="h1" fontSize={40}>
        Page not found
      </Typography>
    </Box>
    <Box sx={{
      height: '100%',
      display: { xs: 'none', md: 'flex' },
      flexDirection: 'column',
      justifyContent: 'center',
    }}
    >
      <Typography variant="h1" fontSize={50} textAlign="center">
        Page not found
      </Typography>
      <Typography variant="h6" textAlign="center" mt={2}>
        <Link to="/">
          Home
        </Link>
      </Typography>
    </Box>
  </>
);

export default PageNotFound;
