import { grey } from '@mui/material/colors';
import { muiSxPropType } from '../../types';
import { SECONDARY_COLOR } from '../../../utils/constants';

export const commonIcon: muiSxPropType = {
  fontSize: '2rem',
  padding: '5px',
  margin: '5px',
  color: '#cbcbcb',
  boxShadow: '0px 0px 2px 0px grey',
  cursor: 'pointer',
  borderRadius: '5px',
  ':hover': {
    backgroundColor: SECONDARY_COLOR,
    color: grey[50],
    boxShadow: 'none',
  },
};
