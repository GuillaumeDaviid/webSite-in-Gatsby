import * as React from 'react'
import './styles/Form.scss'
import { useState } from 'react'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'

export default function Form() {
    return(
        <div className="Form">
            <section id="contact">
            <div className="Form_text">
             
            <h2>DEMANDEZ UN DEVIS</h2>
            <div className="Form_text-separator"></div>
            <p className="Form_text-content">Envie d&apos;un nouveau site web ? Ou alors d&apos;une refonte de celui-ci ? 
            Vous cherchez un développeur qui répond à vos besoins sur-mesure et qui respect les délais et le budget ? Demandez un Devis !</p>
            
            </div>

            <div className="Form_content">
                
            <div className="Form_content-info">
           
                <h4>COORDONNEES</h4>
                <p>Loos-en-Gohelle (62) - France</p>
                <p>guillaumedaavidpro@gmail.com</p>
                <p>Guillaume David</p>
                <a>Twitter</a>
                <a>github</a>
                <a>medium</a>
                <a>linkedin</a>
               
            </div>
            

            <div className="Form_content-form">
                <form id="formid" method="post" action='https://getform.io/f/ca7fb4f1-379c-4242-a03a-93dd5d1d0078' /*ou https://www.guillaumedavid.com/api/recaptcha.php  ../api/recaptcha.php */>
                    <div className="row_form">

                    <div >
                        <input className="row_form-name" type="text" name="user_name" placeholder="Nom"/>
                    </div>

                    <div >
                        <input className="row_form-mail" type="email" name="user_mail" placeholder="Email"/>
                    </div>

                    </div>

                    <div>
                        <textarea className="row_form-msg" name="user_message" placeholder="Message"/>
                    </div>

                    <div className="container-btn">
                    <input type="submit" value="ENVOYER" className="btn-form g-recaptcha"/>
                    
                    </div>
                </form>
            </div>

            </div>
            </section>
        </div>

        
    )
}