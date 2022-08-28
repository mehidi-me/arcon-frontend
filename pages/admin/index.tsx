import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import AdminLayout from "components/admin/adminLayout";
import React from "react";
import { useQuery } from "react-query";
import { useRecoilValue } from "recoil";
import { userAtom } from "recoil/atoms/userAtom";
import { Project } from "types/projectType";
import { ProjectList } from "../../components/admin/projectList";

export default function Admin() {
  const userState = useRecoilValue(userAtom);
  const projectsQuery = useQuery("projects", async () => {
    const { data } = await axios.get("/projects");
    return data as Project[];
  });
  return (
    <Box>
      <AdminLayout pageTitle="Projects">
        {!projectsQuery.data && !projectsQuery.isLoading && (
          <Typography mt={10} variant="h5" fontWeight={600} textAlign="center">
            No projects are available
          </Typography>
        )}
        {projectsQuery.data && <ProjectList projects={projectsQuery.data} />}
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={projectsQuery.isLoading}
        >
          <CircularProgress color="secondary" />
        </Backdrop>
      </AdminLayout>
    </Box>
  );
}
