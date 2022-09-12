import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'

const BlogPage = ({data}:any) => {
  
  return (
    <div>
      <Layout pageTitle="My Blog Posts">
      {
        data.allMdx.nodes.map((node:any) => (
          <article key={node.id}>
            <GatsbyImage image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData} alt='asdsf' />
            <h2>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
        }
      </Layout>
    </div>
      
  )
}

export const query = graphql`
query {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        slug
        featuredImage {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
      excerpt
    }
  }
}
`



export default BlogPage