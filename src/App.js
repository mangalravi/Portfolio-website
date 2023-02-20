import React from 'react';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import Nav from './component/nav/nav';
import Testimonials from './component/testimonials/testimonials';
import Portfolio from './component/portfolio/portfolio';
import Experience from './component/experience/Experience';
import About from './component/about/About';
import  Contant  from './component/contact/Contact';
import Service from './component/services/service';

const App = () => {
  return (
    <>
    <Header />
     <Nav />
     <About />
     <Experience />
        <Service />
     <Portfolio />
     <Testimonials />
  <Contant />
  <Footer />
    
</>
  )
}

export default App