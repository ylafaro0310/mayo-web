import React from 'react'
import PropTypes from 'prop-types'
import { graphql, StaticQuery } from 'gatsby'
import { HTMLContent } from '../components/Content'
import { WorkPostTemplate } from '../templates/work-post'
import _ from 'lodash'

class WorksRoll extends React.Component {
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
                <WorkPostTemplate
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

WorksRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default () => (
  <StaticQuery
    query={graphql`
      query WorksRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "work-post" } } }
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
    render={(data, count) => <WorksRoll data={data} count={count} />}
  />
)
