import React, { Component } from 'react';

import logo from '../images/logo.svg';
import hamburgerIcon from '../images/hamburgerIcon.svg';
import xIcon from '../images/xIcon.svg';

import styles from '../styles/Navbar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.navbar = React.createRef();
    this.state = {
      open: false
    };
  }
  
  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }
  
  handleClick = () => {
    const { open } = this.state;
    this.setState({
      open: !open
    });
  };
  
  // closes navbar menu if user clicks anywhere outside of navbar or menu
  handleClickOutside = (event) => {
    const { open } = this.state;
    if (open) {
      if (!this.navbar.current.contains(event.target)) {
        this.setState({
          open: false
        });
      }
    }
  };
  
  render() {
    const { open } = this.state;
    
    return (
      <div
        className={styles.navbar}
        ref={this.navbar}
      >
        <div
          className={cx(styles.navbarInner, {
            fadedOut: open
          })}
        >
          <img
            src={logo}
            className={styles.logo}
            alt="Logo icon"
          />
          <img
            onClick={this.handleClick}
            src={hamburgerIcon}
            className={styles.navbarButton}
            alt="Logo icon"
          />
        </div>
        <div
          className={cx(styles.navbarInner, {
            fadedOut: !open
          })}
        >
          <img
            onClick={this.handleClick}
            src={xIcon}
            className={styles.navbarButton}
            alt="X icon"
          />
          <div className={styles.menu}>
            <div className={styles.menuButton}>
              <div className={styles.menuButtonText}>
                Info
              </div>
            </div>
            <div className={styles.menuButton}>
              <div className={styles.menuButtonText}>
                Contact
              </div>
            </div>
          </div>
          <div
            className={cx(styles.menuBackdrop, {
              expanded: open
            })}
          ></div>
        </div>
      </div>
    );
  }
}

export default Navbar;
