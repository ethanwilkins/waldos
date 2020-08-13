import React, { Component } from 'react';

import mobileHeaderLogoIcon from '../images/mobileHeaderLogoIcon.svg';
import imageCarouselArrow from '../images/imageCarouselArrow.svg';
import studioImg from '../images/studio.png';

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
          
            <div className={styles.imageCarouselButtonLeft}>
              <img
                src={imageCarouselArrow}
                className={styles.imageCarouselArrowLeft}
                alt="Carousel arrow left"
              />
            </div>
            
            <div className={styles.imageCarouselButtonRight}>
              <img
                src={imageCarouselArrow}
                className={styles.imageCarouselArrowRight}
                alt="Carousel arrow right"
              />
            </div>
            
            <img
              src={studioImg}
              className={styles.studioImg}
              alt="Studio image"
            />
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
