import { Box, Container, Grid, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import { TERTIARY_COLOR } from '../../../utils/constants';
import { Description, SectionTitle } from '../../common/Title';
import ArconData from './data';
import styles from './styles.module.css';

export default function WhyArcon() {
  return (
    <Container maxWidth="xl" sx={{ p: { xs: 0, sm: 0 } }}>
      <Grid container spacing={4}>
        <Grid
          className={styles.aboutArcon}
          item
          md={5}
          sm={12}
          xs={12}
          sx={{ backgroundColor: TERTIARY_COLOR }}
        >
          <Box>
            {ArconData.map((data) => (
              <Box key={data.id} sx={{ px: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    p: 3,
                    alignItems: 'center',
                  }}
                >
                  <Box>{data.icon}</Box>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: '700' }}>
                      {data.title}
                    </Typography>
                    <Typography variant="body2">{data.description}</Typography>
                  </Box>
                </Box>
                {data?.id == 1 || data?.id == 2 ? <Divider sx={{ bgcolor: '#ffd700' }} /> : ''}
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item md={7} sm={12} xs={12}>
          <Container sx={{ mx: 'auto' }}>
            <Grid container>
              <Grid item md={12} sm={12}>
                <SectionTitle>Why Arcon</SectionTitle>
                <Typography fontWeight="700" variant="h4" sx={{ fontSize: { xs: 30, sm: 40 } }}>
                  Interior Designs From The Future Living Styles
                </Typography>
                <Description sx={{ my: 2, pr: 4 }}>
                  There are certain attributes of a profession and one has to catch hold of them in
                  order to work efficiently and grow in that business. I share my experience as an
                  interior designer, a profession of great esthetic value and charm.
                </Description>
              </Grid>
              <Grid item md={12} sm={8} sx={{ mx: 'auto' }}>
                <Image
                  src="/images/arcon.jpg"
                  alt="Picture of the author"
                  width={800}
                  height={400}
                  objectFit="cover"
                  loading="lazy"
                />
              </Grid>
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
