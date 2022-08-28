import { Box, Grid, Typography, Stack } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.css';
export default function FooterCol(props: any) {
  return (
    <Box mt="2rem">
      <Typography variant="h6" sx={{ color: '#fff' }}>
        {props.menuTitle ? props.menuTitle : ' '}
      </Typography>
      <Stack spacing={2} component="ul" sx={{ listStyle: 'none', pl: 0 }}>
        {props.menuItems.map((item: any, index: number) => (
          <Stack component="li" key={index}>
            <Link href={item.link}>
              <a>{item.name}</a>
            </Link>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
}
