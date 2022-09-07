import * as React from 'react'
import { useState } from "react"
import './styles/Header.scss'

export default function Header() {
    const [visible, setVisible] = useState(false);

    function handleClick() {
        setVisible(!visible)
    }


    return(
        <section id="home">
        <div className="Header">

        <nav className={`Header_nav ${visible ? `nav_visible` : `nav_notVisible`}`}>
                <ul>
                <li><a href="#home" onClick={handleClick}><span>Accueil</span></a></li>
                <li><a href="#portfolio" onClick={handleClick}><span>Portfolio</span></a></li>
                <li><a href="#contact" onClick={handleClick}><span>Contact</span></a></li>
                <li><a href="/blog" onClick={handleClick}><span>Blog</span></a></li>
                </ul>
                <a href="#" className="cd-close-menu" onClick={handleClick}>Close<span></span></a>
            </nav>

            <a className="cd-menu-trigger" href="#main-nav" onClick={handleClick}><span></span></a>
            <h1 className="Header_title">GUILLAUME DAVID</h1>

            <div className="Header_separator-white"></div>

            <h3 className="Header_description">Développeur Front End / Javascript / React</h3>


            <a className="mouse-scroll" href="#introduction">
						<span className="mouse">
							<span className="mouse-movement"></span>
						</span>
						<span className="mouse-message fadeIn">scroll</span>
			</a>
        </div>
        </section>
    )
}