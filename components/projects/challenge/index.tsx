import { Container, Typography } from '@mui/material';
import { Description } from 'components/common/Title';
import React from 'react';

interface Props {
  challenge: string;
}

export default function Challenge({ challenge }: Props) {
  return (
    <>
      <Container sx={{ my: 3 }}>
        <Typography fontWeight="500" variant="h4">
          Project Challenges
        </Typography>
        <Description>
          <div dangerouslySetInnerHTML={{ __html: challenge }} />
        </Description>
      </Container>
    </>
  );
}
