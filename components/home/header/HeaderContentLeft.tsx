import { Box } from '@mui/material';
import { OrangeBtn, WhiteBtn } from 'components/common/Button';
import { HeaderTitle } from 'components/common/Title';
import Link from 'next/link';
import React from 'react';
import * as sxStyles from './style';
import styles from './styles.module.css';

const HeaderContentLeft = () => {
  return (
    <Box
      sx={{ position: 'relative', height: '260px', width: { md: '70%', lg: '80%', xl: '100%' } }}
    >
      <Box className={styles.borderFadeIn} sx={sxStyles.headerTextLeftBorder} />
      <Box className={styles.borderFadeIn} sx={sxStyles.headerTextLeftBottomBorder} />
      <Box className={styles.borderFadeIn} sx={sxStyles.headerTextLeftTopBorder} />
      <HeaderTitle className={styles.animateLeftToRight} variant="h5">
        Welcome To Arcon Interior
      </HeaderTitle>
      <HeaderTitle
        variant="h2"
        className={styles.animateRightToLeft}
        sx={{ fontSize: { xs: 30, sm: 45, md: 60 } }}
      >
        Making Your Home <br /> More Beautiful
      </HeaderTitle>

      <Box
        sx={{
          display: 'flex',
          gap: 2,
          alignItems: {
            xs: 'center',
            md: 'unset',
          },
          flexDirection: { xs: 'column', md: 'row' },
        }}
      >
        <Box>
          <Link href="/projects" passHref>
            <OrangeBtn className={styles.animateButton} sx={{ width: '200px' }}>
              View More &rarr;
            </OrangeBtn>
          </Link>
        </Box>
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Link href="/about" passHref>
            <WhiteBtn className={styles.animateButton} sx={{ width: '200px' }}>
              Our Portfolio &rarr;
            </WhiteBtn>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderContentLeft;
