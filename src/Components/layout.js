import React from 'react'
import Footer from "../Components/footer";
import Header from "../Components/header";
import { graphql, useStaticQuery } from 'gatsby';
import "../styles/index.scss"
import * as layoutStyles from './layout.module.scss'

function Layout(props) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title,
          author
        }
      }
    }
  `);

  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
      <Header title={data.site.siteMetadata.title}/>
        {props.children}
      </div>
      
      <Footer author={data.site.siteMetadata.author}/>
    </div>
  )
}

export default Layout