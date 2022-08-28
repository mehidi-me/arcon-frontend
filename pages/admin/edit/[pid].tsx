import React from "react";
import { Box } from "@mui/system";
import AdminLayout from "components/admin/adminLayout";
import EditProjectComp from "components/admin/edit";
import { useRouter } from "next/router";
import { Backdrop, CircularProgress, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { fetchSingleProject } from "components/admin/useProjects";

export default function EditProject() {
  const router = useRouter();
  const { pid } = router.query;
  const projectQuery = useQuery(["project", pid], async () => {
    if (pid) {
      return await fetchSingleProject(pid as string);
    }
  });
  return (
    <Box>
      <AdminLayout pageTitle="Edit Project">
        {pid && !projectQuery.isLoading && !projectQuery.data && (
          <Typography variant="h4" textAlign="center" m={4}>
            Failed to get project data
          </Typography>
        )}
        {projectQuery.data && pid && (
          <EditProjectComp
            projectData={projectQuery.data}
            projectId={pid as string}
          />
        )}
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={projectQuery.isLoading}
        >
          <CircularProgress color="secondary" />
        </Backdrop>
      </AdminLayout>
    </Box>
  );
}
