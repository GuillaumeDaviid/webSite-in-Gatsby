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

                <PortfolioItems selected={selected} image={<StaticImage alt="Smartphone responsive" src='../images/netflix.png' />} link='https://github.com/GuillaumeDaviid/Netflix-Clone' title='Netflix Clone' full={false}/>

                <PortfolioItems selected={selected} image={<StaticImage alt="Smartphone responsive" src='../images/checkers.png' />} link='https://guillaumedaviid.github.io/Checkers-Game/' title='Jeu de Dame' full={false}/>

                <PortfolioItems selected={selected} image={<StaticImage alt="Smartphone responsive" src='../images/01academie.png' />} link='https://github.com/GuillaumeDaviid/01-Academie-Version-React' title='01 ACADEMIE' full/>

                <PortfolioItems selected={selected} image={<StaticImage alt="Smartphone responsive" src='../images/01courses.png' />} link='https://github.com/GuillaumeDaviid/01-Academie-Version-React' title='01 ACADEMIE' full/>

                <PortfolioItems selected={selected} image={<StaticImage alt="Smartphone responsive" src='../images/01home.png' />} link='https://github.com/GuillaumeDaviid/01-Academie-Version-React' title='01 ACADEMIE' full/>

              
            </div>
        </div>
        </section>
    )
}