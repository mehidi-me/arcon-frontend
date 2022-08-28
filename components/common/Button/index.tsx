import Button, { ButtonProps } from '@mui/material/Button';
import { blueGrey, grey } from '@mui/material/colors';
import { styled } from '@mui/system';
import { SECONDARY_COLOR } from '../../../utils/constants';

export const OrangeBtn = styled(Button)<ButtonProps>(() => ({
  backgroundColor: SECONDARY_COLOR,
  color: grey[900],
  fontWeight: 700,
  padding: '8px 20px',
  variant: 'contained',
  textTransform: 'uppercase',
  borderRadius: '50px',
  ':hover': {
    backgroundColor: grey[50],
    color: grey[900],
  },
}));

export const ReadMoreBtn = styled(Button)<ButtonProps>(() => ({
  color: blueGrey[900],
  fontWeight: 700,
  textTransform: 'uppercase',
  ':hover': {
    color: blueGrey[900],
    backgroundColor: 'none',
  },
}));

// project section read more button
export const ProjectBtn = styled(Button)<ButtonProps>(() => ({
  color: 'white',
  '&:hover': {
    color: SECONDARY_COLOR,
  },
}));

export const WhiteBtn = styled(Button)<ButtonProps>(() => ({
  color: grey[50],
  fontWeight: 700,
  variant: 'outlined',
  borderRadius: '50px',
  padding: '8px 20px',
  border: '1px solid white',
  position: 'relative',
  textTransform: 'uppercase',
  ':hover': {
    color: grey[900],
    backgroundColor: SECONDARY_COLOR,
    border: '1px solid ' + SECONDARY_COLOR,
  },
}));
