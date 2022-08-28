import { Box, Grid, Typography } from '@mui/material';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { QueryObserverResult, RefetchOptions, RefetchQueryFilters } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  deleteImagesDialogAtom,
  featuredImgSrcAtom,
  getProjectImgsSrcLengthSelector,
  projectImgsSrcAtom,
} from '../../../recoil/atoms/dialogsAtom';
import { selectedImagesAtom } from '../../../recoil/atoms/mediaAtom';
import { ImageFile } from '../../../types/imageType';
import { DANGER_COLOR } from '../../../utils/constants';
import { deleteAnElementFromTheArray, isElementExistsInArray } from '../../../utils/functions';
import CustomizedDialogs from '../../common/Dialog';

interface SingleImageProps {
  img: ImageFile;
  refetch: <TPageData>(
    options?: RefetchOptions & RefetchQueryFilters<TPageData>
  ) => Promise<QueryObserverResult<any, any>>;
  operation: 'create' | 'delete' | 'update';
  allowMultiple: boolean;
  imageType?: 'featuredImg' | 'projectImgs';
}

export const SingleImage: React.FC<SingleImageProps> = ({
  img,
  refetch,
  operation,
  allowMultiple,
  imageType,
}) => {
  // Controlling dialog
  const [isDialogOpen, setIsDialogOpen] = useRecoilState(deleteImagesDialogAtom);
  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const [selectedImages, setSelectedImages] = useRecoilState(selectedImagesAtom);

  const [featuredImgSrc, setFeaturedImgSrc] = useRecoilState(featuredImgSrcAtom);
  const [projectImgsSrc, setProjectImgsSrc] = useRecoilState(projectImgsSrcAtom);

  const imgSrcLen = useRecoilValue(getProjectImgsSrcLengthSelector);

  useEffect(() => {
    setProjectImgsSrc([]);
  }, []);

  const handleChange = (keyOrId: string, url: string) => {
    if (imageType === 'featuredImg') {
      setFeaturedImgSrc([url]);
    }

    if (imageType === 'projectImgs') {
      if (isElementExistsInArray(projectImgsSrc, url)) {
        setProjectImgsSrc(deleteAnElementFromTheArray(projectImgsSrc, url));
      } else {
        let arr: string[] = projectImgsSrc;
        if (projectImgsSrc.length >= 3) {
          arr = projectImgsSrc.slice(1);
        }
        setProjectImgsSrc([...arr, url]);
      }
    }

    // if allowMultiple is false,
    // override the existing array
    if (!allowMultiple) {
      setSelectedImages([...[], keyOrId]);
      return;
    }

    if (isElementExistsInArray(selectedImages, keyOrId)) {
      setSelectedImages(deleteAnElementFromTheArray(selectedImages, keyOrId));
    } else {
      let arr: string[] = selectedImages;
      if (selectedImages.length >= 3) {
        arr = selectedImages.slice(1);
      }
      setSelectedImages([...arr, keyOrId]);
    }
  };

  const [isLoading, setIsLoading] = useState(false);

  const deleteSelectedImages = async () => {
    let url = '/media/images';
    selectedImages.forEach((img, index) => {
      // returns something like ?image=some_image_key&image=another_image_key
      if (index === 0) {
        url += '?';
      } else {
        url += '&';
      }
      url += 'imageKeys=' + img;
    });
    setIsLoading(true);
    try {
      await axios.delete(url);
      await refetch();
      setSelectedImages([]);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  const { _id: id, fileName, url, key } = img;

  // checking whether the image is selected or not to apply backdrop
  let checked = isElementExistsInArray(selectedImages, id);
  if (operation === 'delete') {
    checked = isElementExistsInArray(selectedImages, key);
  }

  // getting the index to show on top of the image
  const selectedImageNo =
    operation === 'delete' ? selectedImages.indexOf(key) + 1 : selectedImages.indexOf(id) + 1;

  return (
    <Grid item lg={2} md={3} sm={4} xs={6} key={id}>
      <Box
        height={150}
        width="100%"
        position={'relative'}
        onClick={() => {
          if (operation === 'delete') {
            handleChange(key, url);
          } else {
            handleChange(id, url);
          }
        }}
      >
        <Image src={url} layout={'fill'} alt={fileName} />
        <Box
          sx={{
            display: checked ? 'flex' : 'none',
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%',
            height: 150,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
          }}
        >
          <Typography sx={{ fontSize: 30, fontWeight: 600, color: 'white' }}>
            {selectedImageNo}
          </Typography>
        </Box>
        <CustomizedDialogs
          open={isDialogOpen}
          onClose={handleDialogClose}
          modalTitle="Are you sure you want to delete this?"
          modalDesc="Please confirm before you delete this image. You won't be able to retrieve this image once you deleted it."
          closeButtonTitle="Yes, Go Ahead"
          onYes={async () => deleteSelectedImages()}
          closeButton
          backgroundColor={DANGER_COLOR}
          isLoading={isLoading}
        />
      </Box>
    </Grid>
  );
};
