import * as React from 'react'
import './styles/Why.scss'
import { StaticImage } from 'gatsby-plugin-image'


export default function Why() {

    return(
        <div className="Why">

            <h2 data-testid="title">POURQUOI MOI ?</h2>
            <div className="Why_separator" data-testid="separator"></div>
            <p className="Why_head" data-testid="text">Envie d&apos;un nouveau site web ? Ou alors d&apos;une refonte de celui-ci ? 
            Vous cherchez un développeur qui répond à vos besoins sur-mesure et qui respect les délais et le budget ?</p>
       

            <div className="Why_items">
                <div className="Why_items-elt" data-testid="items">
                    <div className="image_container">

                    </div>
                    <StaticImage
                        alt="Smartphone responsive"
                        src='../images/app.png'
                    />
                    <h3 className="items-title">Responsive Design</h3>
                    <p className="items-text">Site web accessible sur mobile.</p>
                </div>

                <div className="Why_items-elt" data-testid="items">
                    <div className="image_container">
              
                    </div>
                    <StaticImage
                        alt="Smartphone responsive"
                        src='../images/app2.png'
                    />
                    <h3 className="items-title">Responsive Layout</h3>
                    <p className="items-text">Site web accessible sur tablette.</p>
                </div>

                <div className="Why_items-elt" data-testid="items">
                    <div className="image_container">
             
                    </div>
                    <StaticImage
                        alt="Smartphone responsive"
                        src='../images/makbook.png'
                    />
                    <h3 className="items-title">React.js</h3>
                    <p className="items-text">Vous avez un gros projet à venir ? React.js est utilisé par Facebook, Instagram, Twitter, Netflix ...</p>
                </div>
            </div>

            <div className="quote">
                <div className="quote_background"></div>
                </div>
        </div>
    )
}
