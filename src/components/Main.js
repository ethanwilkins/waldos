import React, { Component } from 'react';

import logo from '../images/logo.svg';
import hamburgerIcon from '../images/hamburgerIcon.svg';
import imageCarouselArrow from '../images/imageCarouselArrow.svg';
import studioImg from '../images/studio.png';
import scissorsIcon from '../images/scissorsIcon.svg';
import scissorsIconLarge from '../images/scissorsIconLarge.svg';

import styles from '../styles/Main.module.scss';

class Main extends Component {
  render() {

    return (
      <div>
        <div className={styles.header}>
          <img
            src={logo}
            className={styles.logo}
            alt="Logo icon"
          />
          <img
            src={hamburgerIcon}
            className={styles.hamburgerIcon}
            alt="Logo icon"
          />
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
              className={styles.carouselImg}
              alt="Studio"
            />
          </div>
          <div className={styles.aboutMe}>
            <p>
              Waldos Stylist Studios is run by Paul Masouras, who has been in the hairstyling business for many years. (Since 1990 in fact!)
            </p>
            <p>
              Paul owned and operated many businesses during his time in Hilton Head Island. For the past 20 years, he has been styling out of Waldos Stylist Studios in Cary.
            </p>
          </div>
          
          <div className={styles.scissorsDivider}>
            <img
              src={scissorsIcon}
              className={styles.scissorsIconLeft}
              alt="Scissors icon right"
            />
            <img
              src={scissorsIcon}
              className={styles.scissorsIconRight}
              alt="Scissors icon right"
            />
          </div>
        </div>
        
        
        
        <div className={styles.footer}>
        
        </div>
      </div>
    );
  }
}

export default Main;
