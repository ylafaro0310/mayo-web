import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';
import { HTMLContent } from '../components/Content';

//import facebook from '../img/social/facebook.svg';
//import instagram from '../img/social/instagram.svg';
import twitter from '../img/social/twitter.svg';

const Footer = class extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div className="has-text-centered">
        <section className="section">
          <div className="container column social">
            <h2 className="title is-4 has-text-weight-bold is-bold-light">SNS</h2>
            {/* <a title="facebook" href="https://facebook.com">
              <img
                src={facebook}
                alt="Facebook"
                style={{ width: '1em', height: '1em' }}
              />
            </a> */}
            <a title="twitter" href="https://twitter.com/pi_nuttu">
              <img
                className="fas fa-lg"
                src={twitter}
                alt="Twitter"
                style={{ width: '1em', height: '1em' }}
              />
            </a>
            {/* <a title="instagram" href="https://instagram.com">
              <img
                src={instagram}
                alt="Instagram"
                style={{ width: '1em', height: '1em' }}
              />
            </a> */}
          </div>
        </section>
        <section className='section'>
          <div className='container'>
            <h2 className="title is-4 has-text-weight-bold is-bold-light">お問い合わせ</h2>
            <HTMLContent content={data.markdownRemark.html}/>
          </div>   
        </section>  
        <footer className="footer">
          <div className="content has-text-centered">
            <div className="container">
              
              <div className="content has-text-centered footer-title">
                染沁-shishi-
                {/* <img
                  src={logo}
                  alt="Kaldi"
                  style={{ width: '14em', height: '10em' }}
                /> */}
              </div>       
              <div className="columns">
                <div className="column is-half is-offset-one-quarter">
                  <section className="menu">
                    <ul className="menu-list">
                      <li>
                        <Link className="navbar-item" to="/works">
                          制作・コラボ
                        </Link>
                      </li>
                      <li>
                        <Link className="navbar-item" to="/illustrations">
                          イラスト
                        </Link>
                      </li>
                      {/* <li>
                        <a
                          className="navbar-item"
                          href="/admin/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Admin
                        </a>
                      </li> */}
                    </ul>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
};

export default ()=>(
  <StaticQuery 
    query={graphql`
      query {
        markdownRemark(
          frontmatter: { templateKey: { eq: "contact-page" } }
        ) {
          id
          html
          fields {
            slug
          }
          frontmatter {
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }`}
    render={(data,count)=><Footer data={data}/>}
  />);