import React from 'react'
import Layout from '../Components/layout'
import { Link } from 'gatsby'

function NotFound() {
  return (
    <Layout>
        <h1>Page Not Found</h1>
        <p><Link to='/'>Go Home</Link></p>
    </Layout>
  )
}

export default NotFound