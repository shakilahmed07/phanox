
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Navbar from '../../Components/Navbar/Navbar'

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerShopButton, BannerTitle } from '../../Components/Head/HeadStyled.styled';
import CustomForm from './CustomForm'
import Footer from '../../Components/Footer/Footer';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


const CustomDesign = () => {
  const [iscreate,setIsCreate] = useState(false);
  
  return (
    <div style={{backgroundColor : 'white'}}>
      <Navbar/>
       {
        iscreate 
        ? (
            <CustomForm />
          
        ) 
        
        : (
          <BannerContainer style={{background : '#9e7646'}}>
          <BannerImage src="https://i.ibb.co/c2s9W9v/Wall-Panel-Designs-18.jpg" />
          <BannerContent>
            <BannerTitle variant="h2" style={{color : 'white'}}>
              Customize Design as you want 
            </BannerTitle>
            <BannerShopButton onClick={() => setIsCreate(true)} style={{background : '#181818'}}>Create Now</BannerShopButton>
          </BannerContent>
        </BannerContainer>

        )
       }
        <Footer/>      
    </div>
  )
}

export default CustomDesign