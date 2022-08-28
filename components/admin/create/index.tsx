import { LoadingButton } from '@mui/lab';
import {
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import axios from 'axios';
import { useFormik } from 'formik';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import 'suneditor/dist/css/suneditor.min.css';
import * as yup from 'yup';
import { featuredImgSrcAtom, projectImgsSrcAtom } from '../../../recoil/atoms/dialogsAtom';
import { selectedImagesAtom } from '../../../recoil/atoms/mediaAtom';
import { Category } from '../../../types/categoryType';
import { ImagePreview } from '../../admin/media/ImagePreview';
import { UploadImageDialog } from '../../common/Dialog/UploadImageDialog';
import { createProjectHooks } from './createProjectHooks';
import * as styles from './style';

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
});

export const sunEditorCommonProps = {
  setDefaultStyle: 'font-size: 1.2rem;',
  setOptions: {
    buttonList: [
      ['undo', 'redo'],
      ['paragraphStyle', 'blockquote'],
      ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
      ['removeFormat'],
      ['link'],
    ],
  },
};

export interface CreateFormValues {
  title: string;
  name: string;
  description: string;
  clients: string;
  location: string;
  workingYear: string;
  ideas: string;
  challenges: string;
  category: any;
  featureImg: string[] | null;
  projectImgs: string[] | null;
}

const validationSchema = yup.object().shape({
  title: yup.string().min(2).required('Title is required'),
  name: yup.string().min(2).required('Name is required'),
  description: yup.string().min(2).required('Description is required'),
  category: yup.string().required('Category is required'),
  clients: yup.string().min(2).required('Clients is required'),
  location: yup.string().min(2).required('Location is required'),
  workingYear: yup.string().min(4).required('Working year is required'),
  ideas: yup.string().min(2).required('Ideas is required'),
  challenges: yup.string().min(2).required('Challenges is required'),
  featureImg: yup.mixed().required('Feature image is required'),
  projectImgs: yup.mixed().required('Project images are required. Maximum 3'),
});

