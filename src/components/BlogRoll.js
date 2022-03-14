import React from "react";
import PropTypes from "prop-types";
import { graphql, Link, StaticQuery } from "gatsby";
import _ from "lodash";
import BlogPost from "./BlogPost";
class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div className="">
        {data.allMarkdownRemark.edges.count == 0 && "まだブログが投稿されていません。"}
        {data.allMarkdownRemark.edges.map(({node},i)=>(
          <div key={i} className="">
            <Link to={node.fields.slug}>
              <BlogPost image={node.frontmatter.thumbnail}>
                <div className="title is-4 has-text-black">
                  {node.frontmatter.title}
                </div>
                <div className="has-text-black mb-2">
                  {node.excerpt}
                </div>
                <div className="has-text-black">
                  {node.frontmatter.date}
                </div>
              </BlogPost> 
            </Link>
          </div>
        ))
        }
      </div>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              id
              html
              excerpt(truncate: true)
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "YYYY/MM/DD")
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
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
