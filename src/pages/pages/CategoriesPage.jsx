import React from 'react'
import Loader from '../../UI/loader/Loader';
import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import useCategories from '../../hooks/useCategories';
import Category from '../../UI/Category/Category';

export default function CategoriesPage() {

    const {data,isError,isLoading,error} =useCategories(10);
      
        if(isLoading) return <Loader/>
        if(isError) return <Box color={'red'}>{error.message}</Box>
        
         console.log(data);
  return (
 
     <Box className="categpries" py={3}>
      <Typography component={'h2'} variant={'h4'} mb={2}>Categories</Typography>
         <Grid container spacing={2}>
          {data.response.data.map(category=>
          <Grid item size={{xs:12,sm:6,md:4,lg:3}}>
          <Category category={category}/>
          </Grid>
           )}
          </Grid>
          </Box>
  )
}
