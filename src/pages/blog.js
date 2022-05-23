import React from 'react'
import Layout from '../Components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';

function BlogPage() {
  const data = useStaticQuery(graphql`
  query {
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title,
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
  `);
  const nodeArr = data.allMarkdownRemark.edges;
  return (
    <Layout><h1>Blog</h1>
      <p>Posts go here</p>
      <ol>
        {nodeArr.map((val, idx) => <li key={idx}>
          <Link to={`./${val.node.fields.slug}`}>
          <h2>{val.node.frontmatter.title}</h2>
          <p>{val.node.frontmatter.date}</p>
          </Link>
        </li>)}
      </ol>
    </Layout>
  )
}

export default BlogPage;