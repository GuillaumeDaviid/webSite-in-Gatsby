import React from 'react'
import { Link } from 'gatsby'

type Props = {
    selected : string;
    image: any;
    link: string;
    title: string;
    full: boolean;
}

const PortfolioItems = ({selected, image, link, title, full}: Props) => {
    return(
        <div className={`Portfolio_items-elt ${selected === "all" || selected === "front" || full && selected === "full" ? `visible` : `notVisible`}`} data-testid="portfolio">
            {image}
                    <div className="Portfolio_items-content">
                        <h3>{title}</h3>
                        <Link to={link} target="_blank" data-testid="link">Link</Link>
                        
                    </div>
        </div>
    )
}

export default PortfolioItems