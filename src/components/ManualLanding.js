import React from 'react'
import { Link } from 'gatsby'

import Layout from './Layout'
import SEO from './seo'

class ManualLanding extends React.Component {
  render() {
    const siteTitle = this.props.siteTitle

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={this.props.title} keywords={this.props.keywords} />
        <section>
          <div className="manual-landing--hero">
            <img src={this.props.heroImage} alt="Illustration" />
            <img
              className="manual-landing--hero-cover"
              src={this.props.heroCover}
              alt={`An illustrated cover of the ${this.props.title} manual`}
            />
          </div>
          <div className="container">
            <div className="flex-grid--gutters">
              <div className="col--width__seven">
                <h2 className="manual-landing--hero-heading">{this.props.title}</h2>
                <h3>Inside you’ll find:</h3>
                <ul className="manual-landing--list">
                  {this.props.posts.map(({ node }) => (
                      <React.Fragment key={node.fields.slug}>
                        <hr className="mt--60 mb--60" />
                        <li className="manual-landing--list-item">
                        <Link
                            className="manual-landing--list-item-link"
                            to={`/vision/${node.fields.slug}`}
                        >
                            <h4>{node.frontmatter.title}</h4>
                        </Link>
                        {node.excerpt && (
                            <p className="manual-landing--summary">
                            {node.excerpt.slice(0, 185)}&hellip;{' '}
                            <Link to={`/vision/${node.fields.slug}`}>
                                {' '}
                                Start this section &raquo;
                            </Link>
                            </p>
                        )}
                        </li>
                    </React.Fragment>
                  ))}
                </ul>
              </div>
              <div className="col--width__five">
                <div className="manual-landing--sidebar">
                  <h5>
                    Merit badges you can add to your coat once you finish!
                  </h5>
                  {this.props.badges && this.props.badges.map(badge => (
                      <img key={badge} className="img--badge badge-collection--image" src={`/badge/${badge}/${badge}.png`} alt={`This is an image of the ${badge} badge`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default ManualLanding
