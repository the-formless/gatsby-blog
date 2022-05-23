import React from 'react'
import {Link} from 'gatsby'
import Layout from '../Components/layout'
import Head from "../Components/head";

function About() {
  return (
    <Layout>
      <Head title="About" />
      <h1>About me:</h1>
      <p>I'm Vandit and ..........</p>
      <p>Need a developer?
        <Link to="/contact">Contact Me.</Link>
      </p>
    </Layout>
  )
}

export default About