import { Box, Button, CircularProgress, Typography, TextField } from '@mui/material'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { loginSchema} from '../../../validation/LogInSchema'

export default function Login(){

    const [serverErrors, setServerErrors] = useState([]);

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        resolver: yupResolver(loginSchema),
        mode: 'onBlur'
    });

    const loginForm = async (values) => {
        try {
            const response = await axios.post(
                `https://knowledgeshop.runasp.net/api/auth/Account/Login`,
                values
            );
            console.log("response:", response)
        } catch (error) {
            setServerErrors(error.response?.data?.errors || ["Server error"]);
        }
    }

    return (
        <Box component={'section'} className='login-form' py={2}>
            <Typography component={'h3'} variant='h3'>LogIn</Typography>

            {serverErrors?.length > 0 && (
                <Box mt={2} color={'red'}>
                    {serverErrors.map((err, index) => <Typography key={index}>{err}</Typography>)}
                </Box>
            )}

            <Box
                component={'form'}
                onSubmit={handleSubmit(loginForm)}
                py={4}
                display={'flex'}
                flexDirection={'column'}
                gap={2}
            >
                <TextField
                    {...register('email')}
                    label="Email"
                    variant="standard"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />

                <TextField
                    {...register('password')}
                    label="Password"
                    type="password"
                    variant="standard"
                    fullWidth
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />

                <Button variant="outlined" type='submit' disabled={isSubmitting}>
                    {isSubmitting ? <CircularProgress size={24} /> : 'LogIn'}
                </Button>
            </Box>
        </Box>
    )
}

