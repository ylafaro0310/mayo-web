import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link, StaticQuery } from 'gatsby';
import _ from 'lodash';
import Card from './Card';
class TopicsRoll extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <div className="columns is-multiline">
        {data.allMarkdownRemark.edges.map(({node},i)=>(
          <div key={i} className="column is-one-third">
            <Link to={node.fields.slug}>
              <Card image={node.frontmatter.thumbnail}>
                {node.frontmatter.title}
              </Card> 
            </Link>
          </div>
        ))
        }
      </div>
    );
  }
}

TopicsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query TopicsRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "topic-post" } } }
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
                thumbnail {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <TopicsRoll data={data} count={count} />}
  />
);
