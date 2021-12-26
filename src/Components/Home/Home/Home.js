import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
const Home = () => {
    return (
        <div id='home'>
          <Banner></Banner>
          <About></About>
          <Services></Services>
          <Blog></Blog>
          <Contact></Contact>
        </div>
    );
};

export default Home;