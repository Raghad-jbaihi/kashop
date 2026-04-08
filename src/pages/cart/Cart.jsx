import React from 'react'
import useCarts from '../../hooks/useCarts'
import { useCounterStore } from '../../store/useCounterStore';
import Categories from '../../components/categories/Categories';



export default function Cart() {
   
  const {data,isError,isLoading}=useCarts();

  console.log(data);

  
  return (
    <div>
      {console.log('cart')}
        <Categories/>
        </div>
  )
}
