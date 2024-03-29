import * as React from 'react'
import './styles/Skills.scss'

export default function Skill() {
    return(
        <div>
            <div className="project">
                    <div className='project_block' data-testid="project">

                    
                    <a className='project_btn' target="_blank">VOTRE PROJET</a>
             
                </div>
                </div>


            <div className='Skill'>
               
            <h2 data-testid="title">COMPETENCES</h2>
            <div className='Skill_separator' data-testid="separator"></div>
            

            <div className='Skill_skills'>
                <div className='skills' data-testid="skills">HTML/CSS</div>
                <div className='skills' data-testid="skills">SASS/SCSS</div>
                <div className='skills' data-testid="skills">TypeScript</div>
                <div className='skills' data-testid="skills">React.JS</div>
                <div className='skills' data-testid="skills">NodeJS</div>
                <div className='skills' data-testid="skills">NextJS</div>

                <div className='skills' data-testid="skills">Javascript</div>
                <div className='skills' data-testid="skills">SQL</div>
                <div className='skills' data-testid="skills">PHP</div>
                <div className='skills' data-testid="skills">Angular</div>
                <div className='skills' data-testid="skills">MySQL</div>
                <div className='skills' data-testid="skills">Gatsby</div>
            </div>
            </div>

            
        </div>
    )
}