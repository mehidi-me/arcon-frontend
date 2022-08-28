import * as React from 'react';
import Popover from '@mui/material/Popover';
import { Box, Divider, IconButton, ListItem, ListItemText } from '@mui/material';
import { MenuOutlined } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import * as style from './styles';

export default function MobileNav() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
      <IconButton aria-describedby={id} onClick={handleClick}>
        {open ? <CloseIcon sx={style.icon} /> : <MenuOutlined sx={style.icon} />}
      </IconButton>
      <Popover
        sx={{
          '& .MuiPopover-paper': {
            position: 'relative',
            justifyContent: 'center',
          },
        }}
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <ListItem>
          <ListItemText sx={style.mbLink}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText sx={style.mbLink}>
            <Link href="/about">
              <a>About Us</a>
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText sx={style.mbLink}>
            <Link
              href={{
                pathname: '/',
                hash: 'services',
              }}
            >
              <a>Services</a>
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText sx={style.mbLink}>
            <Link href="/projects">
              <a>Projects</a>
            </Link>
          </ListItemText>
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText sx={style.mbLink}>
            <Link
              href={{
                pathname: '/',
                hash: 'contact',
              }}
            >
              <a>Contact Us</a>
            </Link>
          </ListItemText>
        </ListItem>
      </Popover>
    </Box>
  );
}
