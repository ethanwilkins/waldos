import React, { Component } from 'react';
import Scroll from 'react-scroll';
import { isAndroid } from 'react-device-detect';
import mobile from 'is-mobile';

import Navbar from '../components/Navbar';
import ImageCarousel from '../components/ImageCarousel';

import scissorsIcon from '../images/scissorsIcon.svg';
import scissorsIconDesktop from '../images/scissorsIconDesktop.svg';
import scissorsIconLargeDesktop from '../images/scissorsIconLargeDesktop.svg';
import scissorsIconLarge from '../images/scissorsIconLarge.svg';
import getInTouch from '../images/getInTouch.svg';
import map from '../images/map.png';

import styles from '../styles/Main.module.scss';

const scroller = Scroll.animateScroll;

const scrollerOptions = {
        duration: 300,
        delay: 50,
        smooth: true
      };

class Main extends Component {
  constructor(props) {
    super(props);
    this.firstDivider = React.createRef();
    this.footer = React.createRef();
  }
  
  handleInfoButtonClick = () => {
    const elementDistanceFromTop = (window.pageYOffset + this.firstDivider.current.getBoundingClientRect().top) - 70;
    const distanceScrolled = window.pageYOffset;
    // subtracts distance scrolled from 
    scroller.scrollMore(elementDistanceFromTop - distanceScrolled, scrollerOptions);
    // haptic feedback for android
    if (isAndroid) {
      window.navigator.vibrate(1);
    }
  };
  
  handleContactButtonClick = () => {
    const elementDistanceFromTop = (window.pageYOffset + this.footer.current.getBoundingClientRect().top) - 70;
    const distanceScrolled = window.pageYOffset;
    // subtracts distance scrolled from 
    scroller.scrollMore(elementDistanceFromTop - distanceScrolled, scrollerOptions);
    // haptic feedback for android
    if (isAndroid) {
      window.navigator.vibrate(1);
    }
  };
  
  render() {
    return (
      <div>
        <Navbar
          handleInfoButtonClick={this.handleInfoButtonClick}
          handleContactButtonClick={this.handleContactButtonClick}
        />
        
        <div className={styles.body}>
          <ImageCarousel />
          
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
        
          <div className={styles.scissorsContainerDesktop}>
            <img
              src={scissorsIconDesktop}
              className={styles.scissorsIconLeftDesktop}
              alt="Scissors icon right"
            />
            <img
              src={scissorsIconDesktop}
              className={styles.scissorsIconRightDesktop}
              alt="Scissors icon right"
            />
          </div>
          
          <div
            ref={this.firstDivider}
            className={styles.lineDividerLeft}></div>
          
          <div className={styles.sectionsContainer}>
            <div className={styles.customerSection}>
              <div className={styles.largeText}>
                Looking For A{!mobile() ? <br/> : ''} Talented Stylist That You Can Trust With Your Hair?
              </div>
              <div className={styles.smallText}>
                We offer haircut, color, and
                <br/>
                highlight services.
              </div>
              <div className={styles.mediumText}>
                For more information, we offer free consultations to schedule appointments and determine cost.
              </div>
              <img
                onClick={this.handleContactButtonClick}
                src={getInTouch}
                className={styles.getInTouch}
                alt="Let's Get In Touch!"
              />
            </div>
            
            <div className={styles.lineDividerRight}></div>
            
            <div className={styles.stylistSection}>
              <div className={styles.largeText}>
                Looking For A Welcoming Studio Space To Rent?
              </div>
              <div className={styles.mediumText}>
                Contact us today for a free consultation on availability and pricing!
              </div>
              <img
                onClick={this.handleContactButtonClick}
                src={getInTouch}
                className={styles.getInTouch}
                alt="Let's Get In Touch!"
              />
              <img
                src={scissorsIconLarge}
                className={styles.scissorsIconLarge}
                alt="Large scissors icon"
              />
              <img
                src={scissorsIconLargeDesktop}
                className={styles.scissorsIconLargeDesktop}
                alt="Large scissors icon"
              />
            </div>
          </div>
          
          <div className={styles.lineDividerLeftLower}></div>
          <div className={styles.lineDividerRightLower}></div>
        </div>
        
        <div
          ref={this.footer}
          className={styles.footer}
        >
          <div className={styles.footerInner}>
            <div className={styles.footerTextContainer}>
              <div className={styles.largeFooterText}>
                Let's Get In Touch!
              </div>
              <div className={styles.footerText}>
                Waldo Stylist Studio
              </div>
              <div className={styles.footerText}>
                Phone number: 919.606.5629
              </div>
              <div className={styles.footerText}>
                Email: Masouraspaul@gmail.com
              </div>
              <div className={styles.footerText}>
                Address: 213 Waldo St. Cary NC 27511
              </div>
              <div className={styles.footerText}>
                All Rights Reserved 2020 ©
              </div>
            </div>
            
            <a
              className={styles.mapLink}
              href="https://www.google.com/maps/dir/Raleigh,+NC/Waldo's+Stylist+Studios,+213+Waldo+St,+Cary,+NC+27511/@35.7734285,-78.745206,13z/data=!3m1!4b1!4m13!4m12!1m5!1m1!1s0x89ac5a2f9f51e0f7:0x6790b6528a11f0ad!2m2!1d-78.6381787!2d35.7795897!1m5!1m1!1s0x89acf3a43f9c2821:0x19c7b7b9e597d3e6!2m2!1d-78.7775206!2d35.7867526"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={map}
                className={styles.map}
                alt="Map"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
