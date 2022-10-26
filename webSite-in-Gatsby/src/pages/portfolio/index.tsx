import * as React from 'react'
import Footer from '../../components/Footer'
import favicon from '../../images/favicon.ico'
import Layout from '../../components/Layout'
import {Helmet} from "react-helmet"
import { StaticImage } from 'gatsby-plugin-image'
import './index.scss'


const Portfolio = () => {
    return(
        <div>
             <Helmet>
    <html lang="fr" />
    <link rel="icon" href={favicon}/>
    <title>Guillaume David | Portfolio</title>
    </Helmet>

    <Layout pageTitle="Portfolio">

        <div className='PortfolioIndex'>
            <div className='PortfolioIndex_carroussel-left'>
        <StaticImage alt="Chevron" className='PortfolioIndex_left' src='../../images/chevron.png' />
        </div>
        <div className='PortfolioIndex_carroussel-right'>
        <StaticImage alt="Chevron" className="PortfolioIndex_right" src='../../images/chevron.png' />
        </div>

            <div className='PortfolioIndex_items'>
            <div className='item'>
                {/* mettre ces infos dans un fichier json*/}
                <h2>Netflix - Clone Netflix</h2>
                <p>Réalisation d'un clone du site web de Netflix dans le cadre d'un projet personnel</p>
                <a href='https://clone-guillaumedavid.herokuapp.com/' className='btn_link' target="_blank"><button className='btn btn_contact'>Visiter le site</button></a>
                <div>Carrousel d'image</div>

                <h3>Fiche technique</h3>

                <p>Projet réalisé avec le framework React.js et le préprocesseur Sass (SCSS). J'ai réalisé ce projet dans le cadre d'un travail personnel.
                    
                    Taches : 
                     - Développement des fonctionnalités avec React.JS
                     - Intégration responsive SASS (SCSS)
                     - Axios / React-router / Material-UI
                     - Test avec React-Testing Library et JEST
                     - CI/CD avec Heroku et Github
                </p>

                <h3>Techologies</h3>

                <p>
                - React.js
                - Javascript
                - SASS (SCSS)
                - Axios
                - React Router
                - Material-UI
                - React-Testing-Library / JEST
                - Heroku
                </p>
                

                <h3>Ressources</h3>

                <p>Visitez le projet ici : <a href='https://clone-guillaumedavid.herokuapp.com/' target="_blank">Netflix</a></p>

            </div>

            <div className='item'>
                {/* mettre ces infos dans un fichier json*/}
                <h2>01 Academie</h2>
                <p>Réalisation d'un clone du site web de Netflix dans le cadre d'un projet personnel</p>
                <a href='https://clone-guillaumedavid.herokuapp.com/' className='btn_link' target="_blank"><button className='btn btn_contact'>Visitez le projet</button></a>
                <div>Carrousel d'image</div>

                <h3>Fiche technique</h3>

                <p>Projet réalisé avec le framework React.js et le préprocesseur Sass (SCSS). J'ai réalisé ce projet dans le cadre d'un travail personnel.
                    
                    Taches : 
                     - Développement des fonctionnalités avec React.JS
                     - Intégration responsive SASS (SCSS)
                     - Axios / React-router / Material-UI
                     - Test avec React-Testing Library et JEST
                     - CI/CD avec Heroku et Github
                </p>

                <h3>Techologies</h3>

                <p>
                - React.js
                - Javascript
                - SASS (SCSS)
                - Axios
                - React Router
                - Material-UI
                - React-Testing-Library / JEST
                - Heroku
                </p>
                

                <h3>Ressources</h3>

                <p>Visitez le projet ici : <a href='https://clone-guillaumedavid.herokuapp.com/' target="_blank">Netflix</a></p>

            </div>
            </div>
        </div>

    </Layout>

    <Footer />
        </div>
    )
}

export default Portfolio