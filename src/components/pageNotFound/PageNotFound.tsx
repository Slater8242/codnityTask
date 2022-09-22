import { Box, Typography } from '@mui/material';

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
      justifyContent: 'center',
    }}
    >
      <Typography variant="h1" fontSize={50}>
        Page not found
      </Typography>
    </Box>
  </>
);

export default PageNotFound;
