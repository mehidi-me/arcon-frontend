import { muiSxPropType } from 'components/types';
import { DANGER_COLOR, DANGER_COLOR_DARK, TERTIARY_COLOR } from '../../../utils/constants';

export const adminMediaContainer: muiSxPropType = {
  marginX: 'auto',
  marginY: 5,
  height: '100%',
  width: '80%',
};

export const imgActionBtn: muiSxPropType = {
  position: 'fixed',
  bottom: {
    xs: 16,
    md: 20,
    lg: 40,
  },
  color: 'black',
};

export const addImageActionBtn: muiSxPropType = {
  ...imgActionBtn,
  right: {
    xs: 16,
    md: 20,
    lg: 40,
  },
};

export const deleteImageActionBtn: muiSxPropType = {
  ...imgActionBtn,
  right: {
    xs: 125,
    md: 120,
    lg: 150,
  },
  backgroundColor: DANGER_COLOR,
  color: 'white',
  '&:hover': {
    backgroundColor: DANGER_COLOR_DARK,
  },
};

export const createImageActionBtn: muiSxPropType = {
  ...imgActionBtn,
  right: {
    xs: 140,
    md: 145,
    lg: 150,
  },
  backgroundColor: TERTIARY_COLOR,
  color: 'black',
  '&:hover': {
    backgroundColor: TERTIARY_COLOR,
  },
};

export const mediaImageList: muiSxPropType = {
  //   maxWidth: 700,
  //   height: "75vh",
  margin: 'auto',
  overflow: 'hidden',
  width: '100%',
  height: '100%',
};
