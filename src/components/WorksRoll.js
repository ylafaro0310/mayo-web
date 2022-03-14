import React from "react";
import PropTypes from "prop-types";
import { graphql, Link, StaticQuery } from "gatsby";
import { HTMLContent } from "../components/Content";
import { WorkPostTemplate } from "../templates/work-post";
import _ from "lodash";
import Card from "../components/Card";

class WorksRoll extends React.Component {
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
            <div key={i} className="column is-one-quarter">
              <Link to={"/works/"+c}>
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

WorksRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

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
    render={(data, count) => <WorksRoll data={data} count={count} />}
  />
);
