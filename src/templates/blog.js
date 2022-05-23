import React from 'react'
import { graphql } from 'gatsby'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import Layout from '../Components/layout'

export const query = graphql`
query ($slug: String!){
  contentfulBlogPost (
    slug: {eq: $slug}
	) {
    title
    publishedDate(formatString: "MMMM Do, YYYY")
    body {
      raw
      references {
        ... on ContentfulAsset {
          contentful_id
          __typename
          resize(width: 1600) {
            width
            height
            src
          }
          url
          description
        }
      }
    }
  }
}
`;

function Blog(props) {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        return (
          <>
            <img
              src={node.data.target.url}
              alt={node.data.target.description}
            />
          </>
        )
      }
    }
  }
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
      {renderRichText(props.data.contentfulBlogPost.body, options)}
    </Layout>
  )
}

export default Blog