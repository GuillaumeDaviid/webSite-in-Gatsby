import * as React from 'react'
import { graphql } from 'gatsby'
import type { HeadFC } from "gatsby"
import { GatsbyImage } from 'gatsby-plugin-image'
import { Helmet } from 'react-helmet';
import favicon from '../../images/favicon.ico'
import Layout from '../../components/Layout'
import Footer from '../../components/Footer'
import MoreArticle from '../../components/MoreArticle'
import '../styles/mdx.scss'


const BlogPost = ({ data, children }:any) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <div className="mdx">
      <Helmet>
    <html lang="fr" />
    <link rel="icon" href={favicon}/>
    <title>Guillaume David | {data.mdx.frontmatter.title}</title>
    </Helmet>
      <p>Guillaume David - {data.mdx.frontmatter.date}</p>
      <GatsbyImage image={data.mdx.frontmatter.hero_image.childImageSharp.gatsbyImageData} alt={data.mdx.frontmatter.hero_image_alt} className="mdx_img" />
      <div className='mdx_content'>
      {children}
      </div>
      <div className='mdx_more'>
        Voir plus d'articles :
      </div>
      </div>
      <MoreArticle />
      
      <Footer />
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
        gatsbyImageData(width: 600)
      }
    }
    }
  }
}
`

export const Head: HeadFC = () => <title>Guillaume David - </title>


export default BlogPost