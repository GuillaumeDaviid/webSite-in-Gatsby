import * as React from 'react'

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
                <form id="formid" method="post" action='../php/recaptcha.php'>
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
                        <input className="btn-form" type="submit" value="ENVOYER" />
                    </div>
                </form>
            </div>

            </div>
            </section>
        </div>
    )
}