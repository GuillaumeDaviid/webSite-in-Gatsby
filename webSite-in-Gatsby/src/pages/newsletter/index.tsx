import * as React from 'react'
import Footer from '../../components/Footer'
import './index.scss'


const Newsletter = () => {
    return(
        <div className='Page__Newsletter'>
            <div className='Newsletter'>

                <div className='Newsletter__text'>
                <h1>Recevez mes Emails Privées</h1>
                <h2> - <strong>Recevez GRATUITEMENT</strong> le guide pour coder votre premiére Application web avec ⚛️REACT⚛️</h2>
                <h2> - <strong>Des Astuces</strong> pour apprendre à coder</h2>
                <h2> - <strong>Vous faire progresser</strong> dans le développement front-end et surtout React</h2>
                </div>

                <div className='Newsletter__form'>
                <form>
                <div>
                  <input className="Newsletter__form--input" type="email" name="email" required={true} placeholder="Votre adresse Email"/>
                </div>

                <input type="submit" value="S'INSCRIRE" className="btn-form"/>

                </form>
                </div>

                <p>🔒 100% sécurisé, vos données restent confidentielles. 
Vous restez libre de vous désinscrire à tout moment en 1 clic.</p>
            </div>

            <div className='Info'>
                <h2>Guillaume DAVID</h2>
                <p>Développeur Freelance React</p>
            </div>
            
           <Footer />
        </div>
    )
}

export default Newsletter