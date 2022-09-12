import * as React from 'react'
import { Link, graphql } from 'gatsby'
import '../styles/index.scss'
import { GatsbyImage } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'

const BlogPage = ({data}:any) => {
  
  return (
    <div>
      <Layout pageTitle="Mes Articles">
        <div className='blog'>
      {
        data.allMdx.nodes.map((node:any) => (
          <article key={node.id} className="blog_article">
            <GatsbyImage image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData} alt='asdsf' className='blog_image'/>
            <p>{node.frontmatter.date}</p>
            <h2 className="blog_title">
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
            <p className='blog_excerpt'>{node.excerpt}</p>
          </article>
        ))
        }
        </div>
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
            gatsbyImageData(width: 250)
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