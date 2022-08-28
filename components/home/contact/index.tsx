import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Form from './form';
import styles from './styles.module.css';
import WifiCalling3OutlinedIcon from '@mui/icons-material/Call';
import { Description, Title } from '../../common/Title';
import { Facebook, Instagram, LinkedIn, Pinterest } from '../../common/SocialIcon';
import Link from 'next/link';
import { SECONDARY_COLOR } from '../../../utils/constants';

export default function Contact() {
  return (
    <Container maxWidth="xl" sx={{ my: 5, p: { xs: 0, sm: 0 } }} id="contact">
      <Grid container spacing={2}>
        <Grid item md={6} className={styles.container} sx={{ top: { md: '40px' } }}>
          <Box className={styles.contactInfo}>
            <Stack
              spacing={2}
              sx={{
                backgroundColor: 'white',
                m: '10%',
                p: { xs: 5, md: 6, sm: 4 },
                textAlign: 'center',
              }}
            >
              <Title variant="h4">Emergancy Interiors Services</Title>
              <Description>
                Please do not hesitate to send us a message. We are looking forward to hearing from
                you.
              </Description>
              <Box display="flex" justifyContent="center" alignItems="center">
                <Box>
                  <WifiCalling3OutlinedIcon
                    sx={{ color: SECONDARY_COLOR, fontSize: '2.5rem', mt: '5px' }}
                  />
                </Box>
                <Box sx={{ ml: 1 }}>
                  <Typography fontSize="16px" fontWeight="700">
                    Waiting Call Us
                  </Typography>
                  <Typography fontSize="16px" fontWeight="700">
                    <a href="tel: +8801687266144">+8801687266144</a>
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Link href="https://www.facebook.com/arcon.interior/">
                  <Facebook />
                </Link>
                <Link href="https://www.instagram.com/arcon_interiors/">
                  <Instagram />
                </Link>
                <Link href="https://www.linkedin.com/home/">
                  <LinkedIn />
                </Link>
                <Link href="https://www.pinterest.com/">
                  <Pinterest />
                </Link>
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid item md={6} className={styles.formContainer}>
          <Form />
        </Grid>
      </Grid>
    </Container>
  );
}
