import * as React from 'react'
import './styles/Form.scss'
import { useState } from 'react'
import axios from "axios";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from "react-google-recaptcha-v3";

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
            <GoogleReCaptchaProvider reCaptchaKey='6LfYwUEcAAAAAMDY20qhYUpD-D-ng45mPmV25S7M'>
                <form id="formid" method="post" action='https://getform.io/f/ca7fb4f1-379c-4242-a03a-93dd5d1d0078' /*ou https://www.guillaumedavid.com/api/recaptcha.php  ../api/recaptcha.php */>
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

                    <input type="submit" value="ENVOYER" className="btn-form"/>
                    
                    </div>

                

                </form>
                </GoogleReCaptchaProvider>
            </div>

            </div>
            </section>
        </div>

        
    )
}