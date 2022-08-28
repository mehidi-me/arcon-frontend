import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Paper from '@mui/material/Paper';
import { Box } from '@mui/system';
import * as styles from './style';
import { Project } from 'types/projectType';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';
import { LoadingButton } from '@mui/lab';
import { useRouter } from 'next/router';

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

interface Props {
  projects: Project[];
}

export function ProjectList({ projects }: Props) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [openDialogue, setOpenDialogue] = React.useState(false);
  const [selectedProjectId, setSelectedProjectId] = React.useState<string | null>(null);
  const deleteProjectMutation = useMutation((id: string) => {
    return axios.delete(`/projects/${id}`);
  });

  const handleDialoguesClose = () => {
    setOpenDialogue(false);
    setSelectedProjectId(null);
  };

  const handleOpenDialogue = (id: string) => {
    setOpenDialogue(true);
    setSelectedProjectId(id);
  };

  const handleDeleteProject = async () => {
    if (selectedProjectId) {
      await deleteProjectMutation.mutateAsync(selectedProjectId);
      await queryClient.refetchQueries('projects');
      handleDialoguesClose();
    }
  };
  const isProjectsMutating = (): boolean => {
    return !!(deleteProjectMutation.isLoading || queryClient.isFetching('projects'));
  };

  const theme = useTheme();
  const smScreenMatched = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Box sx={styles.projectListTableContainer}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 375 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Clients</TableCell>
              {smScreenMatched ? <TableCell align="right">Working Year</TableCell> : <></>}
              <TableCell align="right">Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {projects.map((project) => (
              <TableRow
                key={project._id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {project.name}
                </TableCell>
                <TableCell align="right">{project.clients}</TableCell>
                {smScreenMatched ? (
                  <TableCell align="right">{project.workingYear}</TableCell>
                ) : (
                  <></>
                )}
                <TableCell align="right">
                  <IconButton
                    color="primary"
                    onClick={() => router.push(`/admin/edit/${project._id}`)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    color="error"
                    onClick={() => handleOpenDialogue(project._id)}
                    disabled={deleteProjectMutation.isLoading}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openDialogue}>
        <DialogTitle id="alert-dialog-title">Delete Project</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this project? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialoguesClose}>Cancel</Button>
          <LoadingButton
            variant="contained"
            color="error"
            onClick={handleDeleteProject}
            autoFocus
            loading={isProjectsMutating()}
            disabled={isProjectsMutating()}
          >
            Delete
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
