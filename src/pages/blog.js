import React from 'react'
import Layout from '../Components/layout';
import { Link, graphql, useStaticQuery } from 'gatsby';
import * as blogStyles from './blog.module.scss'

function BlogPage() {
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost (
      sort: {
        fields: publishedDate,
        order:DESC
      }
    ){
      edges {
        node {
          title
          slug
          publishedDate(formatString:"MMMM Do, YYYY")
        }
      }
    }
  }
  `);
  const nodeArr = data.allContentfulBlogPost.edges;
  
  return (
    <Layout><h1>Blog</h1>
      <p>Posts go here</p>
      <ol className={blogStyles.posts}>
        {
          nodeArr.map((val, idx) => 
            <li key={idx} className={blogStyles.post}>
              <Link to={`./${val.node.slug}`}>
                <h2>{val.node.title}</h2>
                <p>{val.node.publishedDate}</p>
              </Link>
            </li>
          )
        }
      </ol>
    </Layout>
  )
}

export default BlogPage;