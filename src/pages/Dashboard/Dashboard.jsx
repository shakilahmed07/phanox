import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import BarLinks from '../../Components/BarLinks/BarLinks';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FiHome, FiPlus, FiShoppingBag } from 'react-icons/fi';
import { TbBrandProducthunt,TbShoppingCartDiscount } from 'react-icons/tb';
import {FcManager,FcSalesPerformance,FcPositiveDynamic} from 'react-icons/fc'
import {BiCategory,BiCategoryAlt} from 'react-icons/bi'
import { Avatar } from '@mui/material';

const links = [
  {
    page : 'Products',
    icon : (<TbBrandProducthunt/>) ,
    subPages : [
      {
        name : 'Add Products',
        href : '/dashboard/addproducts',
        icon : (<FiPlus/>)
      },
      {
        name : 'Manage Product',
        href : '/dashboard/manageproducts',
        icon : (<FcManager/>)
      },
      {
        name : 'Cetagory List',
        href : '/dashboard/cetagory',
        icon : (<BiCategory/>)
      },
      {
        name : 'Sub Cetagory List',
        href : '/dashboard/subcetagory',
        icon : (<BiCategoryAlt/>)
      },
    ]
  },
  {
    page : 'Sells',
    icon : (<FiShoppingBag/>) ,
    subPages : [
      {
        name : 'Sales List',
        href : '/dashboard/addproducts',
        icon : (<FcSalesPerformance/>)
      },
      {
        name : 'POS',
        href : '/dashboard/manageproducts',
        icon : (<FcPositiveDynamic/>)
      },
      {
        name : 'New Sales',
        href : '/dashboard/cetagory',
        icon : (<TbShoppingCartDiscount/>)
      },
      
    ]
  }
]

const drawerWidth = 240;
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      backgroundColor : '#1f2128',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);

 
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer variant="permanent"  open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              px: [1],
              backgroundColor : '#1f2128'
            }}
          >
            <Box>
                <Avatar src='http://wp.alithemes.com/html/frox/demos/assets/images/avatar-layouts-5.png'/>
              </Box>
            <IconButton style={{color : '#bda683'}} onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
            <List component='nav'>
              <Box sx={{display : 'flex', flexDirection : 'column',alignItems : 'center'}}>
                {
                  links.map((link) => (
                    <BarLinks key={link.page} link={link} open={open}/>
                  ))
                }
              </Box>
            </List>
          <Divider />
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              px: [1],
              backgroundColor : '#1f2128',
              cursor : 'pointer',
              color : 'white'
            }}
          >
            <Box>
                <Link to='/'><FiHome/></Link>
            </Box>
          </Toolbar>
        </Drawer>
        <Box
          component="main"
          sx={{
            background : '#181818',
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Outlet/>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}