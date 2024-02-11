import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

const pages = ['About the studio', 'Photos', 'Contact'];

interface NavbarProps {
  showBg: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ showBg }) => {

  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const setBg = () => {
    let name: string = "border border-0 shadow-none ";
    if (showBg) {
      name += 'bg-secondary'
    } else {
      name += 'bg-transparent'
    }
    return name;
  }

  return (
    <AppBar position="static" className={setBg()}>
      <Container maxWidth="xl">
        <Toolbar disableGutters className='justify-content-between flex-row w-100 '>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            className={isSmallScreen ? 'me-0' : 'me-5'}
            sx={{
              mr: isSmallScreen ? 0 : 2,
              display: { xs: 'flex', md: 'flex' },
              fontFamily: 'sans-serif',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            The Debnath Films
          </Typography>
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            {isSmallScreen ? (
              <Button
                sx={{ my: 1, color: 'white', display: 'block' }}
                className='ms-0'
                onClick={() => console.log("Clicked")}
              >
                Menu
              </Button>
            ) : (
              pages.map((page) => (
                <Button
                  key={page}
                  onClick={() => console.log("Clicked")}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                  className='ms-3'
                >
                  {page}
                </Button>
              ))
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
