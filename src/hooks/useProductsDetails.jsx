import React from 'react'
import authAxiosInstanse from '../api/authAxiosInstance';
import { useQuery } from '@tanstack/react-query';

export default function useProductsDetails(id) {
  const getProducts = async () => {
      const response = await authAxiosInstanse.get(`/Products/${id}`);
      return response.data;
    } 

    const query =useQuery({
         queryKey:['product','en',id],
         queryFn:getProducts,
         staleTime:1000*60*5
    });  

    return query;
}










