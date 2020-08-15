import React, { Component } from 'react';

import logo from '../images/logo.svg';
import hamburgerIcon from '../images/hamburgerIcon.svg';
import xIcon from '../images/xIcon.svg';

import styles from '../styles/Navbar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Navbar extends Component {
  state = {
    open: false
  };
  
  handleClick = () => {
    const { open } = this.state;
    this.setState({
      open: !open
    });
  };
  
  render() {
    const { open } = this.state;
    
    return (
      <div
        onClick={this.handleClick}
        className={styles.navbar}
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
        </div>
      </div>
    );
  }
}

export default Navbar;
