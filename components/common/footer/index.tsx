import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SECONDARY_COLOR } from '../../../utils/constants';
import { ReadMoreBtn } from '../Button';
import { Facebook, Instagram, LinkedIn, Pinterest } from '../SocialIcon';
import { Description, Title } from '../Title';
import FooterCol from './footerCol';
import { BootstrapTooltip } from './muiTooltip';
import styles from './styles.module.css';

export default function Footer() {
  const router = useRouter();
  const QuickLinks = [
    { name: 'Make Appointments', link: '/appointment' },
    { name: 'Before & After', link: '/#' },
    { name: 'Customer Treatments', link: '/#' },
    { name: 'Our Special Team', link: '/#' },
    { name: 'Departments Services', link: '/#' },
    { name: 'About our Firm', link: '/#' },
    { name: 'Contact Us', link: '/contact' },
    { name: 'Privacy Policy', link: '/privacy' },
  ];

  return (
    <Box className={styles.container} sx={{ marginTop: { xs: 5, sm: 7, md: 13 } }}>
      {/* contact info section */}
      <Box sx={{ color: '#fff' }}>
        <Container>
          <Grid
            container
            spacing={6}
            sx={{
              mt: 4,
              '& .MuiSvgIcon-root': {
                fontSize: '3.2rem',
                backgroundColor: SECONDARY_COLOR,
                padding: '12px',
                marginX: '10px',
                borderRadius: '5px',
              },
            }}
          >
            <Grid item lg={4} className={styles.infoDiv}>
              <CallIcon sx={{ color: '#212121' }} />
              <Stack>
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '18px' }}>
                  <a href="tel: +8801687266144">+8801687266144</a>
                </Typography>
                <Typography>Have a question? call us now</Typography>
              </Stack>
            </Grid>
            <Grid item lg={4} className={styles.infoDiv}>
              <EmailIcon sx={{ color: '#212121' }} />
              <Stack>
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '18px' }}>
                  <a href="mailto:arconconsultancybd@gmail.com">arconconsultancybd@gmail.com</a>
                </Typography>
                <Typography>Need support? Drop us an email</Typography>
              </Stack>
            </Grid>
            <Grid item lg={4} className={styles.infoDiv}>
              <AccessTimeFilledIcon sx={{ color: '#212121' }} />
              <Stack>
                <Typography variant="h6" sx={{ fontWeight: 700, fontSize: '18px' }}>
                  {' '}
                  Mon &#8211; Sat 07:00 &#8211; 21:00
                </Typography>
                <Typography>We are open on</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Container>
        <Box sx={{ boxShadow: '0px 0px 1px grey', width: 'unset' }}>
          <Container>
            <Grid container sx={{ mt: 10, justifyContent: 'space-between' }}>
              <Grid item md={3} sm={6} xs={12}>
                <FooterCol menuTitle="Quick Links" menuItems={QuickLinks} />
              </Grid>
              <Grid
                item
                md={5}
                sm={6}
                xs={12}
                textAlign="center"
                sx={{ boxShadow: '0px 0px 1px 0px grey', p: 5, alignItems: 'center' }}
              >
                <Box sx={{ cursor: 'pointer' }}>
                  <Image
                    onClick={() => router.push('/')}
                    src="/images/logo.svg"
                    alt="logo"
                    width={120}
                    height={120}
                  />
                </Box>

                <Stack spacing={1}>
                  <Description>
                    Arcon design consultancy firm that brings sensitivity to the design top hotels,
                    offices & homes around the world.
                  </Description>
                  <Link href="/about" passHref>
                    <ReadMoreBtn sx={{ color: '#FAE80C', '&:hover': { color: '#FAE80C' } }}>
                      Read More
                    </ReadMoreBtn>
                  </Link>
                  <Typography variant="h6">Address: </Typography>
                  <Typography sx={{ fontSize: { xs: 14, md: 16, lg: 18 } }}>
                    Nasirabad Housing Society, Flot -1
                  </Typography>
                  <Typography sx={{ fontSize: { xs: 14, md: 16, lg: 18 } }}>
                    Zakir Hossain Road, Rose Valley, Khulshi, Chittagong
                  </Typography>
                </Stack>
              </Grid>
              <Grid sx={{ color: 'rgba(255,255,255,.65)' }} item md={3} sm={12} xs={12} my="2rem">
                <Stack spacing={2}>
                  <Typography sx={{ color: '#fff' }} component="h6" variant="h6">
                    Our Time Schedule
                  </Typography>
                  <Box className={styles.schedule}>
                    <Stack>Mon to Wed</Stack>
                    <Stack>10:00 am to 2:30 pm</Stack>
                  </Box>
                  <Box className={styles.schedule}>
                    <Stack>Thu to Fri</Stack>
                    <Stack>11:00 am to 4:30 pm</Stack>
                  </Box>
                  <Box className={styles.schedule}>
                    <Stack>Saturday</Stack>
                    <Stack>10:00 am to 1:00 pm</Stack>
                  </Box>
                  <Box className={styles.schedule}>
                    <Stack>Sunday</Stack>
                    <Stack>Closed</Stack>
                  </Box>
                </Stack>
                <Stack sx={{ mt: 5 }}>
                  <Title variant="h6"> Follow Us On</Title>
                  <Stack
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <BootstrapTooltip title="Facebook" placement="top">
                      <a
                        href="https://www.facebook.com/arcon.interior/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Facebook />
                      </a>
                    </BootstrapTooltip>

                    <BootstrapTooltip title="Instagram" placement="top">
                      <a
                        href="https://www.instagram.com/arcon_interiors/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Instagram />
                      </a>
                    </BootstrapTooltip>

                    <BootstrapTooltip title="Linkedin" placement="top">
                      <a href="https://www.linkedin.com/home/" target="_blank" rel="noreferrer">
                        <LinkedIn />
                      </a>
                    </BootstrapTooltip>

                    <BootstrapTooltip title="Pinterest" placement="top">
                      <a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
                        <Pinterest />
                      </a>
                    </BootstrapTooltip>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <Box sx={{ my: 5 }}>
          <Box flexWrap="wrap" display="flex" justifyContent="center">
            <Typography sx={{ color: 'background.paper', fontSize: { xs: '13px', sm: '16px' } }}>
              Copyright &copy; {new Date().getFullYear()} Arcon Interior by &nbsp;
            </Typography>
            <Typography sx={{ fontSize: { xs: '13px', sm: '16px' } }} color="secondary">
              <a target="_blank" href="https://zorgitgroup.com" rel="noreferrer">
                Zorg IT Group
              </a>
            </Typography>
          </Box>
          <Stack
            component="ul"
            sx={{
              display: 'flex',
              justifyContent: 'center',
              flexDirection: 'row',
              pl: 0,
              fontSize: { xs: '13px', sm: '16px' },
            }}
          >
            <Stack component="li">
              <Link href="/about">
                <a>About Us &nbsp; </a>
              </Link>
            </Stack>
            <span> | </span>
            <Stack component="li">
              <Link href="/#services">
                <a>&nbsp; Services &nbsp;</a>
              </Link>
            </Stack>
            <span> | </span>
            <Stack component="li">
              <Link href="/">
                <a>&nbsp; Privacy</a>
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
