import React from 'react'
import authAxiosInstanse from '../api/authAxiosInstance';
import { useQuery } from '@tanstack/react-query';

export default function useProducts() {
  const getProducts = async () => {
      const response = await authAxiosInstanse.get('/Products');
      return response.data;
    } 

    const query =useQuery({
         queryKey:['product','en'],
         queryFn:getProducts,
         staleTime:1000*60*5
    });  

    return query;
}










