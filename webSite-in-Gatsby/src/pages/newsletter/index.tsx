import * as React from 'react'
import Footer from '../../components/Footer'
import favicon from '../../images/favicon.ico'
import  {Helmet} from "react-helmet"
import './index.scss'


const Newsletter = () => {
    return(
        <div className='Page__Newsletter'>
            <div className='Newsletter'>
            <Helmet>
    <html lang="fr" />
    <link rel="icon" href={favicon}/>
    <title>Guillaume David | NEWSLETTER</title>
    </Helmet>

                <div className='Newsletter__text'>
                <h1>Recevez mes Emails Privées</h1>
                <h2> - <strong>Recevez GRATUITEMENT</strong> le guide pour coder votre premiére Application web avec ⚛️REACT⚛️</h2>
                <h2> - <strong>Des Astuces</strong> pour apprendre à coder</h2>
                <h2> - <strong>Vous faire progresser</strong> dans le développement front-end et surtout React</h2>
                </div>

                <div className='Newsletter__form'>
                {/*<form action='https://www.getrevue.co/profile/guillaumedavid/add_subscriber' method="post" name="revue-form" target="_blank">
                <div>
                  <input className="Newsletter__form--input" type="email" name="member[email]" id="member_email" required={true} placeholder="Votre adresse Email"/>
                </div>

                <input type="submit" value="S'INSCRIRE" className="btn-form" name="member[subscribe]"id="member_submit"/>
                
            
    </form>*/}
                
                </div>
                <iframe className='Newsletter__form--frame' src="https://go.formulaire.info/form?p=j4JjiuLA" height="100%" width="100%" scrolling="auto"></iframe>

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