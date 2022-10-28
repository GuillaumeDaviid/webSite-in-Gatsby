import React, {useState} from 'react'
import Footer from '../../components/Footer'
import favicon from '../../images/favicon.ico'
import Layout from '../../components/Layout'
import CarrouselPortfolio from '../../components/CarrousselPortfolio'
import { portfolioList } from './data'
import {Helmet} from "react-helmet"
import { StaticImage } from 'gatsby-plugin-image'
import './index.scss'


const Portfolio = () => {
    const [p, setp] = useState(0);
    const [nbr, setNbr] = useState(1);


    function handleClickNext() {
        let carrousel = document.getElementById('carrousel');
        if (carrousel){
            if (nbr < portfolioList.length){
                setNbr(nbr + 1);
                const newp = p - 1
                setp(newp);
                carrousel.style.transform = "translate("+newp*100+"vw)";
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
            carrousel.style.transform = "translate("+newp*100+"vw)";
            carrousel.style.transition = "all 0.5s ease";
            }
            
        }
    }

    const items = portfolioList.map((item:any) =>
        <div className='item' key={item.id}>

                <h2 className='PortfolioIndex_title'>{item.title}</h2>
                <p className='PortfolioIndex_description'>{item.description}</p>
                <a href={item.link} className='btn_link' target="_blank"><button className='btn btn_contact'>Visiter le projet</button></a>
                <div> 
                    <CarrouselPortfolio images={item.images} id={item.id}/>
                </div>

                <h3>Fiche technique</h3>

                <div className='PortfolioIndex_technique'>
                    {item.technique}

                    <h4>Taches :</h4>
                    <p>
                        {item.task}
                    </p>
                </div>

                <h3>Technologies</h3>

                <ul className='PortfolioIndex_technologies'>
                {item.technologies.map((dt:string, index:any) => {
              return (
                  <li key={index} className='PortfolioIndex_technologies-elt'>{dt}</li>
              );
            })}
            </ul>
                

                <h3>Ressources</h3>

                <p className='PortfolioIndex_ressources'>Visitez le projet ici : <a href={item.link} target="_blank">{item.name}</a></p>

            </div>
    )


    return(
        <div>
             <Helmet>
    <html lang="fr" />
    <link rel="icon" href={favicon}/>
    <title>Guillaume David | Portfolio</title>
    </Helmet>

    <Layout pageTitle="Portfolio">

        <div className='PortfolioIndex'>
            <div className='PortfolioIndex_carroussel-left' onClick={handleClickPrevious}>
        <StaticImage alt="Chevron" className='PortfolioIndex_left' src='../../images/chevron.png' />
        </div>
        <div className='PortfolioIndex_carroussel-right' onClick={handleClickNext}>
        <StaticImage alt="Chevron" className="PortfolioIndex_right" src='../../images/chevron.png' />
        </div>
        <div>
            <div className='PortfolioIndex_items'>
                
                <div className='PortfolioIndex_items-elt' id="carrousel">
                {items}
            </div>
            </div>
            </div>
        </div>

    </Layout>

    <Footer />
        </div>
    )
}





export default Portfolio