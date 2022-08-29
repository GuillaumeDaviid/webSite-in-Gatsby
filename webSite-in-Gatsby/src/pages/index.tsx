import * as React from "react"
import Header from '../components/Header'
import About from '../components/About'
import Portfolio from "../components/Portfolio"
import Article from '../components/Article'
import type { HeadFC } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <About />
      <Portfolio />
      <Article />
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
