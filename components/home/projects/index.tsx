import { Typography, Box } from "@mui/material";
import { SectionTitle, Title } from "../../common/Title";
import ProjectItems from "./projectItems"
import { Project } from 'types/projectType';

interface Props {
  projects: Project[];
}

export default function Projects({ projects }: Props) {

  return (
    <>
      <Box sx={{ mt: 8 }}>
        <SectionTitle sx={{ textAlign: 'center' }}>Our Best Projects</SectionTitle>
        <Title variant="h4" sx={{ fontSize: { xs: 30, sm: 40 }, px: 1, mb: 6 }}>
          Lets Have A Look At What Creativity <br /> Best Projects
        </Title>
      </Box>
      <ProjectItems projects={projects} />
    </>
  );
}
