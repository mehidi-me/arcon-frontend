import { Box, Container, Grid, Typography } from '@mui/material';
import styles from './styles.module.css';
import reviewData from './data';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { HeaderTitle, SectionTitle } from '../../common/Title';
import { WhiteBtn } from '../../common/Button';
import * as sxStyles from './style';
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded';

export default function Testimonials() {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box className={styles.container}>
      <Container maxWidth="xl">
        <Grid container sx={{ alignItems: 'center', my: 14 }} spacing={2}>
          <Grid item md={4} xs={12} sm={12}>
            <Box sx={{ ml: { xs: 3, md: 10 } }}>
              <SectionTitle>Testimonials</SectionTitle>
              <HeaderTitle variant="h3" sx={{ fontSize: { xs: 30, sm: 40 } }}>
                What They’re Talking About Company Work
              </HeaderTitle>
              <WhiteBtn>View More &rarr;</WhiteBtn>
            </Box>
          </Grid>
          <Grid item md={8} xs={12} sm={12}>
            <Slider {...settings}>
              {reviewData.map((review) => (
                <Box key={review.id}>
                  <Box className={styles.reviewCard}>
                    {/* image */}
                    <Box className={styles.avatarContainer}>
                      <Box className={styles.avatar}>
                        <Image
                          src={review.img}
                          width={106}
                          height={106}
                          alt=""
                          className={styles.img}
                        />
                      </Box>
                    </Box>
                    {/* content */}
                    <Box className={styles.content}>
                      <Box sx={sxStyles.svgIcon}>
                        {/*<Image*/}
                        {/*  src="/quote-left.svg"*/}
                        {/*  alt="An SVG of an eye"*/}
                        {/*  width={70}*/}
                        {/*  height={70}*/}
                        {/*/>*/}
                        <FormatQuoteRoundedIcon color={'secondary'} sx={{ fontSize: 50 }} />
                      </Box>
                      <Box
                        sx={{
                          pb: 5,
                          height: '220px',
                          overflow: 'hidden',
                          mb: 2,
                          textOverflow: 'ellipsis',
                        }}
                      >
                        <Typography
                          component="blockquote"
                          sx={{
                            lineHeight: { xs: 1.5, md: '36px' },
                            fontWeight: 400,
                            fontSize: { xs: 16, sm: 18 },
                            color: 'rgba(255,255,255,.8)',
                            fontStyle: 'italic',
                          }}
                        >
                          &quot; {review.review}&quot;
                        </Typography>
                      </Box>
                      <Box>
                        <Typography
                          color="secondary"
                          variant="h6"
                          sx={{ fontSize: { xs: 13, lg: 18 } }}
                        >
                          {review.name}
                        </Typography>
                        <Typography sx={sxStyles.testimonialDesignation} variant="body2">
                          {review.position}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
