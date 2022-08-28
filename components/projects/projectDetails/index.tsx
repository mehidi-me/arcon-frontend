import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { Facebook, Instagram, LinkedIn, Pinterest } from 'components/common/SocialIcon';
import Images from 'next/image';
import React from 'react';
import { Project } from 'types/projectType';
import { SECONDARY_COLOR } from '../../../utils/constants';

interface Props {
  project: Project;
}

export default function ProjectDetails({ project }: Props) {
  const { featureImg, name, title, location, workingYear } = project;

  return (
    <Box sx={{ my: 5 }}>
      <Container sx={{ position: 'relative' }}>
        <Box>
          <Images
            src={featureImg.url}
            alt={title}
            objectFit="cover"
            width={1200}
            height={700}
            loading="lazy"
          />
        </Box>
        <Box sx={{ mt: { xs: 3 } }}>
          <Box
            position={{ md: 'absolute', xs: 'static' }}
            sx={{
              backgroundColor: 'black',
              bottom: -30,
              right: 40,
              zIndex: 2,
              color: 'white',
              p: 3,
            }}
          >
            <Stack>
              <Typography variant="h6" sx={{ my: 1, color: SECONDARY_COLOR }}>
                Project Details:{' '}
              </Typography>
              <Grid container spacing={3}>
                <Grid item md={6} xs={6}>
                  <Typography>Project</Typography>
                  <Typography variant="caption">{title}</Typography>
                </Grid>
                <Grid item md={6} xs={6}>
                  <Typography>Clients</Typography>
                  <Typography variant="caption">{name}</Typography>
                </Grid>
                <Grid item md={6} xs={6}>
                  <Typography>Location</Typography>
                  <Typography variant="caption">{location}</Typography>
                </Grid>
                <Grid item md={6} xs={6}>
                  <Typography>Project Year</Typography>
                  <Typography variant="caption">{workingYear}</Typography>
                </Grid>
              </Grid>
            </Stack>
            <Stack mt="10px">
              <Typography fontWeight="700">Share Media: </Typography>
              <Grid>
                <a target="_blank" href="https://www.facebook.com/arcon.interior/" rel="noreferrer">
                  <Facebook />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/arcon_interiors/"
                  rel="noreferrer"
                >
                  <Instagram />
                </a>
                <a target="_blank" href="https://www.linkedin.com/home/" rel="noreferrer">
                  <LinkedIn />
                </a>
                <a target="_blank" href="https://www.pinterest.com/" rel="noreferrer">
                  <Pinterest />
                </a>
              </Grid>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
