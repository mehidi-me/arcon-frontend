import { Box, Container, Grid } from '@mui/material';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { getPaginateProjects } from 'backend/projects';
import { OrangeBtn, ProjectBtn } from 'components/common/Button';
import {
  ProjectContainer,
  ProjectDescription,
  ProjectDetails,
  ProjectName
} from 'components/common/project/styles';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { Category } from 'types/categoryType';
import { Project } from 'types/projectType';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { projectsPageAtom } from '../../../recoil/atoms/projectAtom';
import styles from '../../common/project/styles.module.css';
import * as sxStyles from './style';
import { getTabStyles } from './style';
interface Description {
  children?: React.ReactNode;
  catID: string;
  executeScroll: () => void;
}

function TabPanel({ catID, executeScroll }: Description) {
  // fetch data by category id here and return it to this children
  const { data } = useQuery(`projectsByCatID${catID}`, async () => {
    let url = '/projects';
    if (catID !== 'all') {
      url = '/projects/category/' + catID;
    }
    const { data } = await axios.get(url);
    return data as Project[];
  });

  const {
    status,
    data: projectsData,
    error,
    isFetching,
    isFetchingNextPage,
    isFetchingPreviousPage,
    fetchNextPage,
    fetchPreviousPage,
    hasNextPage,
    hasPreviousPage,
  } = useInfiniteQuery('projects', getPaginateProjects, {
    getNextPageParam: (lastPage: any) => lastPage.nextPage ?? false,
  });

  const loadMoreButtonRef = React.useRef<HTMLButtonElement>(null);

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: () => fetchNextPage(),
    enabled: hasNextPage,
  });

  return (
    <Box role="tabpanel" sx={{ py: 3 }}>
      {projectsData && (
        <Box>
          <Grid
            container
            spacing={2}
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
          >
            {projectsData.pages.map((page) => {
              return page.projects.map((project) => {
                return (
                  <Grid item md={4} sm={6} xs={12} key={project._id}>
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
                  </Grid>
                );
              });
            })}
          </Grid>
          <OrangeBtn
            sx={{ display: 'block', mx: 'auto', my: 4 }}
            ref={loadMoreButtonRef}
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
          >
            {isFetchingNextPage
              ? 'Loading more...'
              : hasNextPage
              ? 'Load Newer'
              : 'Nothing more to load'}
          </OrangeBtn>
        </Box>
      )}
    </Box>
  );
}

interface Props {
  categories: Category[];
}

export default function ProjectsList({ categories }: Props) {
  const [categoryId, setCategoryId] = useState('all');
  const [, setPage] = useRecoilState(projectsPageAtom);

  // when the user changes the page, it will scroll to the top
  const tabsRef = useRef<HTMLDivElement>(null);
  const executeScroll = () => {
    if (tabsRef.current !== null) {
      tabsRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <Container ref={tabsRef}>
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 10 }}>
          <Tabs
            sx={sxStyles.TabStyle}
            value={categoryId}
            onChange={(event, value) => {
              setCategoryId(value);
              setPage(1);
            }}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab value={'all'} label={'All Projects'} {...getTabStyles('all')} />
            {categories.map((category) => {
              return (
                <Tab
                  key={category._id}
                  value={category._id}
                  label={category.title}
                  {...getTabStyles(category._id)}
                />
              );
            })}
          </Tabs>
        </Box>
        <TabPanel catID={categoryId} executeScroll={executeScroll} />
      </Container>
    </>
  );
}
