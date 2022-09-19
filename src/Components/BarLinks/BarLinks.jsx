import React,{useState} from 'react'
import { NavLink, Outlet } from 'react-router-dom';
import { Button, Collapse, Dropdown, DropdownButton } from 'react-bootstrap';
import {TbBrandProducthunt} from 'react-icons/tb'
import { FiArrowDownRight, FiArrowRight } from 'react-icons/fi';
import { Box, Typography } from '@mui/material';

const BarLinks = ({link,open}) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <Box sx={{mt:4}} key={link.page}>
        <Button
            onClick={() => setCollapse((prev) => !prev)}
            aria-controls="example-collapse-text"
            aria-expanded={collapse}
            style={{backgroundColor : collapse ? '#1b2850' : '#1f2128',color : collapse ? 'white' : '#8b8b93',border :'none',borderRadius : '20px'}}
            className='w-100 px-5'
        >
                 <Typography variant="h6">{link.icon} {open ? link.page : '' } {collapse ? <FiArrowRight/> : ''}</Typography>
        </Button>
        <Collapse in={collapse}>
            <Box className='w-100 px-5' id="example-collapse-text" sx={{backgroundColor : '#7364db',borderRadius : '20px'}}>
            {
                    link.subPages.map((subpage)=>(
                    <Typography key={subpage.href} variant='h6' className='py-2'>
                        <NavLink to={subpage.href} style={{textDecoration : 'none',color: 'white'}}>{subpage.icon} {open ? subpage.name : ''}</NavLink>
                    </Typography>
                ))
            }
        </Box>
        </Collapse>
    </Box>
  )
}

export default BarLinks