import React, { useEffect, useState} from 'react'
import { Box, Card, CardContent, CircularProgress, Grid, Typography } from '@mui/material';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import useCategories from '../../hooks/useCategories';
import Loader from '../../UI/loader/Loader';
import { Link } from 'react-router-dom';
import Category from '../../UI/Category/Category';




export default function Categories() {

    
    const {data,isError,isLoading,error} =useCategories();
  
    if(isLoading) return <Loader/>
    if(isError) return <Box color={'red'}>{error.message}</Box>
    
     console.log(data);

return (
<>
    <Box className="categpries" py={3}>
      <Typography component={'h2'} variant={'h4'} mb={2}>Categories</Typography>
      <Link to='/categories'>Show more</Link>
         <Grid container spacing={2}>
          {data.response.data.map(category=>
          <Grid item size={{xs:12,sm:6,md:4,lg:3}}>
          <Category category={category}/>
          </Grid>
           )}
          </Grid>
          </Box>
    </>
  );
}

