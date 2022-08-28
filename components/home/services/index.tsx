import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { OrangeBtn } from '../../common/Button';
import { Description, SectionTitle } from '../../common/Title';
import servicesData from './data.js';
import styles from './styles.module.css';

export default function Services() {
  return (
    <div id="services">
      <Box position="relative" overflow="hidden" sx={{ pb: { md: 16, xs: 0 } }}>
        <Box sx={{ backgroundColor: '#fafafa', py: 5 }}>
          <Container>
            <Grid container sx={{ py: 5 }}>
              <Grid item md={6}>
                <SectionTitle>Services We do</SectionTitle>
                <Typography
                  variant="h4"
                  sx={{ my: 1, fontSize: { xs: 30, sm: 40 } }}
                  fontWeight="700"
                >
                  Our Best Service Interior
                </Typography>
              </Grid>
              <Grid item md={6}>
                <Description>
                  Reprehenderit consequat sint aliquip culpa velit voluptate duis elit veniam.
                  Reprehenderit quis magna veniam proident. Irure dolore dolor reprehenderit id nisi
                  exercitation incididunt tempor velit nulla.
                </Description>
              </Grid>
            </Grid>
          </Container>
          <Container>
            <Grid container>
              {servicesData.map((service) => (
                <Grid
                  key={service.name}
                  item
                  md={3}
                  xs={12}
                  sm={12}
                  sx={{
                    boxShadow: 1,
                    p: 5,
                    backgroundColor: 'white',
                    zIndex: 2,
                    my: { sm: 1, xs: 1.5, md: 0 },
                  }}
                  className={styles.itemContainer}
                >
                  <Box className={styles.iconContainer}>{service.icon}</Box>
                  <Typography variant="h6" component="h6">
                    {service.name}
                  </Typography>
                  <Description variant="body2">{service.description}</Description>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
        <Box
          sx={{
            position: { md: 'absolute', xs: 'relative' },
            top: { md: '380px', xs: 0 },
            width: '100%',
          }}
        >
          <Container sx={{ my: 3 }}>
            <Grid container alignItems="flex-end">
              <Grid item lg={6} md={6} sm={12} xs={12}>
                <Grid container spacing={1} sx={{ mb: 4 }}>
                  <Grid item md={3}>
                    <Image
                      src="/images/star.png"
                      alt="logo"
                      width={98}
                      height={14}
                      objectFit="cover"
                    />
                  </Grid>
                  <Grid item md={9}>
                    <Description>
                      <span className={styles.textDec}>99.9% Customer satisfaction</span> based on
                      750+ reviews and 20,000 Objective Resources
                    </Description>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={6} xs={12} sm={12} className={styles.sideImg}>
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '9%',
                    left: 0,
                    right: 0,
                    display: 'flex',
                    justifyContent: 'center',
                    overflow: 'hidden',
                  }}
                >
                  <Link href="/projects" passHref>
                    <OrangeBtn sx={{ width: '80%', fontSize: { xs: 12, sm: 14 } }}>
                      Our Featured Services Interior Design
                    </OrangeBtn>
                  </Link>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </div>
  );
}
