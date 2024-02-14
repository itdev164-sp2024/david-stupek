import * as React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';

import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"


const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <ul className={styles.list}>
      {
        data.allContentfulBlogPost.edges.map(edge => (
          <li key={edge.node.id}>
            <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
            <div>
              <GatsbyImage
              image={edge.node.heroImage.gatsbyImageData}
              />
            </div>
            <div>
              {edge.node.description.childMarkdownRemark.excerpt}
            </div>
          </li>
        ))
      }
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
{
  allContentfulBlogPost {
    edges {
      node {
        id
        title
        slug
        description {
          childMarkdownRemark {
            excerpt
          }
        }
        heroImage {   
          gatsbyImageData(   
            layout: CONSTRAINED
            placeholder: BLURRED
            width: 300
          )
        }
      }
    }
  }
}`