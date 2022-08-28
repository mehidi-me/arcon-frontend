import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { Project } from 'types/projectType';

interface Props {
  project: Project;
}

export default function BusinessIdea({ project }: Props) {
  const { ideas, images, _id, title, featureImg } = project;

  return (
    <Container>
      <Typography variant="h4">Best Business Ideas</Typography>
      <Box dangerouslySetInnerHTML={{ __html: ideas }} />
      <Grid container spacing={2} flexDirection="row" alignItems="center" justifyContent="center">
        {images.map((img) => (
          <Grid item md={4} sm={6} xs={12} key={img._id}>
            <Image
              src={img.url}
              alt={title}
              height={600}
              width={600}
              objectFit="cover"
              placeholder="blur"
              blurDataURL="https://i.ibb.co/KV27zx8/skeleton.jpg"
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
