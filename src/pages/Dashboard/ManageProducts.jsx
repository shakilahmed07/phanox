import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'
import Table from '../../Components/Table/Table';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
const ManageProducts = () => {
  return (
    <Box  sx={{padding : '50px'}}>
        <Box sx={{display:"flex",alignItems : 'center', justifyContent : 'space-between',color:'white'}}>
          <Box>
            <Typography variant='h3'>All Products</Typography>
            <Typography variant='h5'>Manage your products</Typography>
          </Box>
          <Box>
            <Button variant='contained' style={{backgroundColor : '#7364db',borderRadius : '20px'}}> + Add New Product</Button>
          </Box>
        </Box>
        <Box sx={{marginTop : '10px', backgroundColor : '#1f2128  ',paddingY : '20px',paddingX : '10px',boxShadow : '5px 5px 10px 5px',border : '1px solid gray',borderRadius : '20px'}}>
          <Box sx={{display:"flex",alignItems : 'center', justifyContent : 'space-between',color : 'white'}}>
            <Box>
              Products
            </Box>
            <Box>
              <IconButton>
                <PictureAsPdfIcon/>
              </IconButton>
              <IconButton>
                <LocalPrintshopIcon/>
              </IconButton>
            </Box>
          </Box>
          <Table/>
        </Box>
    </Box>
  )
}

export default ManageProducts