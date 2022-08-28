import HomeIcon from '@mui/icons-material/Home';
import { Box, Container, Typography } from '@mui/material';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from 'next/link';
import React from 'react';
import { SECONDARY_COLOR } from '../../../utils/constants';

export default function Breadcrumb({ pageTitle }: { pageTitle: string }) {
  return (
    <Container
      sx={{
        backgroundColor: '#fff',
        p: 1,
        width: 'fit-content',
        position: 'absolute',
        bottom: 0,
        left: '7%',
        pr: 2,
      }}
      role="presentation"
    >
      <Breadcrumbs aria-label="breadcrumb">
        <Box display="flex" alignItems={'center'}>
          <HomeIcon sx={{ mr: 1 }} />
          <Link href="/">Home</Link>
        </Box>
        <Typography color={SECONDARY_COLOR}>{pageTitle}</Typography>
      </Breadcrumbs>
    </Container>
  );
}
