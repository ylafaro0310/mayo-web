import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { HTMLContent } from '../components/Content'
import { IllustrationPostTemplate } from '../templates/illustration-post'
import _ from 'lodash'

class IllustrationsRoll extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    let category = posts.map(({node: post})=>(
      post.frontmatter.category
    ))
    category = _.uniq(category)

    return (
      <div className="columns is-multiline">
        {posts &&
          category.map(c=>(
            <div className="column is-10 is-offset-1">
              <h2>{c}</h2>
              {posts.map(({ node: post }) => (
                post.frontmatter.category === c ?
                <IllustrationPostTemplate
                  content={post.html}
                  contentComponent={HTMLContent}
                  title={post.frontmatter.title}
                  date={post.frontmatter.date}
                  category={post.frontmatter.category}
                />
                : null
              ))}
            </div>
          ))
        }
      </div>
    )
  }
}

IllustrationsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query IllustrationsRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "illustration-post" } } }
        ) {
          edges {
            node {
              id
              html
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                category
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <IllustrationsRoll data={data} count={count} />}
  />
)
