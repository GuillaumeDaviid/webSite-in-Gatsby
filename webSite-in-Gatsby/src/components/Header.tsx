import React, { useState } from 'react'
import './styles/Header.scss'

export default function Header() {
    const [visible, setVisible] = useState(false);

    function handleClick() {
        setVisible(!visible)
    }


    return(
        <section id="home">
        <div className="Header">

        <nav className={`Header_nav ${visible ? `nav_visible` : `nav_notVisible`}`} data-testid="nav">
                <ul>
                <li data-testid="li"><a href="#home" onClick={handleClick}><span>Accueil</span></a></li>
                <li data-testid="li"><a href="#portfolio" onClick={handleClick}><span>Portfolio</span></a></li>
                <li data-testid="li"><a href="#contact" onClick={handleClick}><span>Contact</span></a></li>
                <li data-testid="li"><a href="/blog" onClick={handleClick}><span>Blog</span></a></li>
                </ul>
                <a href="#" className="cd-close-menu" onClick={handleClick} data-testid="closeNav">Close<span></span></a>
            </nav>

            <p className="cd-menu-trigger" onClick={handleClick} data-testid="burger-menu"><span></span></p>
            <h1 className="Header_title" data-testid="title">GUILLAUME DAVID</h1>

            <div className="Header_separator-white"></div>

            <h2 className="Header_description" data-testid="subTitle">Développeur Front End / Javascript / React</h2>


            <a className="mouse-scroll" href="#introduction" data-testid="scroll">
						<span className="mouse">
							<span className="mouse-movement"></span>
						</span>
						<span className="mouse-message fadeIn">scroll</span>
			</a>
        </div>
        </section>
    )
}