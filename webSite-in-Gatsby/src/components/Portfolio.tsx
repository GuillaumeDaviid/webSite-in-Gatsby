import React, { useState } from 'react'
import './styles/Portfolio.scss'
import { StaticImage } from 'gatsby-plugin-image'
import PortfolioItems from './PortfolioItems'

export default function Portfolio() {
    const [selected, setSelected] = useState('all');

    function handleClick(category:string) {
        setSelected(category)
    }

    return(
        <section id="portfolio">
        <div className="Portfolio">
       
            <h2 className="Protfolio_title" data-testid="title">MON PORTFOLIO</h2>

            <div className="Portfolio_separator" data-testid="separator"></div>
            

            <ul className="Portfolio_btn">
                <li className={`${selected === "all" ? `selected` : `notSelected`}`} onClick={() => handleClick("all")} data-testid="all">ALL</li>
                <li className={`${selected === "front" ? `selected` : `notSelected`}`} onClick={() => handleClick("front")} data-testid="front">FRONT END</li>
                <li className={`${selected === "full" ? `selected` : `notSelected`}`} onClick={() => handleClick("full")} data-testid="full">FULL STACK</li>
                <li className={`${selected === "mobile" ? `selected` : `notSelected`}`} onClick={() => handleClick("mobile")} data-testid="mobile">MOBILE</li>
            </ul>
            <div className="Portfolio_items">

                <PortfolioItems selected={selected} image={<StaticImage alt="Netflix" src='../images/netflix.png' />} link='https://clone-guillaumedavid.herokuapp.com/' title='Netflix Clone' full={false}/>

                <PortfolioItems selected={selected} image={<StaticImage alt="01 Academie" src='../images/01academie.png' />} link='https://01academie.netlify.app/' title='01 ACADEMIE' full/>

                <PortfolioItems selected={selected} image={<StaticImage alt="01 Academie" src='../images/01courses.png' />} link='https://01academie.netlify.app/' title='01 ACADEMIE' full/>

                <PortfolioItems selected={selected} image={<StaticImage alt="01 Academie" src='../images/01home.png' />} link='https://01academie.netlify.app/' title='01 ACADEMIE' full/>

                <PortfolioItems selected={selected} image={<StaticImage alt="e-commerce" src='../images/commercia.png' />} link='https://commercia.vercel.app/' title='Commercia' full={false}/>

                <PortfolioItems selected={selected} image={<StaticImage alt="leagora" src='../images/leagora_black.png' />} link='https://visio.leagora.fr/' title='Leagora' full={false}/>

                <PortfolioItems selected={selected} image={<StaticImage alt="e-survey" src='../images/logo-esurvey-v2.png' />} link='https://www.e-survey.io/' title='E-survey' full={false}/>

              
            </div>

            <a href='/portfolio' className='btn_link'><button className='btn btn_contact'>En voir plus</button></a>
        </div>
        </section>
    )
}