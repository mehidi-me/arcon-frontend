import { Container, Typography, Box, Grid, Button } from '@mui/material';
import styles from './styles.module.css';
import data from './data';
import Image from 'next/image';
import { ReadMoreBtn } from '../../common/Button';
import { SectionTitle, Description, Title } from '../../common/Title';

export default function WorkingStyle() {
  return (
    <Container>
      <Box sx={{ my: 5, textAlign: 'center' }} component="div">
        <SectionTitle>Working Style</SectionTitle>
        <Title variant="h4" sx={{ fontSize: { xs: 30, sm: 40 } }}>
          Our Innovative Ideas, The Most Stylish
          <br /> Working Style
        </Title>
      </Box>
      <Box
        sx={{
          position: 'relative',
          mt: 12,
          zIndex: 1,
          background: 'white',
          boxShadow: 5,
          py: 2,
        }}
      >
        <Grid container spacing={6} justifyContent="center" position="relative" top="-80px">
          {data.map((work) => (
            <Grid
              item
              className={styles.singleWork}
              key={work.id}
              md={3}
              sm={12}
              xs={12}
              sx={{
                justifyContent: 'center',
                textAlign: 'center',
                m: 1
              }}
            >
              <Image
                src={work.image}
                alt={work.title}
                width={120}
                height={120}
                className={styles.image}
              />
              <Typography variant="h6" fontWeight="600">{work.title}</Typography>
              <Description>
                {work.description}
              </Description>
              <ReadMoreBtn>Read More</ReadMoreBtn>
              <Box className={styles.serial}>
                <Typography variant="h1" fontWeight="700" color="#efefef">
                  {work.bgSerial}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
