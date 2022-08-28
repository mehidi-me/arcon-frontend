import { Box } from '@mui/system';
import AdminLayout from 'components/admin/adminLayout';
import CreateProjectComp from 'components/admin/create';
import { useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { projectImgsSrcAtom } from '../../recoil/atoms/dialogsAtom';

export default function CreateProject() {
  const setProjectsImgsSrcState = useSetRecoilState(projectImgsSrcAtom);
  useEffect(() => {
    setProjectsImgsSrcState([]);
  }, []);
  return (
    <Box>
      <AdminLayout pageTitle="Create a New Project">
        <CreateProjectComp />
      </AdminLayout>
    </Box>
  );
}
