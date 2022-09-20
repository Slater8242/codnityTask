import { Link, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AdbIcon from '@mui/icons-material/Adb';

const Footer = () => {
  const str = 'footer';
  return (
    <Box
      component={str}
      sx={{
        py: 3,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[200],
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Box component="div" sx={{ display: 'flex', ml: 3 }}>
        <AdbIcon sx={{ color: 'black' }} />
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
      </Box>
      <Box
        component="div"
        sx={{ mr: 3 }}
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
      </Box>
    </Box>
  );
};

export default Footer;
