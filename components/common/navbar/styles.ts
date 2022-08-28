import { muiSxPropType } from '../../types';
import { SECONDARY_COLOR } from '../../../utils/constants';

export const logo: muiSxPropType = {
  flexGrow: 1,
  cursor: 'pointer',
};

export const navStyles: muiSxPropType = {
  boxShadow: 'none',
  height: '80px',
  top: 0,
  zIndex: 999,
  position: 'fixed',
};
export const activeItem: muiSxPropType = {
  color: 'yellow',
};

export const navLinks: muiSxPropType = {
  display: { xs: 'none', md: 'flex' },
  gap: { md: 4 },
  height: '80px',
  margin: 0,
  listStyle: 'none',
  textTransform: 'uppercase',
  cursor: 'pointer',
  fontWeight: 600,
  flexWrap: 'nowrap',
  '& .MuiTypography-root': {
    fontSize: '14px',
    fontWeight: 500,
  },
  '& .MuiListItem-root': {
    width: 'unset',
  },
};

export const icon: muiSxPropType = {
  fontSize: '40px',
  color: '#fff',
  outline: 'none',
};

export const mbLink: muiSxPropType = {
  '& .MuiTypography-root': {
    fontSize: '16px',
    fontWeight: 600,
  },
  '&:hover': {
    color: SECONDARY_COLOR,
  },
};

// export const itemHover: muiSxPropType = {
//   height: '100%',
//   borderTop: '4px solid transparent',
//   '&:hover': {
//     borderWidth: '100%',
//     borderTop: '4px solid #ff6f00',
//     transition: 'all .5s ease-in-out',
//   },
// };

/* export const phoneSvg: muiSxPropType = {
  fill: 'red',
  border: '1px solid orange',
}; */
