import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import { IconButton } from '@mui/material';

const pages = ['About the studio', 'Photos', 'Contact'];

interface NavbarProps {
  showBg: boolean;
  play: number;
  setPlay: (value: number) =>  void;
}

const Navbar: React.FC<NavbarProps> = ({ showBg, play, setPlay }) => {
  const isSmallScreen = useMediaQuery('(max-width:600px)');

  const handlePlay = () => {
    setPlay(0.2);
  }

  const handlePause = () => {
    setPlay(0);
  }

  const setPlayButtons = (play: number) => {
    if(play === 0.2){
      return <IconButton onClick={handlePause} sx={{ color: 'white'}} disableFocusRipple disableTouchRipple disableRipple>
        <PauseIcon />
      </IconButton>
    }else{
      return <IconButton onClick={handlePlay} sx={{ color: 'white'}} disableFocusRipple disableTouchRipple disableRipple>
        <PlayArrowIcon />
      </IconButton>
    }
  }

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
              fontFamily: 'AlexBrush',
              fontWeight: 700,
              fontSize: 30,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            The Debnath Films
          </Typography>
          <Box sx={{ display: { xs: 'flex', md: 'flex' } }}>
            {setPlayButtons(play)}
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
                  sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'sans-serif', fontWeight: 700, letterSpacing: "0.3rem" }}
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
