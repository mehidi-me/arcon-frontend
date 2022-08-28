import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { LoadingButton } from '@mui/lab';
import { Button, CircularProgress, Typography } from '@mui/material';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import { SECONDARY_COLOR } from '../../../utils/constants';
import { BootstrapDialog } from './style';

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2, fontSize: { xs: 20, sm: 30 } }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

interface CustomizedDialogsProps {
  open: boolean;
  modalTitle: string;
  modalDesc: string;
  onClose: () => void;
  onYes?: () => Promise<void>;
  closeButtonTitle: string;
  closeButton?: boolean;
  backgroundColor?: string;
  isLoading?: boolean;
}

export default function CustomizedDialogs({
  open,
  modalTitle,
  modalDesc,
  onClose,
  onYes,
  closeButtonTitle,
  closeButton = false,
  backgroundColor = SECONDARY_COLOR,
  isLoading = false,
}: CustomizedDialogsProps) {
  return (
    <div>
      <BootstrapDialog
        color={SECONDARY_COLOR}
        onClose={onClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={onClose}>
          {modalTitle}
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>{modalDesc}</Typography>
        </DialogContent>
        <DialogActions>
          <LoadingButton
            sx={{
              marginTop: 2,
              backgroundColor,
              borderRadius: '50px',
              color: 'white',
              px: 5,
              '&:hover': {
                backgroundColor,
              },
            }}
            loadingIndicator={<CircularProgress color={'secondary'} size={16} />}
            disabled={isLoading}
            loadingPosition="start"
            startIcon={<DeleteIcon />}
            loading={isLoading}
            variant="contained"
            autoFocus
            onClick={async () => {
              // run the http request here
              onYes && (await onYes());
              // close the dialog
              onClose();
            }}
          >
            {closeButtonTitle}
          </LoadingButton>
          {closeButton && (
            <Button sx={{ marginTop: 2, color: 'gray' }} onClick={() => onClose()}>
              Not Now
            </Button>
          )}
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
