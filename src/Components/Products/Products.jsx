import { Col, Container, Spinner } from 'react-bootstrap'
import ProductStyled from './ProductsStyled.styled'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom';
import { FiStar } from 'react-icons/fi';
import {motion} from 'framer-motion'
import { useRef,useState,useEffect } from 'react';
import Card from '../Card/Card';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../features/admin/adminSlice';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Products = () => {
  const {data} = useSelector(state => state.products.data)
  const dispatch = useDispatch()
  console.log(data)
  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])
    
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      }
  return (
    <>
    <ProductStyled>
    <Container fluid className="py-5 d-flex flex-column" style={{backgroundColor: 'white'}}>
            <div className="text-center" style={{color: '#324d67',display :'flex',justifyContent:'space-between'}}>
                <h2 className="fw-bold">Best Pettern Designs</h2>
                {
                    window.location.pathname === '/shop/products' ? "" : (
                        <Button variant='outlined' style={{border:'none',backgroundColor : '#bda683'}}><Link to='/shop/petterns' style={{color:'black',textDecoration : 'none'}}>See all</Link></Button>
                    )
                }
            </div>
            {!data?.length > 0 ? <div className="pt-4 pb-4 mt-5 d-flex justify-content-center align-items-center"><Spinner animation="grow" variant="danger" /></div> : (
               <Container>
                  <Slider {...settings}>
                  {
                      data?.map((product) => (
                          <Card product={product}/> 
                      ))
                  }
                </Slider>
               </Container>
               )}
        </Container>
    </ProductStyled>
    </>
  )
}

export default Products