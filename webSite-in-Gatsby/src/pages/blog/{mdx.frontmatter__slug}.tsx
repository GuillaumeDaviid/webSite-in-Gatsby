import * as React from 'react'
import { graphql } from 'gatsby'
import type { HeadFC } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'
// @ts-ignore
import { MDXRenderer } from 'gatsby-plugin-mdx'


const BlogPost = ({ data, children }:any) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>Guillaume David - {data.mdx.frontmatter.date}</p>
      <GatsbyImage image={data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData} alt={data.mdx.frontmatter.hero_image_alt} />
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
      hero_image_alt
      hero_image {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    }
  }
}
`

export const Head: HeadFC = () => <title>Home Page</title>


export default BlogPost