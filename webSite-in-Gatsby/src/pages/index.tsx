import * as React from "react"
import Header from '../components/Header'
import About from '../components/About'
import Portfolio from "../components/Portfolio"
import Article from '../components/Article'
import Skills from '../components/Skills'
import type { HeadFC } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <Article />
      <Skills />
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
