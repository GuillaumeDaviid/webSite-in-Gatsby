import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import './styles/Layout.scss'

const Layout = ({ pageTitle, children }:any) => {

    return(
        <div className='Layout'>
    
          <div className='Layout__nav' data-testid="nav">
            <nav>
        <ul className='Layout__nav--children' >
          <li className='nav__elt' data-testid="li"><Link to="/" >Home</Link></li>
          <li className='nav__elt' data-testid="li"><Link to="/about" >About</Link></li>
          <li className='nav__elt' data-testid="li"><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>
      <h1 className='Layout__title' data-testid="title">{pageTitle}</h1>
      <div className='Header_separator-white' data-testid="separator"></div>
      </div>
      <main>
        {children}
      </main>
        </div>
    )
}

export default Layout