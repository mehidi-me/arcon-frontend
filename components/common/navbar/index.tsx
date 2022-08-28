import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import { AppBar, Box, Divider, Grid, ListItem, ListItemText, Toolbar } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Zoom from '@mui/material/Zoom';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { SECONDARY_COLOR } from '../../../utils/constants';
import MobileNav from './mobileNav';
import * as style from './styles';
import styles from './styles.module.css';

interface ScrollToTopProps {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */

  window?: () => Window;
  children: React.ReactElement;
  elRef: React.RefObject<HTMLDivElement>;
}

function ScrollTop(props: ScrollToTopProps) {
  const { children, window, elRef } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = elRef.current;
    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 10 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

export default function Navbar() {
  // transparent navbar
  const [navbar, setNavbar] = React.useState(false);
  const backToTopAnchor = React.useRef<HTMLDivElement>(null);
  const ChangeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', ChangeBackground);
  }

  const router = useRouter();

  return (
    <>
      <CssBaseline />
      <Box component="header" ref={backToTopAnchor}>
        <AppBar
          sx={
            navbar
              ? {
                  background: 'rgb(24,24,24,0.81)',
                  ...style.navStyles,
                }
              : {
                  background: 'transparent',
                  ...style.navStyles,
                }
          }
        >
          <Toolbar
            id="back-to-top-anchor"
            sx={{
              ml: {
                lg: '80px',
              },
            }}
          >
            <Box sx={style.logo}>
              <Link href="/" passHref>
                <a>
                  <Image src="/images/logo.svg" alt="logo" width={120} height={120} />
                </a>
              </Link>
            </Box>
            <Box>
              <MobileNav />
              <Grid container sx={style.navLinks}>
                <ListItem className={styles.itemContainer}>
                  <ListItemText className={router?.asPath == '/' ? styles.active : ''}>
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </ListItemText>
                </ListItem>

                <ListItem className={styles.itemContainer}>
                  <ListItemText className={router?.asPath == '/about' ? styles.active : ''}>
                    <Link href="/about">
                      <a>About Us</a>
                    </Link>
                  </ListItemText>
                </ListItem>

                <ListItem className={styles.itemContainer}>
                  <ListItemText className={router?.asPath == '/#services' ? styles.active : ''}>
                    <Link href="/#services">
                      <a>Services</a>
                    </Link>
                  </ListItemText>
                </ListItem>

                <ListItem className={styles.itemContainer}>
                  <ListItemText className={router?.asPath == '/projects' ? styles['active'] : ''}>
                    <Link href="/projects">
                      <a>Projects</a>
                    </Link>
                  </ListItemText>
                </ListItem>

                <ListItem className={styles.itemContainer}>
                  <ListItemText className={router?.asPath == '/#contact' ? styles.active : ''}>
                    <Link href="/#contact">
                      <a>Contact Us</a>
                    </Link>
                  </ListItemText>
                </ListItem>

                <Box>
                  <Box sx={{ display: 'flex', mt: 1 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <PhoneInTalkOutlinedIcon
                        color={'secondary'}
                        sx={{
                          mx: 1,
                          fontSize: 50,
                        }}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        textAlign: 'center',
                        mt: 1,
                      }}
                    >
                      <Box
                        component="span"
                        sx={{
                          fontSize: 14,
                          color: SECONDARY_COLOR,
                          fontWeight: 'bold',
                        }}
                      >
                        Have any Question?
                      </Box>
                      <Box component="span" sx={{ color: '#fff', fontSize: 20 }}>
                        <a href="tel: +8801687266144">+8801687266144</a>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Box>
          </Toolbar>
          <Divider />
        </AppBar>
      </Box>
      <ScrollTop elRef={backToTopAnchor}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon sx={{ color: '#000' }} />
        </Fab>
      </ScrollTop>
    </>
  );
}
