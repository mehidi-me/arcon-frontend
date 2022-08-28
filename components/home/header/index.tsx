import { Box, Container } from '@mui/material';
import ContactInfo from 'components/common/ContactInfo';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import HeaderContentLeft from './HeaderContentLeft';
import HeaderContentRight from './HeaderContentRight';
import styles from './styles.module.css';

export default function Header() {
  const [contentPosition, setContentPosition] = useState<'left' | 'right'>('left');
  // this state determines whether the image is loaded or not
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      if (contentPosition === 'left') {
        setContentPosition('right');
      } else {
        setContentPosition('left');
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [contentPosition]);

  const contentLeft = contentPosition === 'left';

  return (
    <Box
      key={contentPosition}
      sx={{
        height: {
          xs: '400px',
          sm: '600px',
          md: '700px',
        },
        position: 'relative',
        overflow: 'hidden',
        top: '-30px',
        background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
      }}
    >
      <Image
        className={styles.headerImage}
        src={contentLeft ? '/images/header-bg.jpg' : '/images/header-bg-2.jpg'}
        layout="fill"
        objectFit="cover"
        objectPosition="top"
        priority
        alt="Background Header Image"
        onLoadingComplete={() => {
          setImageIsLoaded(true);
        }}
      />
      <ContactInfo />
      {imageIsLoaded && (
        <Container
          sx={{
            textAlign: { xs: 'center', md: 'unset' },
            mt: { xs: 19, sm: 28 },
            ml: { md: 20 },
            mx: { xl: 'auto' },
            '@media screen and (max-width: 899px)': {
              mx: 0,
            },
          }}
        >
          {contentLeft ? <HeaderContentLeft /> : <HeaderContentRight />}
        </Container>
      )}
    </Box>
  );
}
