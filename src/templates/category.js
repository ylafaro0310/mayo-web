import React from "react";
import { graphql, Link } from "gatsby";
import Card from "../components/Card";
import Layout from "../components/Layout";

const CategoryContent = ({data,pageContext})=>(
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

const Category = ({data,pageContext})=>(
  <Layout>
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <h2 className="title is-4 has-text-weight-bold is-bold-light">
              {pageContext.category}
            </h2>
            <CategoryContent data={data}/>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Category;

export const pageQuery = graphql`
  query categoryPagy($category: String, $templateKey: String) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter:  { category: { eq: $category }, templateKey: { eq: $templateKey } } }
    ) {
      edges { 
        node {
          html
          fields { 
            slug
          }
          frontmatter {
            title
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
`;
