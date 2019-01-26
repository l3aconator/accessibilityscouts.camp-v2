import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import SEO from '../components/seo'

class Home extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    // const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <section>
          <div className="container">
            <h1 className="hero--type mt--90">
              Only you can prevent <br />
              <span className="hero--type__second-line">bad experiences</span>
            </h1>
            <div className="hero--down">
              <a href="#down">
                <svg
                  className="hero--down-icon"
                  width="59"
                  height="59"
                  viewBox="0 0 59 59"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <title>go-down</title>
                  <defs>
                    <path
                      id="a"
                      d="M29.5 56.293L25.795 59l-2.916-3.545-4.26 1.7-1.948-4.16-4.548.582-.85-4.514-4.55-.568.295-4.584-4.266-1.68 1.426-4.37-3.716-2.694 2.463-3.874L0 27.757l3.348-3.14-1.96-4.152 4.022-2.207-.867-4.51 4.443-1.136.28-4.585 4.585.008 1.41-4.372 4.44 1.15L22.15.93l4.013 2.22L29.5 0l3.337 3.15L36.85.93l2.45 3.883 4.44-1.15 1.41 4.372 4.584-.008.28 4.585 4.443 1.135-.867 4.51 4.022 2.208-1.96 4.153L59 27.758l-2.928 3.534 2.463 3.874-3.714 2.694 1.427 4.367-4.266 1.684.296 4.587-4.55.568-.85 4.514-4.55-.584-1.944 4.16-4.26-1.7L33.207 59z"
                    />
                    <pattern
                      id="b"
                      width="258"
                      height="258"
                      x="-258"
                      y="-258"
                      patternUnits="userSpaceOnUse"
                    >
                      <use xlinkHref="#a" />
                    </pattern>
                  </defs>
                  <g fill="none" fillRule="evenodd">
                    <use fill="#2E112D" xlinkHref="#a" />
                    <use fillOpacity=".11" fill="url(#b)" xlinkHref="#a" />
                    <circle
                      stroke="#FFA11B"
                      strokeWidth="5"
                      fill="#FDE9DD"
                      cx="30"
                      cy="30"
                      r="20"
                    />
                    <path
                      className="hero--down-icon__arrow"
                      d="M30.178 37c-.56 0-1.12-.224-1.55-.672l-8.986-9.412c-.856-.895-.856-2.348 0-3.244.854-.896 2.242-.896 3.098 0l7.438 7.79 7.083-7.418c.857-.896 2.246-.896 3.1 0s.856 2.348 0 3.245l-8.63 9.036c-.43.448-.99.672-1.55.672"
                      fill="#2E112D"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
          <img
            src="/hero-01.png"
            alt="An illustration of a computer in a forest"
          />
        </section>
        <section className="container--content mt--90" id="down">
          <h1>Making the scary forest of the web a better place for all</h1>
          <hr />
          <h3>Welcome fellow scouts!</h3>
          <p>
            The web is a wonderful and scary place, but mostly wonderful. The
            access to information is astounding but most of it, is only
            accessible to those who are without impairments. The following
            manuals within this camp is to get you ready for the wild forest of
            the Internet and make it usable for all. (Or as close as we can
            get!) We'll be looking at the three senses used to interact with
            content: vision, sound, and interaction. People with one disability,
            or a combination of several, greatly impacts the experience of a
            website or web app. Information, learning, or a specific tool
            shouldn't cater to one audience, but many.
          </p>
        </section>
        <section className="manual--lists">
          <div className="container--content">
            <h4 className="mb--60">
              These are the field manuals you’ll be going through:
            </h4>
          </div>
          <div className="container">
            <div className="flex-grid--gutters">
              <div className="col">
                <div className="cover--box mb--30">
                  <img
                    alt="The cover of the accessibilityscouts.camp sight manual."
                    src="/sight-cover.png"
                  />
                </div>
                <ul className="toc--list">
                  {/* {% for child in page.find('/vision').children %}
                          <li className="toc--list__item toc--list__item-sight">
                              <a className="toc--list-item__link" href="{{ child.url }}">{{ child.title }}</a>
                          </li>
                      {% endfor %} */}
                </ul>
              </div>
              <div className="col">
                <div className="cover--box mb--30">
                  <img
                    alt="The cover of the accessibilityscouts.camp sound manual."
                    src="/sound-cover.png"
                  />
                </div>
                <ul className="toc--list">
                  {/* {% for child in page.find('/sound').children %}
                          <li className="toc--list__item toc--list__item-audio">
                              <a className="toc--list-item__link" href="{{ child.url }}">{{ child.title }}</a>
                          </li>
                      {% endfor %} */}
                </ul>
              </div>
              <div className="col">
                <div className="cover--box mb--30">
                  <img
                    alt="The cover of the accessibilityscouts.camp touch manual."
                    src="/interaction-cover.png"
                  />
                </div>
                <ul className="toc--list">
                  {/* {% for child in page.find('/interaction').children %}
                          <li className="toc--list__item toc--list__item-touch">
                              <a className="toc--list-item__link" href="{{ child.url }}">{{ child.title }}</a>
                          </li>
                      {% endfor %} */}
                </ul>
              </div>
              <div className="col">
                <div className="cover--box mb--30">
                  <img
                    alt="The cover of the accessibilityscouts.camp about manual."
                    src="/about-cover.png"
                  />
                </div>
                <ul className="toc--list">
                  {/* {% for child in page.find('/about').children %}
                          <li className="toc--list__item toc--list__item-about">
                              <a className="toc--list-item__link" href="{{ child.url }}">{{ child.title }}</a>
                          </li>
                      {% endfor %} */}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container--content section--marg">
            <div className="box purple stripe" markdown="1">
              <h4>A note from the camp counselor</h4>
              <p>
                Consider if a business didn't have wheelchair ramps to get
                inside? Or cashiers told visually impaired patrons the wrong
                amount of money to pay for something and pocketed the excess? Or
                denied service because the patron can't hear you? All these are
                extreme edge cases, but it happens. The severity of those
                concepts happen on the web. Let's work together to make the web
                better for everyone. Start exploring!
              </p>
            </div>
          </div>
        </section>
        <section className="container section--pad">
          <div className="flex-grid--gutters">
            <div className="col--width__three">
              <div className="badge--box">
                <img
                  className="img--badge"
                  alt="A badge."
                  src="/badge/color-contrast/color-contrast.png"
                />
              </div>
            </div>
            <div className="col--width__nine">
              <h3>
                Ready to jump in and start earnin’ some merit badges, scout? (If
                you'd like to keep track, please{' '}
                <a href="register">create an account</a>.)
              </h3>
              <p className="h3 h3__serif">
                Let's start with{' '}
                <a
                  className="img--badge__trigger"
                  href="/vision/color-contrast"
                >
                  color contrast &raquo;
                </a>
              </p>
            </div>
          </div>
        </section>
      </Layout>
    )
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
    # allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    #   edges {
    #     node {
    #       excerpt
    #       fields {
    #         slug
    #       }
    #       frontmatter {
    #         date(formatString: "MMMM DD, YYYY")
    #         title
    #       }
    #     }
    #   }
    # }
  }
`
