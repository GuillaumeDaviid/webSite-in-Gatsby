import * as React from "react"
import Header from '../components/Header'
import type { HeadFC } from "gatsby"

const IndexPage = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
