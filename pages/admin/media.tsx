import { Box } from '@mui/system';
import AdminLayout from 'components/admin/adminLayout';
import { MediaLibraryContent } from 'components/admin/media';
import React from 'react';

export default function AdminMediaLibrary() {
  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      <AdminLayout pageTitle="Media">
        <MediaLibraryContent operation="delete" />
      </AdminLayout>
    </Box>
  );
}
