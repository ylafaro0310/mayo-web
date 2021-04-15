import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { HTMLContent } from '../components/Content';
import Img from 'gatsby-image';
import bulmaCarousel from 'bulma-carousel/dist/js/bulma-carousel.min.js';
import Slider from 'react-slick';
import { StaticImage } from 'gatsby-plugin-image';

class Index extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { data } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Layout>
        <div>
          <StaticImage src={'../img/HP2.png'} alt="top"/>
        </div>
        <section className="section">
          <div className="columns">
            <div className="column is-offset-one-third is-one-third">
              <h2 className="title is-4 has-text-weight-bold is-bold-light">PickUp</h2>
              <Slider {...settings}>   
                {data.topics.edges.slice(0,3).map(({node},i)=>(
                  <div key={i} className="column is-one-third">
                    <Link to={node.fields.slug}>
                      <Card image={node.frontmatter.thumbnail}>
                        {node.frontmatter.title}
                      </Card>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </section>
        <div className="container has-text-centered">
          <section className="section">
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <h2 className="title is-4 has-text-weight-bold is-bold-light">プロフィール</h2>
                <Img className="image is-128x128 has-image-centered" fluid={data.about.frontmatter.thumbnail.childImageSharp.fluid}/>
                <HTMLContent content={data.about.html}/>
              </div>
            </div>
          </section>
          <section className="section">
            <div className="columns">
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
                  <button className="button is-black">{'詳しく見る >'}</button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    );
  }
}

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
      sort: 
    	{
        fields: frontmatter___date, 
        order: DESC
      }
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
    topics: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "topic-post" }, pickup: { eq: true } } }
      sort: 
    	{
        fields: frontmatter___date, 
        order: DESC
      }
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