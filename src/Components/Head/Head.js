import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import { Link } from "react-router-dom";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "./HeadStyled.styled";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <BannerContainer style={{background : 'white'}}>
      <BannerImage src="https://i.ibb.co/t24T1Mg/27.jpg" />
      <BannerContent>
        <Typography variant="h4" style={{color : '#181818'}}>Huge Collection</Typography>
        <BannerTitle variant="h2" style={{color : '#ba9467'}}>
          Digital Febric Design
        </BannerTitle>

        <BannerDescription variant="subtitle">
          Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore et dolore magna
        </BannerDescription>

        <BannerShopButton style={{background : '#ba9467'}}><Link style={{textDecoration : 'none',color : '#e6e7e9'}} to='/shop/designs'>Shop Now</Link></BannerShopButton>
      </BannerContent>
    </BannerContainer>

    <BannerContainer style={{background : '#e6e7e9'}}>
      <BannerContent>
        <BannerTitle style={{color : '#181818'}} variant="h2">
          Create Custom Design
        </BannerTitle>

        <BannerDescription style={{color : '#181818'}} variant="subtitle">
          Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore et dolore magna
        </BannerDescription>

        <BannerShopButton style={{background : '#ba9467'}}><Link style={{textDecoration : 'none',color : 'white'}} to='/custom'>Create Now</Link></BannerShopButton>
      </BannerContent>
      <BannerImage src="https://i.ibb.co/c83RyMP/31.jpg" />
    </BannerContainer>
    
    </>
  );
}