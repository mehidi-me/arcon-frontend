import { Grid } from '@mui/material';
import Image from 'next/image';

interface ImagePreviewProps {
  imgsSrc: string[];
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ imgsSrc }) => {
  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      {imgsSrc.length > 0 &&
        imgsSrc.map((img) => {
          return (
            <Grid sx={{ height: '100px', width: '100%' }} key={img} item lg={3} position="relative">
              <Image layout="fill" objectFit="contain" src={img} alt="Projects Image" />
            </Grid>
          );
        })}
    </Grid>
  );
};
