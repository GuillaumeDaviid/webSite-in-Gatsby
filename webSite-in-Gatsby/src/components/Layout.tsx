import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
// @ts-ignore
import favicon from '../images/favicon.ico'
import  {Helmet} from "react-helmet"
import './styles/Layout.scss'

const Layout = ({ pageTitle, children }:any) => {

    return(
        <div className='Layout'>
          <Helmet>
    <html lang="fr" />
    <link rel="icon" href={favicon}/>
    <title>Guillaume David | {pageTitle}</title>
    </Helmet>
          <div className='Layout__nav'>
            <nav>
        <ul className='Layout__nav--children' >
          <li className='nav__elt'><Link to="/" >Home</Link></li>
          <li className='nav__elt'><Link to="/about">About</Link></li>
          <li className='nav__elt'><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <h1 className='Layout__title'>{pageTitle}</h1>
      <div className='Header_separator-white'></div>
      </div>
      <main>
        {children}
      </main>
        </div>
    )
}

export default Layout