import BedIcon from '@mui/icons-material/Bed';
import EscalatorIcon from '@mui/icons-material/Escalator';
import { Container, Grid, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import LinearProgress, {
  linearProgressClasses,
  LinearProgressProps,
} from '@mui/material/LinearProgress';
import { styled } from '@mui/material/styles';
import { muiSxPropType } from 'components/types';
import Image from 'next/image';
import { TERTIARY_COLOR } from '../../../utils/constants';
import { BarTitle, Description, Percentage, SectionTitle } from '../../common/Title';
import styles from './styles.module.css';

export default function AboutArcon() {
  const iconP: muiSxPropType = {
    fontSize: '4rem',
    color: TERTIARY_COLOR,
  };

  const pBar: muiSxPropType = {
    py: 3,
    position: 'relative',
  };

  // percentage bar diagram
  const BorderLinearProgress = styled(LinearProgress)<LinearProgressProps>(({ theme }) => ({
    height: 6,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: TERTIARY_COLOR,
    },
  }));

  return (
    <Container sx={{ my: 8 }}>
      <Grid container spacing={3}>
        <Grid item lg={6} md={12} sm={12}>
          <Box className={styles.tabScreen}>
            {/* edited collab image area */}
            <Image
              src="/images/arcon10.jpg"
              alt="Arcon Work Image"
              width={600}
              height={600}
              objectFit="cover"
              loading="lazy"
            />
          </Box>
        </Grid>
        <Grid item lg={6} md={12} sm={12}>
          <SectionTitle>About Arcon</SectionTitle>
          <Typography
            variant="h4"
            sx={{ fontSize: { xs: 30, sm: 40 } }}
            component="div"
            fontWeight="700"
            gutterBottom
          >
            We Create The Art Of Stylish Living Stylishly
          </Typography>
          <Description sx={{ my: 3 }}>
            Arcon design consultancy firm that brings sensitivity to the design top restaurants,
            hotels, offices & homes around the world. We stand for quality, safety and credibility,
            so you could be sure about our work
          </Description>
          <Grid container spacing={2}>
            <Grid item display="flex" md={6} xs={12}>
              <Box>
                <EscalatorIcon sx={iconP} />
              </Box>
              <Box>
                <Typography variant="h6">Residential Interior</Typography>
                <Description variant="body2">
                  We do all types of the interior designing, decoration work
                </Description>
              </Box>
            </Grid>
            <Grid item md={6} display="flex" xs={12}>
              <Box>
                <BedIcon sx={iconP} />
              </Box>
              <Box>
                <Typography variant="h6" noWrap>
                  Modern Living Interior
                </Typography>
                <Description variant="body2">
                  We are master of renovation & innovation any kind of rooms.
                </Description>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ my: 1 }}>
            <Box sx={pBar}>
              <BarTitle>Riding Trainer</BarTitle>
              <BorderLinearProgress variant="determinate" value={73} />
              <Percentage>73%</Percentage>
            </Box>
            <Box sx={pBar}>
              <BarTitle>Exterior Designer</BarTitle>
              <BorderLinearProgress variant="determinate" value={64} />
              <Percentage>64%</Percentage>
            </Box>
            <Box sx={pBar}>
              <BarTitle>Happy Clients</BarTitle>
              <BorderLinearProgress variant="determinate" value={93} />
              <Percentage>93%</Percentage>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
