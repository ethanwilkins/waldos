import React, { Component } from 'react';

import mobileHeaderLogoIcon from '../images/mobileHeaderLogoIcon.svg';

import styles from '../styles/Main.module.scss';

class Main extends Component {
  render() {

    return (
      <div>
        <div className={styles.header}>
          <img
            src={mobileHeaderLogoIcon}
            className={styles.mobileHeaderLogoIcon}
            alt="Logo icon"
          />
          <div className={styles.mobileHeaderLogoIconText}>
            W
          </div>
          <div className={styles.hamburgerIcon}>
            <div className={styles.hamburgerIconBar}></div>
            <div className={styles.hamburgerIconBar}></div>
            <div className={styles.hamburgerIconBar}></div>
          </div>
        </div>
        <div className={styles.body}>
          <div className={styles.imageCarousel}>
          
          </div>
          <div className={styles.aboutMe}>
          </div>
        </div>
        <div className={styles.footer}>
        
        </div>
      </div>
    );
  }
}

export default Main;
