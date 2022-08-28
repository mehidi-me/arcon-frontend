import Dialog, { DialogProps } from '@mui/material/Dialog';
import { styled } from '@mui/material/styles';

export const BootstrapDialog = styled(Dialog)<DialogProps>(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialog-paperScrollPaper': {
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(1),
    },
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
