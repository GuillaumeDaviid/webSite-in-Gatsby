import * as React from "react"
import Header from '../components/Header'
import About from '../components/About'
import Portfolio from "../components/Portfolio"
import Article from '../components/Article'
import Skills from '../components/Skills'
import Why from '../components/Why'
import Form from '../components/Form'
import Footer from '../components/Footer'
import favicon from '../images/favicon.ico'
import  {Helmet} from "react-helmet"
import type { HeadFC } from "gatsby"
import '../components/styles/global.scss'

const IndexPage = () => {
  return (
    <main>
    <div>
    
    <Helmet>
    <html lang="fr" />
    <link rel="icon" href={favicon}/>
    </Helmet>

      <Header />
      <About />
      <Portfolio />
      <Article />
      <Skills />
      <Why />
      <Form />
      <Footer />
    
    </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Guillaume DAVID | Développeur React Freelance</title>
