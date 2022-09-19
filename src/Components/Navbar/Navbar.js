  import Navbar from 'react-bootstrap/Navbar';
  import NavDropdown from 'react-bootstrap/NavDropdown';
  import { useContext, useState } from "react"
  import { Nav, Container } from "react-bootstrap"
  import NavbarStyled from "./NavbarStyled.styled"
  import LocalMallIcon from '@mui/icons-material/LocalMall'
  import { Avatar, Badge, IconButton, MenuItem, Tooltip, Typography } from "@mui/material"
  import Cart from "../Cart/Cart"
  import CartDataAPI from "../../cartDataAPI"
  import { NavLink } from "react-router-dom"
  import { FiLogIn, FiLogOut } from "react-icons/fi"
import useFirebase from '../../hooks/useFirebase';
  
  
  const pages = [
      
      {name : 'Home', url : '/'},
      {name : 'Create Design', url : '/custom'},
      {name : 'Marketplace Design', url : '/shop/designs'},
      {name : 'Marketplace Petterns', url : '/shop/petterns'},
      {name : 'Contact', url : '/contactus'},
      {name : 'About us', url : '/aboutus'},
      ]
  function CollapsibleExample() {
        const [isCart, setIsCart] = useState(false)
        const {cartData} = useContext(CartDataAPI)
        const {user,logOut} = useFirebase()
        console.log(user)
    return (
      <Navbar collapseOnSelect expand="lg" style={{background : '#eeeeee'}}>
        {isCart && (
            <>
                <Cart setIsCart={setIsCart}/>
                <div className="overlay" onClick={() => setIsCart(false)}></div>
                </>)}
        <Container fluid>
          <NavLink to="/" style={{textDecoration: 'none',fontWeight: '400', color: '#eeeeee', fontSize: '1.2rem',background: '#ba9467',padding : '20px'}}>
             <div>PHANOX</div>
          </NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
                  {pages.map((page) => (
                      <MenuItem key={page.url}>
                          <NavLink to={page.url} style={{color : '#ba9467', textDecoration : 'none'}}>
                              <Typography sx={{fontWeight : 'bold'}} textAlign="center">{page.name}</Typography>
                          </NavLink>
                      </MenuItem>
                  ))}
                  {
                    user.email === 'cutebaby7383839@gmail.com' && ( <MenuItem>
                      <NavLink to='/dashboard/addproducts' style={{color : '#ba9467', textDecoration : 'none'}}>
                          <Typography sx={{fontWeight : 'bold'}} textAlign="center">Dashboard</Typography>
                      </NavLink>
                  </MenuItem>)
                  }
            </Nav>
            <Nav>
              <div style={{display:'flex',cursor: 'pointer', background: '#ba9467',padding : '20px'}}>
                      <Tooltip title="Login">
                             {
                              user.email  ? ( 
                              <>
                              <Avatar/>
                      <Tooltip title="Logout">

                              <IconButton onClick={logOut}>
                                      <FiLogOut />
                              </IconButton> 
                          </Tooltip>
                            </>
                              ) :
                              (<IconButton>
                                <NavLink style={{color: '#eeeeee',textDecoration : 'none'}} to='/signin'>
                                    <FiLogIn />
                                </NavLink>
                        </IconButton> )
                             }
                      </Tooltip>
                      <Tooltip title="Cart">
                          <IconButton style={{color: '#eeeeee',textDecoration : 'none'}} onClick={() => setIsCart(!isCart)}>
                              <Badge badgeContent={parseInt(cartData.items.length)} color="error">
                                  <LocalMallIcon />
                              </Badge>
                          </IconButton>
                      </Tooltip>
                  </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
  
  export default CollapsibleExample;