import React from 'react'
import { Link } from 'gatsby'
import './styles/Layout.scss'

type Props = {
  pageTitle: string;
  children: import('react').ReactNode
}

const Layout = ({ pageTitle, children }:Props) => {

    return(
        <div className='Layout'>
    
          <div className='Layout__nav' data-testid="nav">
            <nav>
        <ul className='Layout__nav--children' >
          <li className='nav__elt' data-testid="li"><Link to="/" >Home</Link></li>
          <li className='nav__elt' data-testid="li"><Link to="/#introduction" >About</Link></li>
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