import React, { useContext } from 'react'
import useCarts from '../../hooks/useCarts'
import { UserContext } from '../../context/UserContext';


export default function Cart() {
   
  const {data,isError,isLoading}=useCarts();
  const userName =useContext(UserContext);
  console.log(data);
 

  return (
    <div>
        Cart -{userName}
        </div>
  )
}
