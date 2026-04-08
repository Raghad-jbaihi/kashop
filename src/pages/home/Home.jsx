import axios from 'axios';
import { Typography } from '@mui/material';
import Categories from '../../components/categories/Categories';
import Products from '../../components/products/Products';



export default function Home(){
    return (
        <div>
         <Categories/>
          <Products/>

        </div>
    )
}