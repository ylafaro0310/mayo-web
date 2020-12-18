import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { HTMLContent } from '../components/Content';
import Top from '../../static/img/HP2.png';
import Img from 'gatsby-image';

const Index = ({data}) => (
  <Layout>
    <div>
      <img src={Top}/>
    </div>
    <section className="section">
      <div className="container has-text-centered">
        <div className="column is-half is-offset-one-quarter">
          <h2 className="title is-4 has-text-weight-bold is-bold-light">プロフィール</h2>
          <Img className="image is-128x128 has-image-centered" fluid={data.about.frontmatter.thumbnail.childImageSharp.fluid}/>
          <HTMLContent content={data.about.html}/>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container has-text-centered">
        <div className="column is-half is-offset-one-quarter">
          <h2 className="title is-4 has-text-weight-bold is-bold-light">作品・コラボ</h2>
          <div className="columns">
            {data.works.edges.slice(0,3).map(({node},i)=>(
              <div key={i} className="column is-one-third">
                <Link to={node.fields.slug}>
                  <Card image={node.frontmatter.thumbnail}>
                    {node.frontmatter.title}
                  </Card>
                </Link>
              </div>
            ))}
          </div>
          <Link to="/works">
            <button className="button is-black">詳しく見る ></button>
          </Link>
        </div>
      </div>    
    </section>
  </Layout>
);

export default Index;

export const pageQuery = graphql`
  query IndexQuery {
    about: markdownRemark(
      frontmatter: { templateKey: { eq: "about-page" } }
    ) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        templateKey
        date(formatString: "MMMM DD, YYYY")
        thumbnail {
          childImageSharp {
            fluid(maxWidth: 120, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    works: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "work-post" } } }
    ){
      edges{
        node{
          id
          html
          fields{
            slug
          }
          frontmatter{
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
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