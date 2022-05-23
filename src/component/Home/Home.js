import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Blog from '../Blog/Blog'
import BSolutions from '../BSolutions/BSolutions'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Service from '../Service/Service'
import Skills from '../Skills/Skills'
import Team from '../Team/Team'
import Video from '../Video/Video'
import WhatWeDo from '../WhatWeDo/WhatWeDo'

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Service />
      <Video />
      <BSolutions />
      <WhatWeDo />
      <Team />
      <Skills />
      <Blog />
      <Footer />
    </>
  )
}

export default Home