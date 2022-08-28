import { Project } from '../types/projectType';

export const paginateArray = (data: Project[] | undefined, page: number, take: number) => {
  return data?.slice((page - 1) * take, page * take);
};

export const getPaginationCount = (data: Project[] | undefined, take: number): number => {
  if (!data) {
    return 1;
  }
  return Math.round(Math.max(data.length / take, 1));
};
