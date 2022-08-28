import axios from 'axios';
import _ from 'lodash';
import { CreateFormValues } from './create';

/**
 * Deep diff between two object, using lodash
 * @param  {Object} object Object compared
 * @param  {Object} base   Object to compare with
 * @return {Object}        Return a new object who represent the diff
 */
export function difference(object: Object, base: Object) {
  function changes(object: Object, base: Object) {
    return _.transform(object, function (result: any, value, key) {
      if (!_.isEqual(value, base[key])) {
        result[key] =
          _.isObject(value) && _.isObject(base[key]) ? changes(value, base[key]) : value;
      }
    });
  }
  return changes(object, base);
}

export const fetchSingleProject = async (id: string) => {
  const { data } = await axios.get(`/projects/${id}`);
  return data;
};

interface updateFormValues extends Partial<CreateFormValues> {
  userId: string;
}

export const updateProject = async ({
  newProject,
  projectId,
}: {
  newProject: updateFormValues;
  projectId: string;
}) => {
  return axios.put(`/projects/${projectId}`, newProject);
};
