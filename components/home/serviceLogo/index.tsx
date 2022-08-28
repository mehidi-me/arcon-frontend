import { Box, Container } from '@mui/material';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import data from './data';

export default function ServiceLogo() {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container maxWidth="xl" sx={{ my: 5, overflow: 'hidden', px: '0 !important' }}>
      <Slider {...settings}>
        {data.map((logo) => (
          <Box key={logo.id} sx={{ p: 2 }}>
            <Image src={logo.image} alt="logo" width={140} height={140} objectFit="contain" />
          </Box>
        ))}
      </Slider>
    </Container>
  );
}
