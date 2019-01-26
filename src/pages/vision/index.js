import React from 'react'
import { Link, graphql } from 'gatsby'

import ManualLanding from '../../components/ManualLanding'

class Home extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

      return <ManualLanding 
                location={this.props.location} 
                siteTitle={siteTitle} 
                title="Welcome to manual 212-521…just kidding. Welcome to the all things accessibility and vision!" 
                keywords={[`blog`, `gatsby`, `javascript`, `react`]} 
                heroImage="/sight.png"
                heroCover="/sight-cover.png"
                posts={posts}
                badges={[
                    "behind-the-scenes",
                    "color-blindness",
                    "color-contrast",
                    "typography"
                ]} 
            />
  }
}

export default Home

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/vision/" } }
      sort: { fields: [frontmatter___title], order: ASC }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
