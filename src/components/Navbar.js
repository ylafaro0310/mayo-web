import React from 'react';
import { graphql } from 'gatsby';
import { Link } from 'gatsby';
import Logo from '../../static/img/sisiロゴ.png';

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
    console.log(this.props);
    return (
      <div>
        <nav
          className="navbar"
          role="navigation"
          aria-label="main-navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <Link to="/" className="navbar-item" title="Logo">
                <img src={Logo}/>
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
              </div>            
            </div>
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