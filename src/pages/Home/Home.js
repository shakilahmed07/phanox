import Navbar from "../../Components/Navbar/Navbar"
import Head from '../../Components/Head/Head'
import Products from '../../Components/Products/Products'
import PetterProducts from '../../Components/Products/PetterProducts'
import Footer from "../../Components/Footer/Footer"
import { useEffect, useState } from "react"
import { Alert, Button } from "@mui/material"
import ChatBox from '../../Components/ChatBox/ChatBox'
import { io } from "socket.io-client"
import Join from "../Chat/Join"
import { Link } from "react-router-dom"
import {FaFacebookMessenger} from 'react-icons/fa'
import useFirebase from "../../hooks/useFirebase"

const Home = () => {
  const {user} = useFirebase()
  return (
    <>
    <Navbar/>
    <Head />
        {
          user?.email && (
            <div style={{position: 'fixed',bottom: "0",right : "20px",zIndex :'1'}}>
              <Link to='/join'><h1><FaFacebookMessenger/></h1></Link>
            </div>
          )
        }
        <Products />
        <PetterProducts />
    <Footer />
    </>
  )
}

export default Home
