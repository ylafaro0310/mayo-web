import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import shop from '../img/shop.svg';
import Logo from '../../static/img/sisiロゴ.png';
import MediaQuery from 'react-responsive';

const Navbar = class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      navBarActiveClass: '',
    };
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
            navBarActiveClass: 'is-active',
          })
          : this.setState({
            navBarActiveClass: '',
          });
      }
    );
  }

  render() {
    const Shop = (
      <div className="shop-icon">
        <a title="shop" href="https://suzuri.jp/pi_nuttu">
          <img
            src={shop}
            alt="shop"
            style={{ width: '1em', height: '1em' }}
          />
          <p>Shop</p>
        </a>
      </div>
    );
    return (
      <div>
        <nav
          className="navbar is-fixed-top"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img src={Logo}/>
                <span style={{marginLeft: '5px'}}>染沁-shishi-</span>
              </Link>
              {/* Hamburger menu */}
              <div
                className={`navbar-burger burger ${this.state.navBarActiveClass}`}
                data-target="navMenu"
                onClick={() => this.toggleHamburger()}
              >
                <span />
                <span />
                <span />
              </div>
              <MediaQuery query="(max-width: 1024px)">
                {Shop}
              </MediaQuery>
            </div>
            <div
              id="navMenu"
              className={`navbar-menu ${this.state.navBarActiveClass}`}
            >
              <div className="navbar-start has-text-centered">
                <Link className="navbar-item" to="/works">
                  制作・コラボ
                </Link>
                <Link className="navbar-item" to="/illustrations">
                  イラスト
                </Link>
                <Link className="navbar-item" to="/topics">
                  トピック
                </Link>
                <Link className="navbar-item" to="/news">
                  ニュース
                </Link>
              </div>            
            </div>
            <MediaQuery query="(min-width: 1024px)">
              {Shop}
            </MediaQuery>
          </div>
        </nav>
      </div>
    );
  }
};

export default Navbar;

export const pageQuery = graphql`
    query {
        file: file(relativePath: {eq: "sisiロゴ.png"}) {
            childImageSharp{
                fluid(maxWidth: 200) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;