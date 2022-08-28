import { Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { styled, TypographyProps } from '@mui/system';
import { TERTIARY_COLOR } from '../../../utils/constants';

export const SectionTitle = styled(Typography)<TypographyProps>(() => ({
  color: TERTIARY_COLOR,
  fontWeight: 500,
  position: 'relative',
  textTransform: 'uppercase',
}));

export const Title = styled(Typography)<TypographyProps>(() => ({
  fontWeight: 700,
  textAlign: 'center',
}));

export const BarTitle = styled(Typography)<TypographyProps>(() => ({
  fontWeight: 600,
  marginBottom: 2,
}));

export const PageTitle = styled(Typography)<TypographyProps>(() => ({
  fontWeight: 700,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-end',
  height: 100,
  color: grey[50],
}));

export const HeaderTitle = styled(Typography)<TypographyProps>(() => ({
  fontWeight: 700,
  color: grey[50],
  position: 'relative',
  margin: '10px 0px 10px 0px',
}));

export const Description = styled(Typography)<TypographyProps>(() => ({
  fontWeight: 400,
  lineHeight: '27px',
  letterSpacing: '0.3px',
  color: '#777777',
  component: 'p',
}));

export const Percentage = styled(Typography)<TypographyProps>(() => ({
  fontWeight: 700,
  position: 'absolute',
  left: '78%',
  bottom: 30,
  variant: 'body1',
}));
