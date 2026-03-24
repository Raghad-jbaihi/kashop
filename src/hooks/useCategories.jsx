import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import axiosInstanse from '../api/axiosinstance';

export default function useCategories() {

 const getCategoris = async () => {
      const response = await axiosInstanse.get('/Categories');
      return response.data;
    } 

    const query =useQuery({
         queryKey:['categories','en'],
         queryFn:getCategoris,
         staleTime:1000*60*5
    });  


  return query;
}
