import React from 'react'
import { useParams } from 'react-router-dom'
import useProductsDetails from '../../hooks/useProductsDetails';
import Loader from '../../UI/loader/Loader';
import { Box } from '@mui/material';



export default function ProductsDetails() {
      const {id}=useParams();
      const {data ,error,isLoading,isError}=useProductsDetails(id);

      if(isLoading) return <Loader/>
        if(isError) return <Box color={'red'}>{error.message}</Box>
        
    console.log(data);

  return (
    <div>

    </div>
  )
}
