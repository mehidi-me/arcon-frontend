import { styled } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import { IconProps } from '@mui/material/Icon';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { commonIcon } from './style';

export const Facebook = styled(FacebookIcon)<IconProps>(() => ({
  ...commonIcon,
}));

export const Instagram = styled(InstagramIcon)<IconProps>(() => ({
  ...commonIcon,
}));

export const LinkedIn = styled(LinkedInIcon)<IconProps>(() => ({
  ...commonIcon,
}));

export const Pinterest = styled(PinterestIcon)<IconProps>(() => ({
  ...commonIcon,
}));
