import React from "react"
import Layout from "../Components/layout";
import { Link } from "gatsby";

const IndexPage = () => {
  return (
    <Layout>
      <h1>Hello,</h1>
      <h2>I'm a software developer</h2>
      <h4><Link to='/about'>Get to know me</Link></h4>
      <p>Need a developer?
        <Link to="/contact">Contact Me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage;