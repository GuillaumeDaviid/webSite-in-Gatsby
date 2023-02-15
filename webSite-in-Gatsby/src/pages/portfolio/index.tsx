import React, {useState} from 'react'
import CarrouselPortfolio from '../../components/CarrousselPortfolio'
import Footer from '../../components/Footer'
import favicon from '../../images/favicon.ico'
import Layout from '../../components/Layout'
import {Helmet} from "react-helmet"
import { StaticImage } from 'gatsby-plugin-image'
import './index.scss'


const Portfolio = () => {

    const portfolioList = [
        {
            name: "Netflix",
            title: 'Netflix - Clone Netflix',
            description: "Réalisation d'un clone du site web de Netflix dans le cadre d'un projet personnel",
            id: '1',
            technique: `Projet réalisé avec le framework React.js et le préprocesseur Sass (SCSS). J'ai réalisé ce projet dans le cadre d'un travail personnel.`,
            task: `
             - Développement des fonctionnalités avec React.JS
             - Intégration responsive SASS (SCSS)
             - Axios / React-router / Material-UI
             - Test avec React-Testing Library et JEST
             - CI/CD avec Heroku et Github`,
            technologies: ["React.js", "Javascript", "SASS (SCSS)", "Axios", "React Router", "Material-UI", "React-Testing-Library / JEST", "Heroku"],
            link: "https://clone-two-orcin.vercel.app/",
            images : ['netflix'],
        },
    
        {
            name: "01 Academie",
            title: '01 Academie',
            description: "Création d'un site web de quizz qui permet de tester ses connaissances en programmation.",
            id: '2',
            technique: `Plusieurs version du projet, une avec du Javascript Vanilla et une autre avec React.JS. Backend réalisé en PHP.`,
            task:`
             - Intégration Responsive
             - Optimisation SEO
             - Développement de l'application avec React.JS 
             - Développement API REST avec PHP
             - Base de donnée SQL / MySQL
             - Tests unitaire JEST / React Testing Library`,
            technologies: ["React.js", "Javascript", "SASS (SCSS)", "Axios", "React Router", "PHP", "SQL / MySQL", "React-Testing-Library / JEST", "API REST", "OVH"],
            link: "https://01academie.netlify.app/",
            images : ["01academie", "01courses", "01home"],
        },
    
        {
            name: "Jeu de Dame",
            title: 'Jeu de Dame',
            description: "Création d'un jeu de Dame dans le cadre d'un projet personnel.",
            id: '3',
            technique: `Plusieurs version du projet, une avec du Javascript Vanilla et une autre avec React.JS. Backend réalisé en PHP.`,
            task:`
             - Intégration Responsive
             - Optimisation SEO
             - Développement du jeu en Javascript Vanilla
             - Déploiement via Github
             - Test unitaire avec Jasmine`,
            technologies: ["Javascript", "HTML/CSS", "Github", "Jasmine"],
            link: "https://guillaumedaviid.github.io/Checkers-Game/",
            images : ["checkers"],
        },
    
        {
            name: "Commercia",
            title: 'Commercia - site e-commerce',
            description: "Création d'un e-commerce en React.js.",
            id: '4',
            technique: `Développement d'un site e-commerce en React avec Redux comme state manager.`,
            task:`
            - Développement de l'application en React.JS
            - Utilisation de Redux pour la gestion du State
            - Déploiement / Hébergement via Vercel (CI/CD)
            - Test Unitaire React-testing-library`,
            technologies: ["React.js", "Javascript", "SASS (SCSS)", "Redux", "React Router", "React-Testing-Library / JEST", "CI/CD", "Vercel"],
            link: "https://commercia.vercel.app/",
            images : ["commercia", "commercia-panier"],
        },
    
        {
            name: "Leagora",
            title: 'Leagora - Site de Visio conférence',
            description: "Je suis intervenu sur le projet en tant que développeur front-end.",
            id: '5',
            technique: `Entreprise qui commercialise une solution de visio-conférence, J'ai eu pour tache 
            d'ajouter différentes fonctionnalités à la visio en Javascript Vanilla basé sur la bibliothèque open source galene.`,
            task:`
            - Bouton de Kick et mute d'un utilisateur pour l'admin
            - Partage de fichier à tous les utilisateurs
            - Possibilité de changer ses périphériques
            - développement d'un chat privée`,
            technologies: ["Javascript", "HTML/CSS", "Galene", "GitLab", "Docker", "CI/CD"],
            link: "https://visio.leagora.fr/",
            images : ["leagora_black","leagora", "leagora-salle"],
        },

        {
            name: "e-survey",
            title: 'e-survey',
            description: "Je suis intervenu sur le projet en tant que développeur React.js.",
            id: '6',
            technique: `e-survey est une plateforme qui permet de créer des questionnaires 
            personnalisés dans un but marketing.`,
            task:`
            - Intégration d'une barre de recherche pour les enquêtes
            - Refonte de la page monitoring
            - Ajout de personnalisation de la charte graphique des questionnaires
            - Ajout des traductions en anglais`,
            technologies: ["Javascript", "HTML/CSS", "ReactJS", "GitLab", "MobX", "Formik"],
            link: "https://www.e-survey.io/",
            images : ["logo-esurvey-v2"],
        },
    ]

    const [p, setp] = useState(0);
    const [nbr, setNbr] = useState(1);


    function handleClickNext() {
        if(typeof window !== 'undefined') {
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
    }
    
    function handleClickPrevious() {
        if(typeof window !== 'undefined') {
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