export default function CreateProjectComp() {
  const { data: categories } = useQuery('categories', async () => {
    const { data } = await axios.get('/categories');
    return data as Category[];
  });
  const router = useRouter();
  const { newProjectMutation } = createProjectHooks(router);
  const { errors, values, touched, setFieldValue, handleSubmit, handleChange } =
    useFormik<CreateFormValues>({
      initialValues: {
        title: '',
        name: '',
        description: '',
        clients: '',
        location: '',
        workingYear: '',
        ideas: '',
        category: '',
        challenges: '',
        featureImg: [],
        projectImgs: [],
      },
      validationSchema,
      onSubmit: (values) => {
        newProjectMutation.mutate(values);
      },
    });

  const handleTextEditorChange = (field: keyof CreateFormValues, value: string) => {
    setFieldValue(field, value, true);
  };

  const [featureImgDialog, setFeatureImgDialog] = useState(false);
  const [projectImgsDialog, setProjectImgsDialog] = useState(false);
  const [selectedImages, setSelectedImages] = useRecoilState(selectedImagesAtom);

  // this state is for showing previews
  const featuredImgSrc = useRecoilValue(featuredImgSrcAtom);
  const projectImgsSrc = useRecoilValue(projectImgsSrcAtom);

  return (
    <Container maxWidth="md" sx={{ my: 8 }}>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={styles.createFormStyle}
        encType="multipart/form-data"
      >
        <Stack spacing={2}>
          <TextField
            name="title"
            label="Project Title"
            variant="outlined"
            fullWidth
            value={values.title}
            onChange={handleChange}
            error={touched.title && Boolean(errors.title)}
            helperText={touched.title && errors.title}
          />
          <TextField
            name="name"
            label="Project Name"
            variant="outlined"
            fullWidth
            value={values.name}
            onChange={handleChange}
            error={touched.name && Boolean(errors.name)}
            helperText={touched.name && errors.name}
          />
          <TextField
            name="description"
            label="Project Description"
            variant="outlined"
            fullWidth
            multiline
            minRows={3}
            value={values.description}
            onChange={handleChange}
            error={touched.description && Boolean(errors.description)}
            helperText={touched.description && errors.description}
          />
          <TextField
            name="clients"
            label="Clients"
            variant="outlined"
            fullWidth
            value={values.clients}
            onChange={handleChange}
            error={touched.clients && Boolean(errors.clients)}
            helperText={touched.clients && errors.clients}
          />
          <TextField
            name="location"
            label="Location"
            variant="outlined"
            fullWidth
            value={values.location}
            onChange={handleChange}
            error={touched.location && Boolean(errors.location)}
            helperText={touched.location && errors.location}
          />
          <TextField
            name="workingYear"
            label={`Working Year (i.e., ${new Date().getFullYear()})`}
            variant="outlined"
            fullWidth
            value={values.workingYear}
            onChange={handleChange}
            error={touched.workingYear && Boolean(errors.workingYear)}
            helperText={touched.workingYear && errors.workingYear}
          />
          <Select
            labelId="category"
            variant={'outlined'}
            id="category"
            name="category"
            displayEmpty
            value={values.category}
            label="Category"
            onChange={handleChange}
            error={touched.category && Boolean(errors.category)}
          >
            <MenuItem value={''}>Choose Category</MenuItem>
            {categories?.map((category) => {
              const id = category._id;
              return (
                <MenuItem key={id} value={id}>
                  {category.title}
                </MenuItem>
              );
            })}
          </Select>
          {touched.category && Boolean(errors.category) && (
            <Typography color={'red'} sx={{ fontSize: '12px' }} variant={'h6'}>
              {errors.category}
            </Typography>
          )}

          <label htmlFor="feature_img">Feature Image</label>
          <Button onClick={() => setFeatureImgDialog(true)}>Upload Feature Image</Button>
          <UploadImageDialog
            operation="create"
            open={featureImgDialog}
            handleClose={() => {
              setFeatureImgDialog(false);
              setSelectedImages([]);
            }}
            title="Upload Featured Image"
            onCompleteSelected={() => {
              setFieldValue('featureImg', selectedImages);
              setSelectedImages([]);
              setFeatureImgDialog(false);
            }}
            allowMultiple={false}
            imageType="featuredImg"
          />
          <ImagePreview imgsSrc={featuredImgSrc} />

          {touched.featureImg && (
            <Typography variant="body2" color="error">
              {errors.featureImg}
            </Typography>
          )}

          <label htmlFor="project_imgs">Project Images(Max: 3)</label>
          <Button onClick={() => setProjectImgsDialog(true)}>Upload Project Images</Button>
          <UploadImageDialog
            operation="create"
            open={projectImgsDialog}
            handleClose={() => {
              setProjectImgsDialog(false);
              setSelectedImages([]);
            }}
            title="Upload Project Images"
            onCompleteSelected={() => {
              setFieldValue('projectImgs', selectedImages);
              setSelectedImages([]);
              setProjectImgsDialog(false);
            }}
            imageType="projectImgs"
          />
          <ImagePreview imgsSrc={projectImgsSrc} />

          {touched.projectImgs && (
            <Typography variant="body2" color="error">
              {errors.projectImgs}
            </Typography>
          )}
          <Box>
            <Typography variant="h5">Ideas:</Typography>
            <SunEditor
              name="ideas"
              {...sunEditorCommonProps}
              onChange={(content) => handleTextEditorChange('ideas', content)}
            />
          </Box>
          {touched.ideas && (
            <Typography variant="body2" color="error">
              {errors.ideas}
            </Typography>
          )}
          <Box>
            <Typography variant="h5">Challenges:</Typography>
            <SunEditor
              name="challenges"
              onChange={(content) => handleTextEditorChange('challenges', content)}
              {...sunEditorCommonProps}
            />
          </Box>
          {touched.challenges && (
            <Typography variant="body2" color="error">
              {errors.challenges}
            </Typography>
          )}
          <LoadingButton
            type="submit"
            color="secondary"
            variant="contained"
            sx={{ color: 'white' }}
            loading={newProjectMutation.isLoading}
          >
            Create
          </LoadingButton>
        </Stack>
      </Box>
    </Container>
  );
}
