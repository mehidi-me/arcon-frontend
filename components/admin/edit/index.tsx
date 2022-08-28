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
import _ from 'lodash';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { useRecoilState, useRecoilValue } from 'recoil';
import { userAtom } from 'recoil/atoms/userAtom';
import 'suneditor/dist/css/suneditor.min.css';
import { Project } from 'types/projectType';
import * as yup from 'yup';
import { featuredImgSrcAtom, projectImgsSrcAtom } from '../../../recoil/atoms/dialogsAtom';
import { selectedImagesAtom } from '../../../recoil/atoms/mediaAtom';
import { Category } from '../../../types/categoryType';
import { UploadImageDialog } from '../../common/Dialog/UploadImageDialog';
import { CreateFormValues, sunEditorCommonProps } from '../create';
import { ImagePreview } from '../media/ImagePreview';
import { difference, updateProject } from '../useProjects';
import * as styles from './style';

const SunEditor = dynamic(() => import('suneditor-react'), {
  ssr: false,
});
const validationSchema = yup.object().shape({
  title: yup.string().min(2).required('Title is required'),
  name: yup.string().min(2).required('Name is required'),
  description: yup.string().min(2).required('Description is required'),
  clients: yup.string().min(2).required('Clients is required'),
  location: yup.string().min(2).required('Location is required'),
  workingYear: yup.string().min(4).required('Working year is required'),
  ideas: yup.string().min(2).required('Ideas is required'),
  challenges: yup.string().min(2).required('Challenges is required'),
});
export default function EditProjectComp({
  projectId,
  projectData,
}: {
  projectId: string;
  projectData: Project;
}) {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [isFormUpdated, setIsFormUpdated] = React.useState(false);
  const User = useRecoilValue(userAtom);
  const updateProjectMutation = useMutation(updateProject);
  const {
    title,
    name,
    description,
    clients,
    category,
    featureImg,
    images,
    location,
    workingYear,
    ideas,
    challenges,
  } = projectData;
  const { data: categories } = useQuery('categories', async () => {
    const { data } = await axios.get('/categories');
    return data as Category[];
  });
  let initialValues: CreateFormValues = {
    title,
    name,
    description,
    clients,
    location,
    workingYear,
    ideas,
    category: category._id ?? '',
    challenges,
    featureImg: [],
    projectImgs: [],
  };
  const { errors, values, touched, setFieldValue, handleSubmit, handleChange } =
    useFormik<CreateFormValues>({
      initialValues,
      validationSchema,
      onSubmit: (values) => {
        const oldValues = _.omit(projectData, ['_id', '__v', 'createdAt', 'updatedAt']);
        const newValues = _.omitBy(values, _.isNull);
        const changedValues = difference(newValues, oldValues);
        updateProjectMutation.mutate(
          {
            newProject: { ...changedValues, userId: User!._id, projectId },
            projectId,
          },
          {
            onSuccess: () => {
              setIsFormUpdated(true);
              router.push('/admin');
              queryClient.refetchQueries(['project', projectId]);
            },
          }
        );
      },
    });

  const [imageChanged, setImageChanged] = useState(false);

  // disable submit button if form values are not updated
  useEffect(() => {
    const newValues = _.omitBy(values, _.isNull);
    const changedValues = difference(newValues, initialValues);

    const omitImages = _.omit(changedValues, ['featureImg', 'projectImgs']);

    if (_.isEmpty(omitImages) && !imageChanged) {
      setIsFormUpdated(false);
    } else {
      setIsFormUpdated(true);
    }
  }, [values]);

  const handleTextEditorChange = (field: keyof CreateFormValues, value: string) => {
    setFieldValue(field, value, true);
  };

  const [featureImgDialog, setFeatureImgDialog] = useState(false);
  const [projectImgsDialog, setProjectImgsDialog] = useState(false);
  const [selectedImages, setSelectedImages] = useRecoilState(selectedImagesAtom);

  // this state is for showing previews
  const [featuredImgSrc, setFeaturedImgSrc] = useRecoilState(featuredImgSrcAtom);
  const [projectImgsSrc, setProjectImgsSrc] = useRecoilState(projectImgsSrcAtom);

  useEffect(() => {
    let projectImgsSources: string[] = [];
    let projectImgsId: string[] = [];

    projectData?.images.map((img) => {
      projectImgsSources.push(img.url);
      projectImgsId.push(img._id);
    });
    setProjectImgsSrc(projectImgsSources);
    setFieldValue('projectImgs', projectImgsId);

    if (projectData) {
      setFeaturedImgSrc([projectData.featureImg.url]);
      setFieldValue('featureImg', [projectData.featureImg._id]);
    }

    return () => {
      setProjectImgsSrc([]);
    };
  }, [projectData]);

  return (
    <Container maxWidth="md" sx={{ my: 8, px: 2 }}>
      <Box
        onSubmit={handleSubmit}
        component="form"
        sx={styles.editFormStyle}
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
          {categories && (
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
          )}
          {touched.category && Boolean(errors.category) && (
            <Typography color={'red'} sx={{ fontSize: '12px' }} variant={'h6'}>
              {errors.category}
            </Typography>
          )}

          <label htmlFor="feature_img">Feature Image</label>
          <Button onClick={() => setFeatureImgDialog(true)}>Upload Feature Image</Button>
          <UploadImageDialog
            operation="update"
            open={featureImgDialog}
            handleClose={() => {
              setFeatureImgDialog(false);
              setSelectedImages([]);
            }}
            title="Upload Featured Image"
            onCompleteSelected={() => {
              setFieldValue('featureImg', selectedImages);
              setSelectedImages([]);
              setImageChanged(true);
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
            operation="update"
            open={projectImgsDialog}
            handleClose={() => {
              setProjectImgsDialog(false);
              setSelectedImages([]);
            }}
            title="Upload Project Images"
            onCompleteSelected={() => {
              setFieldValue('projectImgs', selectedImages);
              setSelectedImages([]);
              setImageChanged(true);
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
              defaultValue={ideas}
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
              defaultValue={challenges}
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
            disabled={!isFormUpdated}
            loading={updateProjectMutation.isLoading}
          >
            Update
          </LoadingButton>
        </Stack>
      </Box>
    </Container>
  );
}
