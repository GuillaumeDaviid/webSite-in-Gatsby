import * as React from "react"
import Header from '../components/Header'
import About from '../components/About'
import Portfolio from "../components/Portfolio"
import Article from '../components/Article'
import Skills from '../components/Skills'
import Why from '../components/Why'
import Form from '../components/Form'
import Footer from '../components/Footer'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import type { HeadFC } from "gatsby"
import '../components/styles/global.scss'

const IndexPage = () => {
  return (
    <div>
    
      <Header />
      <About />
      <Portfolio />
      <Article />
      <Skills />
      <Why />
      <Form />
      <Footer />
    
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
