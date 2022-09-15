import * as React from 'react'
import {useState} from 'react'
import './styles/Article.scss'
import { Link, graphql, StaticQuery } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'


export default function Article({data}:any) {
  const [p, setp] = useState(0);
  const [nbr, setNbr] = useState(1);

  console.log(data)

  function handleClickNext() {
    let carrousel = document.getElementById('carrousel');
    if (carrousel){
        if (nbr < 7){
            setNbr(nbr + 1);
            const newp = p - 1
            setp(newp);
            carrousel.style.transform = "translate("+newp*25+"vw)";
            carrousel.style.transition = "all 0.5s ease";
        }
    }
}

function handleClickPrevious() {
    let carrousel = document.getElementById('carrousel');
    if (carrousel){
        if (nbr > 1){
            setNbr(nbr - 1);
            const newp = p + 1;
            setp(newp);
        carrousel.style.transform = "translate("+newp*25+"vw)";
        carrousel.style.transition = "all 0.5s ease";
        }
        
    }
}


    return(
        <div className="Article">
         
            <h2>Article</h2>
            <div className="Article_separator"></div>
            
            <div className="Article_items">
                <button className="Article_items-btn right" onClick={handleClickPrevious}>&#60;</button>
                <button className="Article_items-btn left" onClick={handleClickNext}>&#62;</button>

                <div className='Article_items-elt' id="carrousel">

                {/*
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
           */ }

<StaticQuery
      query={graphql`
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
      `}
      render={data => (
        <div>
          <div>{data.allMdx.nodes.map((node:any) => (
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
        ))}</div>
        </div>
      )}
    />

                </div>
                
            </div>
            
        </div>
    )
}