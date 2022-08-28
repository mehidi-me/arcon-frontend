import { muiSxPropType } from 'components/types';
import { SECONDARY_COLOR } from '../../../utils/constants';

const horizontalBorder: muiSxPropType = {
  backgroundColor: SECONDARY_COLOR,
  height: '130%',
  width: '5px',
  position: 'absolute',
  top: '-15%',
  display: {
    xs: 'none',
    md: 'block',
  },
};

export const headerTextLeftBorder: muiSxPropType = {
  ...horizontalBorder,
  left: '-5%',
};
export const headerTextRightBorder: muiSxPropType = {
  ...horizontalBorder,
  right: '-5%',
};

const topBorder: muiSxPropType = {
  backgroundColor: SECONDARY_COLOR,
  height: '5px',
  width: '200px',
  position: 'absolute',
  top: '-15%',
  display: {
    xs: 'none',
    md: 'block',
  },
};

export const headerRightAdditionalInfo: muiSxPropType = {
  display: {
    xs: 'none',
    sm: 'flex',
  },
  flexDirection: 'row',
  justifyContent: 'space-between',
  p: 1,
  m: 1,
  fontSize: {
    xs: 12,
    md: 20,
  },
  color: '#fff',
  width: {
    md: '90%',
    lg: '60%',
    sm: '60%',
  },
  margin: { sm: '0 auto 0 auto', md: '0 0 0 auto' },
};

export const headerTextLeftTopBorder: muiSxPropType = {
  ...topBorder,
  left: '-5%',
};
export const headerTextRightTopBorder: muiSxPropType = {
  ...topBorder,
  right: '-5%',
};

const bottomBorder: muiSxPropType = {
  backgroundColor: SECONDARY_COLOR,
  height: '5px',
  width: '200px',
  position: 'absolute',
  bottom: '-15%',
  display: {
    xs: 'none',
    md: 'block',
  },
};

export const headerTextLeftBottomBorder: muiSxPropType = {
  ...bottomBorder,
  left: '-5%',
};
export const headerTextRightBottomBorder: muiSxPropType = {
  ...bottomBorder,
  right: '-5%',
};
