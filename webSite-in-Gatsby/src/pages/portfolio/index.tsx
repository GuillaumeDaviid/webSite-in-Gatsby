import * as React from 'react'
import Footer from '../../components/Footer'
import favicon from '../../images/favicon.ico'
import Layout from '../../components/Layout'
import  {Helmet} from "react-helmet"


const Portfolio = () => {
    return(
        <div>
             <Helmet>
    <html lang="fr" />
    <link rel="icon" href={favicon}/>
    <title>Guillaume David | Portfolio</title>
    </Helmet>

    <Layout pageTitle="Portfolio">
        <div>
        </div>
    </Layout>
    
        </div>
    )
}

export default Portfolio