import { tabsClasses } from '@mui/material';
import { tabClasses } from '@mui/material/Tab';
import { SECONDARY_COLOR } from '../../../utils/constants';
import { muiSxPropType } from '../../types';

export const TabStyle: muiSxPropType = {
  '& .MuiTabs-indicator': {
    height: 0,
  },
  '& .MuiTab-root': {
    textTransform: 'capitalize',
    fontFamily: 'Cerebri Sans',
  },
  '& .Mui-selected': {
    color: '#212121 !important',
    backgroundColor: SECONDARY_COLOR + ' !important',
  },
  [`& .${tabClasses.root}`]: {
    backgroundColor: 'lightgrey',
    fontWeight: 500,
    fontSize: {
      md: '15px',
      xs: '13px',
    },
  },
  [`& .${tabsClasses.scrollButtons}`]: {
    display: 'inline-flex',
    '&.Mui-disabled': { opacity: 0.3 },
  },
};

export function getTabStyles(value: string) {
  return {
    'data-id': `${value}`,
    sx: {
      mr: 2,
    },
  };
}
