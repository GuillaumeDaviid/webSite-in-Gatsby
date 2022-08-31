import * as React from 'react'
import {useState} from 'react'
import './styles/Article.scss'


export default function Article() {
  const [p, setp] = useState(0);
  const [nbr, setNbr] = useState(1);

  function handleClickNext() {
    let carrousel = document.getElementById('carrousel');
    if (carrousel){
        if (nbr < 7){
            setNbr(nbr + 1);
            const newp = p - 1
            setp(newp);
            carrousel.style.transform = "translate("+newp*25+"vw)";
            carrousel.style.transition = "all 0.5s ease";
        }
    }
}

function handleClickPrevious() {
    let carrousel = document.getElementById('carrousel');
    if (carrousel){
        if (nbr > 1){
            setNbr(nbr - 1);
            const newp = p + 1;
            setp(newp);
        carrousel.style.transform = "translate("+newp*25+"vw)";
        carrousel.style.transition = "all 0.5s ease";
        }
        
    }
}


    return(
        <div className="Article">
         
            <h2>Article</h2>
            <div className="Article_separator"></div>
            
            <div className="Article_items">
                <button className="Article_items-btn right" onClick={handleClickPrevious}>&#60;</button>
                <button className="Article_items-btn left" onClick={handleClickNext}>&#62;</button>

                <div className='Article_items-elt' id="carrousel">

                

                </div>
                
            </div>
            
        </div>
    )
}