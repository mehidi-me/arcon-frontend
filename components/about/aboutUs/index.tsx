import React from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { Description, SectionTitle } from 'components/common/Title';
import Image from 'next/image';
import styles from './styles.module.css';
import { ReadMoreBtn } from 'components/common/Button';

export default function AboutUs() {
  return (
    <>
      <Container sx={{ my: 8 }}>
        <Grid container spacing={2}>
          <Grid item md={7} sm={12} xs={12}>
            <Box className={styles.tabScreen}>
              <Image
                src="/images/arcon11.jpg"
                alt="demo work image"
                width={500}
                height={500}
                objectFit="fill"
                loading="lazy"
              />
            </Box>
          </Grid>
          <Grid item lg={5} md={5} xs={12}>
            <SectionTitle>About Us</SectionTitle>
            <Typography variant="h4" fontWeight="700" my="10px">
              Partner In Inspiring And Improving Your Life
            </Typography>
            <Description sx={{ my: 2 }}>
              Our core business is all about aligning our clients’ brands and businesses with
              environments crafted around real people’s wants and needs, seeking to balance brand
              expression with end-user ergonomics. Specialize in mixed-use projects.
            </Description>
            <Grid container fontWeight="500" spacing={2}>
              <Grid item md={6} xs={12}>
                &#x2713; No hidden commission
              </Grid>
              <Grid item md={6} xs={12}>
                &#x2713; Fully Vastu Optimized
              </Grid>
              <Grid item md={6} xs={12}>
                &#x2713; 3D Design Included
              </Grid>
              <Grid item md={6} xs={12}>
                &#x2713; Personalized Designs
              </Grid>
            </Grid>
            <Box my="1.5rem">
              <ReadMoreBtn variant="outlined">
                <a href={'#services'}>Read More</a>
              </ReadMoreBtn>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
