import axios from 'axios';
import { NextRouter } from 'next/router';
import { useMutation } from 'react-query';
import { useRecoilValue } from 'recoil';
import { userAtom } from 'recoil/atoms/userAtom';
import { CreateFormValues } from '.';

export interface ImageResData {
  _id: string;
  fileName: string;
  originalName: string;
  size: number;
  mimeType: string;
  fileType: string;
  createAt: string;
  updateAt: string;
}

export const createProjectHooks = (router: NextRouter) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const User = useRecoilValue(userAtom);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const newProjectMutation = useMutation(
    async (newProject: CreateFormValues) => {
      const {
        title,
        featureImg,
        challenges,
        clients,
        description,
        ideas,
        category,
        location,
        name,
        projectImgs,
        workingYear,
      } = newProject;
      return axios.post('/projects/create', {
        title,
        name,
        description,
        location,
        workingYear,
        clients,
        category,
        ideas,
        challenges,
        featureImg,
        images: projectImgs,
        userId: User!._id,
      });
    },
    {
      onSuccess: () => {
        router.push('/admin');
      },
    }
  );

  return { newProjectMutation };
};
