import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isAndroid } from 'react-device-detect';
import Scroll from 'react-scroll';

import logo from '../images/logo.svg';
import hamburgerIcon from '../images/hamburgerIcon.svg';
import xIcon from '../images/xIcon.svg';

import styles from '../styles/Navbar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const scroller = Scroll.animateScroll;

const scrollerOptions = {
        duration: 300,
        delay: 50,
        smooth: true
      };

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
    // haptic feedback for android
    if (isAndroid) {
      window.navigator.vibrate(1);
    }
  };
  
  // closes navbar menu if user clicks anywhere outside of navbar or menu
  handleClickOutside = (event) => {
    const { open } = this.state;
    if (open) {
      if (!this.navbar.current.contains(event.target)) {
        this.setState({
          open: false
        });
        // haptic feedback for android
        if (isAndroid) {
          window.navigator.vibrate(1);
        }
      }
    }
  };
  
  handleLogoClick = () => {
    const distanceScrolled = window.pageYOffset;
    // subtracts distance scrolled from 
    scroller.scrollMore(0 - distanceScrolled, scrollerOptions);
    // haptic feedback for android
    if (isAndroid) {
      window.navigator.vibrate(1);
    }
  };
  
  handleInfoButtonClick = () => {
    this.props.handleInfoButtonClick();
    this.setState({
      open: false
    });
    // haptic feedback for android
    if (isAndroid) {
      window.navigator.vibrate(1);
    }
  };
  
  handleContactButtonClick = () => {
    this.props.handleContactButtonClick();
    this.setState({
      open: false
    });
    // haptic feedback for android
    if (isAndroid) {
      window.navigator.vibrate(1);
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
          onClick={this.handleClick}
          className={styles.navbarButtonTouchTarget}></div>
        <div
          className={cx(styles.navbarInner, {
            fadedOut: open
          })}
        >
          <img
            onClick={this.handleLogoClick}
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
            <div
              onClick={this.handleInfoButtonClick}
              className={styles.menuButton}>
              <div className={styles.menuButtonText}>
                Info
              </div>
            </div>
            <div
              onClick={this.handleContactButtonClick}
              className={styles.menuButton}
            >
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

Navbar.propTypes = {
  handleInfoButtonClick: PropTypes.func.isRequired,
  handleContactButtonClick: PropTypes.func.isRequired
};

export default Navbar;
