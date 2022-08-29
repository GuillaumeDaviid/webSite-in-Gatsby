import * as React from 'react'
import { useState } from "react"/*
import netflix from '../images/netflix.png'
import checkers from '../images/checkers.png'
import academie from '../images/01academie.png'
import home from '../images/01home.png'
import course from '../images/01courses.png'*/

export default function Portfolio() {
    const [selected, setSelected] = useState('all');

    function handleClick(cat:any) {
        setSelected(cat)
    }

    return(
        <section id="portfolio">
        <div className="Portfolio">
       
            <h2 className="Protfolio_title">MON PORTFOLIO</h2>

            <div className="Portfolio_separator"></div>
            

            <ul className="Portfolio_btn">
                <li className={`${selected === "all" ? `selected` : `notSelected`}`} onClick={() => handleClick("all")}>All</li>
                <li className={`${selected === "front" ? `selected` : `notSelected`}`} onClick={() => handleClick("front")}>Front end</li>
                <li className={`${selected === "full" ? `selected` : `notSelected`}`} onClick={() => handleClick("full")}>Full stack</li>
                <li className={`${selected === "mobile" ? `selected` : `notSelected`}`} onClick={() => handleClick("mobile")}>Mobile</li>
            </ul>
            <div className="Portfolio_items">
                
                <div className={`Portfolio_items-elt ${selected === "all" || selected === "front" ? `visible` : `notVisible`}`}>
                    
                    <div className="Portfolio_items-content">
                        <h3>Netflix Clone</h3>
                        
                        <a>Link</a>
                        
                    </div>
                </div>

                <div className={`Portfolio_items-elt ${selected === "all" || selected === "front" ? `visible` : `notVisible`}`}>
                
                <div className="Portfolio_items-content">
                        <h3>Jeu de Dame</h3>
                        
                        <a>Link</a>
                       
                    </div>
                </div>

                <div className={`Portfolio_items-elt ${selected === "all" || selected === "front" || selected === "full" ? `visible` : `notVisible`}`}>
              
                <div className="Portfolio_items-content">
                        <h3>01 ACADEMIE</h3>
                     
                        <a>Link</a>
                       
                    </div>
                </div>

                <div className={`Portfolio_items-elt ${selected === "all" || selected === "front" || selected === "full" ? `visible` : `notVisible`}`}>
                
                <div className="Portfolio_items-content">
                        <h3>01 ACADEMIE</h3>
                        
                        <a>Link</a>
                        
                    </div>
                </div>

                <div className={`Portfolio_items-elt ${selected === "all" || selected === "front" || selected === "full" ? `visible` : `notVisible`}`}>
        
                <div className="Portfolio_items-content">
                        <h3>01 ACADEMIE</h3>
                    
                        <a>Link</a>
                      
                    </div>
                </div>
              
            </div>
        </div>
        </section>
    )
}