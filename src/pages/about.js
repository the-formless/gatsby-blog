import React from 'react'
import {Link} from 'gatsby'
import Layout from '../Components/layout'

function About() {
  return (
    <Layout>
      <h1>About me:</h1>
      <p>I'm Vandit and ..........</p>
      <p>Need a developer?
        <Link to="/contact">Contact Me.</Link>
      </p>
    </Layout>
  )
}

export default About