import * as React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby';

import { GatsbyImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { List, ListItem } from '../components/List'
import * as styles from "../components/index.module.css"


const IndexPage = ({data}) => (
  <Layout>
    <Seo title="Home" />
    <List width={[1, 2/3, 7/8]} p={2}>
      {
        data.allContentfulBlogPost.edges.map(edge => (
          <ListItem p={3} key={edge.node.id}>
            <Link to={`/blog/${edge.node.slug}`}>{edge.node.title}</Link>
            <div>
              <GatsbyImage
                image={edge.node.heroImage.gatsbyImageData}
              />
            </div>
            <div>
              {edge.node.description.childMarkdownRemark.excerpt}
            </div>
          </ListItem>
        ))

      }
    </List> 
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
            width: 600
          )
        }
      }
    }
  }
}`