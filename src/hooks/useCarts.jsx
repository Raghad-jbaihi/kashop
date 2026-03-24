import React from 'react'
import authAxiosInstanse from '../api/authAxiosInstance';
import { useQuery } from '@tanstack/react-query';

export default function useCarts() {
  const getItems = async () => {
      const response = await authAxiosInstanse.get('/Carts');
      return response.data;
    } 

    const query =useQuery({
         queryKey:['carts','en'],
         queryFn:getItems,
         staleTime:1000*60*5
    });  

    return query;
}










