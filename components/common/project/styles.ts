import { Box, Typography } from '@mui/material';
import { BoxProps, styled, TypographyProps } from '@mui/system';
import { SECONDARY_COLOR } from '../../../utils/constants';

export const ProjectDescription = styled(Box)<BoxProps>(() => ({
  marginBottom: 2,
  display: 'block',
  paddingTop: 1,
  fontSize: 14,
  color: 'rgba(255,255,255,.70)',
  wordSpacing: 3,
  letterSpacing: 2,
}));

export const ProjectDetails = styled(Box)<BoxProps>(() => ({
  height: '100%',
  color: 'white',
  position: 'relative',
}));

export const ProjectContainer = styled(Box)<BoxProps>(() => ({
  margin: '1rem',
  position: 'relative',
  display: 'inline-block',
}));

export const ProjectName = styled(Typography)<TypographyProps>(({ theme }) => ({
  my: 3,
  cursor: 'pointer',
  color: '#fff',
  fontWeight: 700,
  fontSize: 22,
  '&:hover': {
    color: SECONDARY_COLOR,
  },
}));
