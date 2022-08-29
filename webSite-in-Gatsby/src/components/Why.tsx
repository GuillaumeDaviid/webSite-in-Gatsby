import * as React from 'react'
/*
import smartPhone from "../images/app.png"
import tablette from "../images/app2.png"
import computer from "../images/makbook.png"
*/

export default function Why() {
    return(
        <div className="Why">

            <h2>POURQUOI MOI ?</h2>
            <div className="Why_separator"></div>
            <p className="Why_head">Envie d&apos;un nouveau site web ? Ou alors d&apos;une refonte de celui-ci ? 
            Vous cherchez un développeur qui répond à vos besoins sur-mesure et qui respect les délais et le budget ?</p>
       

            <div className="Why_items">
                <div className="Why_items-elt">
                    <div className="image_container">

                    </div>
                    <h5 className="items-title">Responsive Design</h5>
                    <p className="items-text">Site web accessible sur mobile.</p>
                </div>

                <div className="Why_items-elt">
                    <div className="image_container">
              
                    </div>
                    <h5 className="items-title">Responsive Layout</h5>
                    <p className="items-text">Site web accessible sur tablette.</p>
                </div>

                <div className="Why_items-elt">
                    <div className="image_container">
             
                    </div>
                    <h5 className="items-title">React.js</h5>
                    <p className="items-text">Vous avez un gros projet à venir ? React.js est utilisé par Facebook, Instagram, Twitter, Netflix ...</p>
                </div>
            </div>

            <div className="quote">
                <div className="quote_background"></div>
                </div>
        </div>
    )
}