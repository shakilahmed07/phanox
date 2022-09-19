import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import {v4} from 'uuid'
import { Button, Container } from 'react-bootstrap';
import { TextField } from '@mui/material';
import useFirebase from '../../hooks/useFirebase';

export default function SignIn() {
  const {user} = useFirebase()
  const username = user?.email;
  const [room, setRoom] = useState('');
  return (
    <>
    <Navbar/>
     <Container className="d-flex flex-row justify-content-center">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
       
        <div>
          <TextField placeholder="Room" className="mt-5 joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!username || !room) ? e.preventDefault() : null} to={`/chat?name=${username}&room=${room}`}>
          <Button className={'mt-5 w-100 button mt-20'} type="submit">Join</Button>
        </Link>
      </div>
    </Container>
    <Footer/>
    </>
   
  );
}