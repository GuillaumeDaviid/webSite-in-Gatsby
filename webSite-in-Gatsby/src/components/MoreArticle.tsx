import * as React from 'react'
import './styles/MoreArticle.scss'
import { Link, graphql, StaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function MoreArticle () {
    return(
        <div className='MoreArticle' data-testid="article">
            <StaticQuery
      query={graphql`
      query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 4) {
          nodes {
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
              slug
              featuredImage {
                childImageSharp {
                  gatsbyImageData(height: 100)
                }
              }
            }
            id
            excerpt
          }
        }
      }
      `}
      render={data => (
        <div>
          <div className='MoreArticle_items-elt'>{data.allMdx.nodes.map((node:any, index:any) => (
              <div className="MoreArticle_items-elt-item" key={index}>
            <GatsbyImage image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData} alt={node.frontmatter.slug} className='blog_image'/>
            
            <h2 className='item_link' data-testid="items">
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
           
         </div>
        ))}
        </div>
        </div>
      )}
    />
        </div>
    )
}