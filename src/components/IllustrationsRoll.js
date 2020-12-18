import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link, StaticQuery } from 'gatsby';
import _ from 'lodash';
import Card from '../components/Card';
class IllustrationsRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    let category = posts.map(({node: post})=>(
      post.frontmatter.category
    ));
    category = _.uniq(category);

    return (
      <div className="columns is-multiline">
        {posts &&
          category.map((c,i)=>(
            <div key={i} className="column is-one-third">
              <Link to={'/illustrations/'+c}>
                <Card image={posts.find(({ node: post }) =>(post.frontmatter.category === c)).node.frontmatter.thumbnail}>
                  <div className="title is-5">{c}</div>
                </Card>
              </Link>
            </div>
          ))
        }
      </div>
    );
  }
}

IllustrationsRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

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
    render={(data, count) => <IllustrationsRoll data={data} count={count} />}
  />
);
