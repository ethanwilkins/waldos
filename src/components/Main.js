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
        </div>
        <div className={styles.body}>
          <div className={styles.imageCarousel}>
          
          </div>
          <div className={styles.aboutMe}>
            Waldos Stylist Studios is run by Paul Masouras, who has been in the hairstyling business for many years. (Since 1990 in fact!) Paul owned and operated many businesses during his time in Hilton Head Island. For the past 20 years, he has been styling out of Waldos Stylist Studios in Cary.
          </div>
        </div>
        <div className={styles.footer}>
        
        </div>
      </div>
    );
  }
}

export default Main;
