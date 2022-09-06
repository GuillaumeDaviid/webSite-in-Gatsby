import * as React from 'react'
import { graphql } from 'gatsby'
// @ts-ignore
import { MDXRenderer } from 'gatsby-plugin-mdx'

const BlogPost = ({ data }:any) => {
  return (
    <div>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </div>
  )
}


export default BlogPost