import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { useQuery } from 'react-query';
import { useRecoilState } from 'recoil';
import { userAtom } from 'recoil/atoms/userAtom';
import { User } from 'types/userType';
import AdminNavbar from './navbar';
import { Box, CircularProgress } from '@mui/material';

export default function AdminLayout({
  children,
  pageTitle,
}: {
  children: React.ReactNode;
  pageTitle: string;
}) {
  const [user, setUser] = useRecoilState(userAtom);
  const router = useRouter();

  const {} = useQuery(
    'userProfile',
    async () => {
      const { data } = await axios.get('/auth/profile');
      return data as User;
    },
    {
      onSuccess: (data) => {
        setUser(data);
      },
      onError: () => {
        return router.push('/admin/login');
      },
    }
  );

  if (!user) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress color={'secondary'} />
      </Box>
    );
  }

  return (
    <>
      <AdminNavbar appBarTitle={pageTitle} />
      <main>{children}</main>
    </>
  );
}
