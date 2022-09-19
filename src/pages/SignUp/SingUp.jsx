import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [loginData,setLoginData] = React.useState({});
  const {registerUser} = useFirebase();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLoginOnSubmit = (e) => {
    if(loginData.password !== loginData.password2){
        
        return;
    }
    registerUser(loginData.email,loginData.password,location,navigate)
    e.preventDefault()
  };
  const handleOnChnage = (e) => {
      const field = e.target.name;
      const value = e.target.value;
      const newLoginData = {...loginData};
      newLoginData[field] = value;
      setLoginData(newLoginData);
    };
    
  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#bda683' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleLoginOnSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={12}>
              <TextField 
                      margin="normal"
                      required
                      fullWidth
                      id="filled-basic"
                      label="Your Email" 
                      name='email'
                      type='email'
                      onChange={handleOnChnage}
                      variant="filled" /><br/>
              </Grid>
              <Grid item xs={12}>
              <TextField 
                      margin="normal"
                      required
                      fullWidth
                      id="filled-basic" 
                      label="Your Password" 
                      name='password'
                      onChange={handleOnChnage}
                      type='password'
                      variant="filled" /><br/>
              </Grid>
              <Grid item xs={12}>
              <TextField 
                      margin="normal"
                      required
                      fullWidth
                      id="filled-basic"
                      label="Retype Password" 
                      name='password2'
                      onChange={handleOnChnage}
                      type='password2'
                      variant="filled" /><br/>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2,backgroundColor: '#bda683' }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <NavLink to="/signin" variant="body2">
                  Already have an account? Sign in
                </NavLink>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}