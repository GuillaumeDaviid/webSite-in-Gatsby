import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
// @ts-ignore
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({ data }:any) => {
  return (
    <div>
      <Layout />
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default BlogPost