import React from 'react';
import { Link } from 'react-router-dom';


import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from '../components/Services';
import FeaturedRooms from "../components/FeaturedRooms";
import Styled from "../components/FeaturedRooms";



export default function Home() {
    return(
    <>
        <Hero>
            <Banner title="Luxrious Room" subtitle=" Delux rooms starting from 299$">
                <Link to="/rooms" className="btn-primary">Our rooms</Link>
            </Banner>
        </Hero>
        <Services></Services>
        <FeaturedRooms></FeaturedRooms>
    </>
)}
