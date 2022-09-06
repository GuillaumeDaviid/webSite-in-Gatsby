import * as React from 'react'
import { Link, graphql } from 'gatsby'

const BlogPage = ({data}:any) => {

  return (
    <div>
      {
        data.allMdx.nodes.map((node:any) => (
          <article key={node.id}>
            <h2>{node.frontmatter.title}</h2>
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
      }
      id
      excerpt
    }
  }
}
`


export default BlogPage