import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

const Layout = () => {

    return(
        <div>
            <nav>
        <ul >
          <li ><Link to="/" >Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li >
            <Link to="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
        </div>
    )
}

export default Layout