import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Container, Grid, TextField, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { OrangeBtn } from '../../common/Button';
import CustomizedDialogs from '../../common/Dialog';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  name: yup.string().required('Name is required'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(phoneRegExp, 'Phone number is not valid')
    .min(11, 'too short')
    .max(11, 'too long'),
  subject: yup.string().required('subject is required'),
  address: yup.string().required('address is required'),
  zip: yup.string().required('Zip Code is required'),
  message: yup.string().required('Message is required'),
  checkbox: yup.string().required('Check is required'),
});

export default function Form() {
  // Controlling dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleDialogClose = () => {
    setIsDialogOpen(false);
    resetForm();
  };

  const { handleChange, handleSubmit, values, touched, errors, resetForm } = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      address: '',
      zip: '',
      message: '',
      checkbox: false,
    },
    validationSchema: validationSchema,
    onSubmit: (_values) => {
      setIsDialogOpen(true);
    },
  });
  return (
    <Container sx={{ my: 5 }}>
      <form onSubmit={handleSubmit}>
        <Grid
          container
          sx={{
            '& .MuiOutlinedInput-root': {
              color: '#fff',
              '& fieldset': {
                borderColor: '#292929',
              },
              '&:hover fieldset': {
                borderColor: '#292929',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#fa8e1b',
              },
            },
          }}
          spacing={2}
        >
          <Grid item>
            <Typography
              sx={{ fontWeight: 700, color: '#ffffff', fontSize: { xs: 26, sm: 40 } }}
              variant="h4"
            >
              Send Your Message To Us
            </Typography>
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              id="name"
              name="name"
              type="text"
              placeholder="Your Name*"
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              id="email"
              type="email"
              name="email"
              placeholder="Your Email*"
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              id="phone"
              name="phone"
              placeholder="Your Phone*"
              value={values.phone}
              onChange={handleChange}
              error={touched.phone && Boolean(errors.phone)}
              helperText={touched.phone && errors.phone}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              id="subject"
              name="subject"
              type="text"
              placeholder="Your Subject*"
              value={values.subject}
              onChange={handleChange}
              error={touched.subject && Boolean(errors.subject)}
              helperText={touched.subject && errors.subject}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              id="address"
              name="address"
              type="text"
              placeholder="Address*"
              value={values.address}
              onChange={handleChange}
              error={touched.address && Boolean(errors.address)}
              helperText={touched.address && errors.address}
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <TextField
              fullWidth
              id="zip"
              name="zip"
              placeholder="Zip Code*"
              value={values.zip}
              onChange={handleChange}
              error={touched.zip && Boolean(errors.zip)}
              helperText={touched.zip && errors.zip}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              id="message"
              name="message"
              type="text"
              placeholder="Message*"
              aria-label="empty textarea"
              minRows={6}
              multiline
              fullWidth
              value={values.message}
              onChange={handleChange}
              error={touched.message && Boolean(errors.message)}
              helperText={touched.message && errors.message}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <FormGroup>
              <FormControlLabel
                sx={{
                  '& .MuiTypography-root': {
                    color: '#a3a09d',
                    fontSize: { xs: 12, sm: 18 },
                  },
                  '& .MuiSvgIcon-root': {
                    fill: '#a3a09d',
                  },
                }}
                control={<Checkbox size="small" color="secondary" />}
                label="It would be great to hear from you! If you got any questions."
              />
            </FormGroup>
          </Grid>
          <Grid item md={12} xs={12}>
            <OrangeBtn fullWidth type="submit">
              Send Message &nbsp;
              <ArrowForwardIcon />
            </OrangeBtn>
            <CustomizedDialogs
              open={isDialogOpen}
              onClose={handleDialogClose}
              modalTitle="Thanks for contacting us"
              modalDesc="Thank you for contacting Arcon Inoterior. We received your message. We will reply your message within 24 hours."
              closeButtonTitle="Ok, I understand"
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
