import { Dialog, DialogTitle } from '@mui/material';
import { MediaLibraryContent } from '../../admin/media';

interface UploadImageDialogProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  operation: 'update' | 'create' | 'delete';
  onCompleteSelected: () => void;
  allowMultiple?: boolean;
  imageType?: 'featuredImg' | 'projectImgs';
}

export const UploadImageDialog: React.FC<UploadImageDialogProps> = ({
  open,
  handleClose,
  title,
  operation,
  onCompleteSelected,
  allowMultiple,
  imageType,
}) => {
  return (
    <Dialog fullWidth maxWidth="xl" onClose={handleClose} open={open}>
      <DialogTitle>{title}</DialogTitle>
      <MediaLibraryContent
        operation={operation}
        limit={12}
        onCompleteSelected={onCompleteSelected}
        allowMultiple={allowMultiple}
        imageType={imageType}
      />
    </Dialog>
  );
};
