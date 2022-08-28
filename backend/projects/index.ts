import axios from 'axios';
import { Project } from 'types/projectType';

export const getProjects = async () => {
  const { data } = await axios.get('/projects');
  return data as Project[];
};

export const getSingleProject = async (id: string) => {
  const { data } = await axios.get(`/projects/${id}`);
  return data as Project & { relatedProjects: Project[] };
};

export const getProjectsByCategoryId = async (categoryId: string) => {
  const { data } = await axios.get(`/projects/category/${categoryId}`);
  return data as Project[];
};

export const getPaginateProjects = async ({ pageParam = 1 }) => {
  const { data }: { data: { projects: Project[]; nextPage: number | boolean } } = await axios.get(
    '/projects?page=' + pageParam
  );
  return data;
};
