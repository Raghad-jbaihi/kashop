import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/footer'

export default function MainLayout() {
  return (
   
        <>
         <Navbar></Navbar>
         <Outlet></Outlet>
         <Footer></Footer>
        </>
   
  )
}
