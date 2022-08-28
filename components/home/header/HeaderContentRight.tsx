import { Box, Stack } from '@mui/material';
import { OrangeBtn, WhiteBtn } from 'components/common/Button';
import { HeaderTitle } from 'components/common/Title';
import Link from 'next/link';
import React from 'react';
import { SECONDARY_COLOR } from '../../../utils/constants';
import * as sxStyles from './style';
import styles from './styles.module.css';

const HeaderContentRight = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '260px',
        width: { md: '70%', lg: '80%', xl: '100%' },
        textAlign: {
          sx: 'center',
          md: 'right',
        },
      }}
    >
      <Box sx={sxStyles.headerTextRightBorder} />
      <Box sx={sxStyles.headerTextRightBottomBorder} />
      <Box sx={sxStyles.headerTextRightTopBorder} />
      <HeaderTitle
        variant="h2"
        className={styles.animateRightToLeft}
        sx={{ fontSize: { xs: 30, sm: 45, md: 60 } }}
      >
        Best Ideas For <br /> Your Home Interiors
      </HeaderTitle>
      <Box className={styles.animateLeftToRight} sx={sxStyles.headerRightAdditionalInfo}>
        <Stack component="div" fontWeight="700">
          10 Years Warranty
        </Stack>
        <Stack
          component="div"
          sx={{
            width: '2px',
            height: { sx: '16px', md: '30px' },
            backgroundColor: SECONDARY_COLOR,
          }}
          fontWeight="700"
        />
        <Stack component="div" fontWeight="700">
          Easy EMI
        </Stack>
        <Stack
          component="div"
          sx={{
            width: '2px',
            height: { sx: '16px', md: '30px' },
            backgroundColor: SECONDARY_COLOR,
          }}
          fontWeight="700"
        />
        <Stack component="div" fontWeight="700">
          670+ Project Done
        </Stack>
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: 2,
          mt: 2,
          justifyContent: 'flex-end',
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

export default HeaderContentRight;
