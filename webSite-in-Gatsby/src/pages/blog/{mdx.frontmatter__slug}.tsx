import * as React from 'react'
import { graphql } from 'gatsby'
import type { HeadFC } from "gatsby"
import Layout from '../../components/Layout'
// @ts-ignore
import { MDXRenderer } from 'gatsby-plugin-mdx'


const BlogPost = ({ data, children }:any) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}
export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head: HeadFC = () => <title>Home Page</title>


export default BlogPost