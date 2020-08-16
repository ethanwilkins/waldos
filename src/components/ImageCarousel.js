import React, { Component } from 'react';
import { isAndroid } from 'react-device-detect';

import imageCarouselArrow from '../images/imageCarouselArrow.svg';
import studioImg1 from '../images/studio_1.jpg';
import studioImg2 from '../images/studio_2.jpg';
import studioImg3 from '../images/studio_3.jpg';

import styles from '../styles/ImageCarousel.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class ImageCarousel extends Component {
  state = {
    imageIndex: 1
  };
  
  handleLeftButtonClick = () => {
    const { imageIndex } = this.state;
    this.setState({
      imageIndex: (imageIndex === 1 ? 3 : imageIndex - 1)
    });
    // haptic feedback for android
    if (isAndroid) {
      window.navigator.vibrate(1);
    }
  };
  
  handleRightButtonClick = () => {
    const { imageIndex } = this.state;
    this.setState({
      imageIndex: (imageIndex === 3 ? 1 : imageIndex + 1)
    });
    // haptic feedback for android
    if (isAndroid) {
      window.navigator.vibrate(1);
    }
  };
  
  render() {
    const { imageIndex } = this.state;
    
    return (
      <div className={styles.imageCarousel}>
        <div
          onClick={this.handleLeftButtonClick}
          className={styles.imageCarouselButtonLeft}
        >
          <img
            src={imageCarouselArrow}
            className={styles.imageCarouselArrowLeft}
            alt="Carousel arrow left"
          />
        </div>
        
        <div
          onClick={this.handleRightButtonClick}
          className={styles.imageCarouselButtonRight}
        >
          <img
            src={imageCarouselArrow}
            className={styles.imageCarouselArrowRight}
            alt="Carousel arrow right"
          />
        </div>

        <img
          src={studioImg1}
          className={cx(styles.carouselImg, {
            fadedOut: imageIndex !== 1
          })}
          alt="Studio"
        />

        <img
          src={studioImg2}
          className={cx(styles.carouselImg, {
            fadedOut: imageIndex !== 2
          })}
          alt="Studio"
        />

        <img
          src={studioImg3}
          className={cx(styles.carouselImg, {
            fadedOut: imageIndex !== 3
          })}
          alt="Studio"
        />
      </div>
    );
  }
}

export default ImageCarousel;
