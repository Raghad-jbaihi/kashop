import React from 'react'
import useProducts from '../../hooks/useProducts';
import { Box, Card, CardContent, CardMedia, CircularProgress, Grid, Typography } from '@mui/material';
import Loader from '../../UI/loader/Loader';
import { Link } from 'react-router-dom';


export default function Products() {
    const {data,isError,isLoading,error} =useProducts();
     if(isLoading) return <Loader/>
        if(isError) return <Box color={'red'}>{error.message}</Box>
        
    console.log(data);
  return (
   <Box className="Products">
    <Typography component={'h2'} variant='h4' mb={2} >Products</Typography>
    <Grid container spacing={4}> 
      {data.response.data.map(product=>
      <Grid item size={{xs:12,sm:6,md:4,lg:3}}>
        <Link to={`/product/${product.id}`}>
          <Card sx={{py:3,textAlign:'center'}}>
            <CardMedia component={'img'} image={product.image}></CardMedia>
            <CardContent>
              <Typography component={'h2'} >{product.name}</Typography>
            <Typography component={'span'} color='red' variant={'body1'} m={2}>{product.price}$</Typography>
            </CardContent>
          </Card>
          </Link>
       </Grid>

      )}
      </Grid>
    </Box>    
  )
}
