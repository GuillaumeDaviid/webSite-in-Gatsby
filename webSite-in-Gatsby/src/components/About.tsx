import * as React from 'react'
import './styles/About.scss'

export default function About() {
    return(
        <section id="introduction">
        <div className="About">

            <h2 className="About_title" data-testid="title">A PROPOS</h2>
            <div className="About_separator" data-testid="separator"></div>
            <p className="About_text" data-testid="text">Développeur web <strong>Front-End</strong> Freelance dans les Hauts-de-France (Lille), 
                Spécialisé <strong>Javascript / React.js</strong> et dans l&apos;intégration /
                développement responsive <strong>HTML/CSS/JS</strong>. Je vous accompagne dans le développement de votre projet web. Vous retrouverez ici mon portfolio et un moyen de me contacter.</p>

                <div className="creativity" data-testid="creativity">
                    <div className='creativity_block'>

                    
                    <a className='creativity_btn' target="_blank">Créativité</a>
        
                </div>
                </div>
                
        </div>
        </section>
    )
}