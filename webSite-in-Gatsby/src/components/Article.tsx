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
        if (nbr < 8){
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
         
            <h2 data-testid="title">Article</h2>
            <div className="Article_separator" data-testid="separator"></div>
            
            <div className="Article_items">
                <button className="Article_items-btn right" onClick={handleClickPrevious} data-testid="btn">&#60;</button>
                <button className="Article_items-btn left" onClick={handleClickNext} data-testid="btn">&#62;</button>

                <div className='Article_items-elt' id="carrousel">


<StaticQuery
      query={graphql`
      query {
        allMdx(sort: {fields: frontmatter___date, order: DESC}, limit: 10) {
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
        <div >
          <div className='Article_items-elt'>{data.allMdx.nodes.map((node:any) => (
              <div className="Article_items-elt-item">
            <GatsbyImage image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData} alt='asdsf' className='blog_image'/>
            
            <h2 className='item_link'>
              <Link to={`/blog/${node.frontmatter.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
           
         </div>
        ))}<div className='Article_more'><Link to={'/blog'}>Voir plus d'articles</Link></div>
        </div>
        </div>
      )}
    />

                </div>
            </div>
        </div>
    )
}