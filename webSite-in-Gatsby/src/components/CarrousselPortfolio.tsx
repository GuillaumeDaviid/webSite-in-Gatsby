import React, {useState} from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import './styles/CarrousselPortfolio.scss'


type Props = {
    images : string[],
    id: string,
}

export default function CarrouselPortfolio({images, id}:Props) {
    const [p, setp] = useState(0);
    const [nbr, setNbr] = useState(1);

    const { allImageSharp } = useStaticQuery(graphql`
     {
      allImageSharp {
        nodes {
          gatsbyImageData(
            width: 500
            height: 300
            )
          parent {
            ... on File {
              name
            }
          }
        }
      }
    }
  `)

  const image = images.map((data:any, index:number) => {
    const image = allImageSharp?.nodes.find((node:any) => node.parent.name === data)?.gatsbyImageData;
    return <GatsbyImage key={index} image={image} alt="Portfolio"  className='CarrousselPortfolio_elt-item'/>
  })


    function handleClickNext() {
        let carrousel = document.getElementById(`carroussel-portfolio${id}`);
        if (carrousel){
            if (nbr < images.length){
                setNbr(nbr + 1);
                const newp = p - 1
                setp(newp);
                carrousel.style.transform = "translate("+newp*550+"px)";
                carrousel.style.transition = "all 0.5s ease";
            }
        }
    }
    
    function handleClickPrevious() {
        let carrousel = document.getElementById(`carroussel-portfolio${id}`);
        if (carrousel){
            if (nbr > 1){
                setNbr(nbr - 1);
                const newp = p + 1;
                setp(newp);
            carrousel.style.transform = "translate("+newp*550+"px)";
            carrousel.style.transition = "all 0.5s ease";
            }
            
        }
    }

    

    return(
        <div className='CarrousselPortfolio'>
            <div className='CarrousselPortfolio-left' onClick={handleClickPrevious}>
        <StaticImage alt="Chevron" className='CarrousselPortfolio_left' src='../../images/chevron.png' />
        </div>
        <div className='CarrousselPortfolio-right' onClick={handleClickNext}>
        <StaticImage alt="Chevron" className="CarrousselPortfolio_right" src='../../images/chevron.png' />
        </div>

        <div className='CarrousselPortfolio_elt' id={`carroussel-portfolio${id}`}>
            {image}
        <div>
                
                
            </div>
        </div>

        </div>
    )
}