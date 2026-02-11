import { Box, Button, Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import axios from 'axios';

import React from 'react'
import { useForm } from 'react-hook-form';

export default function Register(){

    const{register,handleSubmit}= useForm({});
    const registerForm=async(values)=>{
        try {
            const response= await axios.post(`https://knowledgeshop.runasp.net/api/auth/Account/Register`,values);
            console.log("response:",response)
        } catch (error) {
            console.log("catch error!",error)
        }
}


    return (
       <Box component={'section'} className='register-form' py={2}>
          <Typography component={'h3'} variant='h3'>Register</Typography>
          
          <Box component={'form'} 
          onSubmit={handleSubmit(registerForm)}
          py={4} display={'flex'} flexDirection={'column'} gap={2}>

            <TextField  {...register('email')}  label="Email" variant="standard" fullWidth/>
            <TextField  {...register('password')}  label="Password" variant="standard" fullWidth />
            <TextField  {...register('userName')}  label="User Name" variant="standard" fullWidth/>
            <TextField  {...register('fullName')}  label="Full Name" variant="standard" fullWidth/>
            <TextField  {...register('phoneNumber')} label="Phone Number" variant="standard" fullWidth/>
            <Button variant="outlined" type='submit'>REGISTER</Button>
          </Box>
      </Box>
    )
}