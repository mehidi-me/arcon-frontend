import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { LoadingButton } from '@mui/lab';
import {
  Box,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogTitle,
  Fab,
  Grid,
} from '@mui/material';
import axios from 'axios';
// Import the Image EXIF Orientation and Image Preview plugins
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
// Import FilePond styles
import 'filepond/dist/filepond.min.css';
import React, { useRef, useState } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import { useInfiniteQuery } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ImagesWithCount } from 'types/imageType';
import useIntersectionObserver from '../../../hooks/useIntersectionObserver';
import { addImagesDialogAtom, deleteImagesDialogAtom } from '../../../recoil/atoms/dialogsAtom';
import { selectedImagesAtom } from '../../../recoil/atoms/mediaAtom';
import { SECONDARY_COLOR } from '../../../utils/constants';
import { OrangeBtn } from '../../common/Button';
import { SingleImage } from './SingleImage';
import * as styles from './style';

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

interface MediaLibraryContentProps {
  limit?: number;
  operation: 'update' | 'create' | 'delete';
  onCompleteSelected?: () => void;
  allowMultiple?: boolean;
  imageType?: 'featuredImg' | 'projectImgs';
}

export const MediaLibraryContent: React.FC<MediaLibraryContentProps> = ({
  limit,
  operation,
  onCompleteSelected,
  allowMultiple = true,
  imageType,
}) => {
  const { data, isLoading, refetch, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useInfiniteQuery(
      ['all-images'],
      async ({ pageParam = 1 }) => {
        let url = '/media/images?page=' + pageParam;
        if (limit) {
          url += '&limit=' + limit;
        }
        const { data }: { data: ImagesWithCount } = await axios.get(url);
        return data;
      },
      {
        getNextPageParam: (lastPage) => lastPage.nextPage ?? false,
      }
    );
  const selectedImages = useRecoilValue(selectedImagesAtom);
  const imagesLength = selectedImages.length;

  const [, setDeleteImagesDialog] = useRecoilState(deleteImagesDialogAtom);
  const [addImagesDialog, setAddImagesDialog] = useRecoilState(addImagesDialogAtom);

  const [files, setFiles] = useState<File[] | any[]>([]);
  const [loading, setLoading] = useState(false);

  const uploadImages = async () => {
    const data = new FormData();
    const images = Array.from(files);
    images.forEach((file) => data.append('images', file.source));
    setLoading(true);
    try {
      await axios({
        method: 'POST',
        url: '/media/upload/images',
        data,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setAddImagesDialog(false);
      setFiles([]);
      await refetch();
    } catch (e: any) {
      console.log(e.response);
    } finally {
      setLoading(false);
    }
  };

  // for infinity scrolling
  const loadMoreButtonRef = useRef(null);
  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: () => fetchNextPage(),
    enabled: hasNextPage,
  });

  return (
    <Box sx={styles.adminMediaContainer}>
      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', p: 4 }}>
          <CircularProgress color="secondary" />
        </Box>
      )}
      {data?.pages && (
        <Box>
          <Grid
            container
            sx={styles.mediaImageList}
            spacing={{ xs: 2, md: 3 }}
            alignItems="center"
            justifyContent="center"
          >
            {data.pages.map((page) => {
              return page.images.map((img) => {
                return (
                  <SingleImage
                    allowMultiple={allowMultiple}
                    operation={operation}
                    key={img._id}
                    img={img}
                    refetch={refetch}
                    imageType={imageType}
                  />
                );
              });
            })}
          </Grid>
          <OrangeBtn
            sx={{ my: 5, display: 'block', mx: 'auto' }}
            disabled={!hasNextPage}
            ref={loadMoreButtonRef}
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage
              ? 'Loading more...'
              : hasNextPage
              ? 'Load More'
              : 'Nothing more to load'}
          </OrangeBtn>
        </Box>
      )}

      <Fab
        onClick={() => setAddImagesDialog(true)}
        variant="extended"
        sx={styles.addImageActionBtn}
        color="secondary"
        aria-label="add"
      >
        <AddIcon sx={{ color: 'black' }} />
        Add
      </Fab>
      {imagesLength > 0 && operation === 'delete' ? (
        <Fab
          variant="extended"
          sx={styles.deleteImageActionBtn}
          aria-label="delete"
          onClick={() => setDeleteImagesDialog(true)}
        >
          <DeleteIcon sx={{ color: 'white' }} />
          Delete ({imagesLength} selected)
        </Fab>
      ) : (
        imagesLength > 0 && (
          <Fab
            variant="extended"
            sx={styles.createImageActionBtn}
            aria-label="create"
            onClick={() => {
              if (onCompleteSelected) {
                onCompleteSelected();
              }
              // if (imageType === 'featuredImg') {
              //   setFeatureImgSrc([URL.createObjectURL(files[0])]);
              // }
              // if (imageType === 'projectImgs') {
              //   let arr: string[] = [];
              //   files.forEach((file: any) => {
              //     arr.push(URL.createObjectURL(file));
              //   });
              //   setProjectImgsSrc(arr);
              // }
            }}
          >
            <SaveIcon sx={{ color: 'black', mr: 2 }} />
            {`Select ${imagesLength} images`}
          </Fab>
        )
      )}
      <Dialog
        fullWidth
        maxWidth="md"
        onClose={() => setAddImagesDialog(false)}
        open={addImagesDialog}
        sx={{ py: 5 }}
      >
        <DialogTitle>Upload Image</DialogTitle>
        <FilePond
          files={files}
          onupdatefiles={setFiles}
          allowMultiple={true}
          maxFiles={4}
          name="files"
          labelIdle='Drag & Drop your files or <span class="filepond--label-action">Browse</span>'
        />
        <DialogActions>
          <LoadingButton
            sx={{
              backgroundColor: SECONDARY_COLOR,
              borderRadius: '50px',
              color: 'white',
              px: 5,
              my: 2,
              mr: 2,
              '&:hover': {
                backgroundColor: SECONDARY_COLOR,
              },
            }}
            loadingIndicator={<CircularProgress color={'secondary'} size={16} />}
            disabled={loading}
            loadingPosition="start"
            startIcon={<UploadFileIcon />}
            loading={loading}
            variant="contained"
            autoFocus
            onClick={uploadImages}
          >
            Upload Images
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </Box>
  );
};
