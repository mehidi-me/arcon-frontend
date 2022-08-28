import axios from "axios";
import { Category } from "types/categoryType";

export const getCategories = async () => {
    const { data } = await axios.get('/categories');
    return data as Category[];
  };
  
  export const getSingleCategory = async (id: string) => {
    const { data } = await axios.get('/category/' + id);
    return data as Category;
  }; 