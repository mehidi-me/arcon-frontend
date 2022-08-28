import { Grid, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Image from 'next/image';
import { grey } from '@mui/material/colors';
import * as yup from 'yup';
import { useFormik } from 'formik';
import LoadingButton from '@mui/lab/LoadingButton';
import axios, { AxiosResponse } from 'axios';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { User } from 'types/userType';
import { useRecoilState } from 'recoil';
import { userAtom } from 'recoil/atoms/userAtom';

const validationSchema = yup.object({
  username: yup.string().min(3, 'Enter a valid username').required('Username is required'),
  password: yup
    .string()
    .min(3, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function Login() {
  const router = useRouter();
  const [userState, setUserState] = useRecoilState(userAtom);
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      loginMutation.mutate(values);
    },
  });

  const loginMutation = useMutation<
    AxiosResponse<User, any>,
    unknown,
    typeof formik.values,
    unknown
  >(
    (values) => {
      return axios.post('/auth/login', values);
    },
    {
      onSuccess: (axiosResponse) => {
        setUserState(axiosResponse.data);
        return router.push('/admin');
      },
    }
  );

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        margin: 'auto',
      }}
    >
      <Image src="/images/logo1.png" alt="arcon-logo" width={200} height={150} objectFit="cover" />
      <Typography variant="h4" textAlign="center" color={grey[800]}>
        Login
      </Typography>
      <Typography variant="body2" textAlign="center" color="#a3a3a3" mb={3} mt={2}>
        Fill up the form below to login
      </Typography>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <Grid
          container
          rowSpacing={2}
          direction="column"
          sx={{
            width: {
              md: '350px',
              xs: '100%',
            },
          }}
        >
          <Grid item>
            <TextField
              name="username"
              color="secondary"
              label="Username"
              size="small"
              fullWidth
              value={formik.values.username}
              onChange={formik.handleChange}
              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
            />
          </Grid>
          <Grid item>
            <TextField
              name="password"
              color="secondary"
              label="Password"
              type="password"
              size="small"
              fullWidth
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </Grid>
          <Grid item>
            <LoadingButton
              loading={loginMutation.isLoading}
              type="submit"
              variant="contained"
              fullWidth
              color="secondary"
              sx={{ color: 'white' }}
            >
              Login
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
