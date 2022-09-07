import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/Layout'

const BlogPage = ({data}:any) => {

  return (
    <div>
      <Layout />
      {
        data.allMdx.nodes.map((node:any) => (
          <article key={node.id}>
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
      }
      id
      excerpt
    }
  }
}
`


export default BlogPage