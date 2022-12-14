import React from 'react'
import './styles/Form.scss'
import ReCAPTCHA from "react-google-recaptcha"

export default function Form() {
    return(
        <div className="Form">
            <section id="contact">
            <div className="Form_text">
             
            <h2 data-testid="title">DEMANDEZ UN DEVIS</h2>
            <div className="Form_text-separator" data-testid="separator"></div>
            <p className="Form_text-content" data-testid="text">Envie d&apos;un nouveau site web ? Ou alors d&apos;une refonte de celui-ci ? 
            Vous cherchez un développeur qui répond à vos besoins sur-mesure et qui respect les délais et le budget ? Demandez un Devis !</p>
            
            </div>

            <div className="Form_content">
                
            <div className="Form_content-info" data-testid="info">
           
                <h3>COORDONNEES</h3>
                <p>Loos-en-Gohelle (62) - France</p>
                <p>guillaumedaavidpro@gmail.com</p>
                <p>Guillaume David</p>
                <div className='Form_content-network'>
                <a href='https://github.com/GuillaumeDaviid' target="_blank">github</a>
                <a href='https://guillaumedaavid.medium.com/' target="_blank">medium</a>
                <a href='https://www.linkedin.com/in/guillaume-david-5541271b9/' target="_blank">linkedin</a>
                </div>
               
            </div>

            <div className="Form_content-form" data-testid="form">
                <form id="formid" method="post" action='https://getform.io/f/ca7fb4f1-379c-4242-a03a-93dd5d1d0078'>
                    <div className="row_form">

                    <div >
                        <input className="row_form-name" type="text" id="name" placeholder="Nom" required={true} name="name" />
                    </div>

                    <div >
                        <input className="row_form-mail" type="email" name="email" required={true} placeholder="Email"/>
                    </div>

                    </div>

                    <div>
                        <textarea className="row_form-msg" name="message" required={true} placeholder="Message"/>
                    </div>

                    <div className="container-btn">

                     <ReCAPTCHA sitekey="6Ld2NTUiAAAAAEdSFPLK-lrMP7Y3hmRz-3vTa-yV" data-testid="reCaptcha"/>
                    
                    <input type="submit" value="ENVOYER" className="btn-form"/>
                    
                    </div>

                    
                </form>
            </div>

            </div>
            </section>
        </div>
    )
}