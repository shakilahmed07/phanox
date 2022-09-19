import React from 'react'
import './style.css';
import { FiFacebook,FiInstagram,FiTwitter } from 'react-icons/fi';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
const AboutUs = () => {
  return (
    <div>
    <Navbar/>
        <section id="about-section" className="pt-5 pb-5">
            <div className="container wrapabout">
                <div className="red"></div>
                <div className="row">
                    <div className="col-lg-6 align-items-center justify-content-left d-flex mb-5 mb-lg-0">
                        <div className="blockabout">
                            <div className="blockabout-inner text-center text-sm-start">
                                <div className="title-big pb-3 mb-3">
                                    <h3>ABOUT US</h3>
                                </div>
                                <p className="description-p text-muted pe-0 pe-lg-0">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quas optio reiciendis deleniti voluptatem facere sequi, quia, est sed dicta aliquid quidem facilis culpa iure perferendis? Dolor ad quia deserunt.
                                </p>
                                <p className="description-p text-muted pe-0 pe-lg-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quas optio reiciendis deleniti voluptatem facere.</p>
                                <div className="sosmed-horizontal pt-3 pb-3">
                                    <a href="#"><i className="fa fa-facebook"><FiFacebook/></i></a>
                                    <a href="#"><i className="fa fa-instagram"><FiInstagram/></i></a>
                                    <a href="#"><i className="fa fa-pinterest"><FiTwitter/></i></a>
                                </div>
                                <a href="https://fromsmash.com/-9aC08B_3z-dt?fbclid=IwAR1ej8lGzZhpSSRoKmHKKUNCSrJr2qtRk0qdkN1-aePtb0-48LCUpy4-bQg" className="btn rey-btn mt-3">Read About Us</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 mt-5 mt-lg-3">
                        <figure className="potoaboutwrap">
                            <img className='img-fluid' src="https://i.ibb.co/Pmdw55D/34.jpg" alt="potoabout" />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default AboutUs