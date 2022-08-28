import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Typography } from '@mui/material';
import { ProjectBtn } from 'components/common/Button';
import {
  ProjectContainer,
  ProjectDescription,
  ProjectDetails,
  ProjectName
} from 'components/common/project/styles';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { Project } from 'types/projectType';
import { SECONDARY_COLOR } from '../../../utils/constants';
import styles from '../../common/project/styles.module.css';

interface Props {
  projects: Project[];
}

export default function ProjectItems({ projects }: Props) {
  const arrowStyle = {
    color: SECONDARY_COLOR,
    opacity: 0.6,
    '&:hover': { color: SECONDARY_COLOR },
  };

  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3.2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 620,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: <ArrowBackIosIcon sx={{ ...arrowStyle }} />,
          nextArrow: <ArrowForwardIosIcon sx={{ ...arrowStyle }} />,
        },
      },
    ],
  };

  return (
    <>
      <Box sx={{ ml: { md: 10, xl: 40 }, overflow: 'hidden', px: { xs: 4, sm: 0 } }}>
        <Slider {...settings}>
          {projects.map((project) => (
            <Box key={project._id}>
              <ProjectContainer className={styles.projectContainer}>
                <Image
                  className={styles.projectImage}
                  src={project.featureImg.url}
                  alt={project.title}
                  width={500}
                  height={600}
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL="https://i.ibb.co/KV27zx8/skeleton.jpg"
                />
                <Box className={styles.hoverOverlay}>
                  <ProjectDetails>
                    <Box className={styles.detailsContainer}>
                      <Link href={`/projects/${project._id}`} passHref>
                        <ProjectName variant="h5">{project.title}</ProjectName>
                      </Link>
                      <ProjectDescription>
                        <Typography
                          sx={{
                            lineHeight: { xs: 1.7, xl: 2 },
                            fontSize: 'inherit',
                          }}
                          component="p"
                        >
                          {project.description.substring(0, 150)}
                          {project.description.length < 150 ? ' ' : '...'}
                        </Typography>
                      </ProjectDescription>

                      <Box sx={{ position: 'absolute', bottom: '10px' }}>
                        <Link href={`/projects/${project._id}`} passHref>
                          <ProjectBtn>read more &#43;</ProjectBtn>
                        </Link>
                      </Box>
                    </Box>
                  </ProjectDetails>
                </Box>
              </ProjectContainer>
            </Box>
          ))}
        </Slider>
      </Box>
    </>
  );
}
