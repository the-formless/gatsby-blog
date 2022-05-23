import React from 'react'
import Layout from '../Components/layout'
import { Link } from 'gatsby'
import Head from "../Components/head";

function NotFound() {
  return (
    <Layout>
      <Head title="404 Not Found" />
        <h1>Page Not Found</h1>
        <p><Link to='/'>Go Home</Link></p>
    </Layout>
  )
}

export default NotFound