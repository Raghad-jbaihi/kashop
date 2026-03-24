import React from 'react'
import useCarts from '../../hooks/useCarts'



export default function Cart() {
   
  const {data,isError,isLoading}=useCarts();

  console.log(data);
 

  return (
    <div>
        Cart -{userName}
        </div>
  )
}
