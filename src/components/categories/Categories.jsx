import React, { useEffect, useState } from 'react'
import { Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import useCategories from '../../hooks/useCategories';

export default function Categories() {

    const {data,isError,isLoading,error} =useCategories();
    if(isLoading) return <CircularProgress/>
    if(isError) return <Box color={'red'}>{error.message}</Box>

     console.log(data);

return (

    
    <Box>
      {data.response.map((category) => (
        <Box key={category.id}>
          {category.name ?? `Category ${category.id}`}
        </Box>
      ))}
    </Box>
  );
}