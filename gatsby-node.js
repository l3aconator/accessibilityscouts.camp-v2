const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/about/" } }) {
        edges {
          node {
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
  `)
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
      const posts = result.data.allMarkdownRemark.edges

      posts.forEach((post, index) => {
        const previous =
          index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

        createPage({
          path: `/about${post.node.fields.slug}`,
          component: blogPostTemplate,
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
          },
        })
      })
    })
    .then(() => {
      return graphql(`
        {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/interaction/" } }
          ) {
            edges {
              node {
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
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const workPostTemplate = path.resolve(`./src/templates/blog-post.js`)
      const posts = result.data.allMarkdownRemark.edges

      posts.forEach((post, index) => {
        const previous =
          index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

        createPage({
          path: `/interaction${post.node.fields.slug}`,
          component: workPostTemplate,
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
          },
        })
      })
    })
    .then(() => {
      return graphql(`
        {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/badge/" } }
          ) {
            edges {
              node {
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
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const workPostTemplate = path.resolve(`./src/templates/blog-post.js`)
      const posts = result.data.allMarkdownRemark.edges

      posts.forEach((post, index) => {
        const previous =
          index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

        createPage({
          path: `/badge${post.node.fields.slug}`,
          component: workPostTemplate,
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
          },
        })
      })
    })
    .then(() => {
      return graphql(`
        {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/sound/" } }
          ) {
            edges {
              node {
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
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const workPostTemplate = path.resolve(`./src/templates/blog-post.js`)
      const posts = result.data.allMarkdownRemark.edges

      posts.forEach((post, index) => {
        const previous =
          index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

        createPage({
          path: `/sound${post.node.fields.slug}`,
          component: workPostTemplate,
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
          },
        })
      })
    })
    .then(() => {
      return graphql(`
        {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/vision/" } }
          ) {
            edges {
              node {
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
      `)
    })
    .then(result => {
      if (result.errors) {
        result.errors.forEach(e => console.error(e.toString()))
        return Promise.reject(result.errors)
      }

      const workPostTemplate = path.resolve(`./src/templates/blog-post.js`)
      const posts = result.data.allMarkdownRemark.edges

      posts.forEach((post, index) => {
        const previous =
          index === posts.length - 1 ? null : posts[index + 1].node
        const next = index === 0 ? null : posts[index - 1].node

        createPage({
          path: `/vision${post.node.fields.slug}`,
          component: workPostTemplate,
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
          },
        })
      })
    })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
