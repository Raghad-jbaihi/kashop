import { Box, Button, CircularProgress, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from 'axios';

import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Password } from '@mui/icons-material';
import { registerSchema } from '../../../validation/RegisterSchema';

export default function Register(){

    const [serverErrors,setServerErrors]=useState([]);


const{register,handleSubmit,formState:{errors, isSubmitting}}= useForm({
        resolver:yupResolver(registerSchema),mode:'onBlur'
    });
    const registerForm=async(values)=>{
        try {
            const response= await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`,values);
            console.log("response:",response)
        } catch (error) {
            setServerErrors(error.response.data.errors)
        }
}


    return (
       <Box component={'section'} className='register-form' py={2}>
          <Typography component={'h3'} variant='h3'>Register</Typography>

          {serverErrors?.length > 0 && (
            <Box mt={2} color={'red'} >
                  {serverErrors.map((err)=><Typography>{err}</Typography>)}
                  </Box>
          )}
          
          <Box component={'form'} 
          onSubmit={handleSubmit(registerForm)}
          py={4} display={'flex'} flexDirection={'column'} gap={2}>

            <TextField  {...register('email')}  label="Email" variant="standard" fullWidth
            error={errors.email}
            helperText={errors.email?.message}/>

            <TextField  {...register('password')}  label="Password" variant="standard" fullWidth 
            error={errors.password}
            helperText={errors.password?.message}/>

            <TextField  {...register('userName' ,{required:true})}  label="User Name" variant="standard" fullWidth
            error={errors.userName}
            helperText={errors.userName?.message}/>

            <TextField  {...register('fullName')}  label="Full Name" variant="standard" fullWidth
            error={errors.fullName}
            helperText={errors.fullName?.message}/>

            <TextField  {...register('phoneNumber')} label="Phone Number" variant="standard" fullWidth
            error={errors.phoneNumber}
            helperText={errors.phoneNumber?.message}/>

            <Button variant="outlined" type='submit' disabled={isSubmitting}>{isSubmitting?<CircularProgress /> :'Register'}</Button>
          </Box>
      </Box>
    )
}