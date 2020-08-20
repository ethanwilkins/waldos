import React, { Component } from 'react';
import { isAndroid } from 'react-device-detect';
import { Swipeable } from 'react-swipeable';

import imageCarouselArrow from '../images/imageCarouselArrow.svg';
import studioImg1 from '../images/studio_1.jpg';
import studioImg2 from '../images/studio_2.jpg';
import studioImg3 from '../images/studio_3.jpg';

import styles from '../styles/ImageCarousel.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
    
const swipeableConfig = {
        delta: 5,                              // min distance(px) before a swipe starts
        trackTouch: true,                      // track touch input
        trackMouse: true,                      // track mouse input
        rotationAngle: window.orientation      // set a rotation angle
      };

class ImageCarousel extends Component {
  state = {
    imageIndex: 1,
    interactedWith: false
  };
   
  componentDidMount() {
    this.imageSwitch = setInterval(() => {
      const { imageIndex, interactedWith } = this.state;
      if (!interactedWith) {
        this.setState({
          imageIndex: (imageIndex === 3 ? 1 : imageIndex + 1)
        });
      }      
    }, 8000);
  }
  
  componentWillUnmount() {
    clearInterval(this.imageSwitch);
  }
  
  handleLeftButtonClick = () => {
    const { imageIndex } = this.state;
    this.setState({
      imageIndex: (imageIndex === 1 ? 3 : imageIndex - 1),
      interactedWith: true
    });
    // haptic feedback for android
    if (isAndroid) {
      window.navigator.vibrate(1);
    }
  };
  
  handleRightButtonClick = () => {
    const { imageIndex } = this.state;
    this.setState({
      imageIndex: (imageIndex === 3 ? 1 : imageIndex + 1),
      interactedWith: true
    });
    // haptic feedback for android
    if (isAndroid) {
      window.navigator.vibrate(1);
    }
  };
  
  handleSwipe = (direction) => {
    const { imageIndex } = this.state;
    if (direction === 'Left') {
      this.setState({
        imageIndex: (imageIndex === 3 ? 1 : imageIndex + 1),
        interactedWith: true
      });
    }
    else if (direction === 'Right') {
      this.setState({
        imageIndex: (imageIndex === 1 ? 3 : imageIndex - 1),
        interactedWith: true
      });
    }
  };
  
  handleEllipseButtonClick = (imageIndex) => {
    this.setState({
      imageIndex: imageIndex,
      interactedWith: true
    });
  };
  
  render() {
    const { imageIndex } = this.state;
    
    return (
      <Swipeable onSwiped={(eventData) => this.handleSwipe(eventData.dir)} {...swipeableConfig}>
        <div className={styles.imageCarousel}>
          <div className={styles.mobileButtons}>
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
          </div>
          <div className={styles.ellipseButtons}>
            <div className={styles.ellipseButtonsInner}>
              <div
                className={cx(styles.ellipseButton, {
                  ellipseButtonActive: imageIndex === 1
                })}
                onClick={() => this.handleEllipseButtonClick(1)}></div>
              <div
                className={cx(styles.ellipseButton, {
                  ellipseButtonActive: imageIndex === 2
                })}
                onClick={() => this.handleEllipseButtonClick(2)}></div>
              <div
                className={cx(styles.ellipseButton, {
                  ellipseButtonActive: imageIndex === 3
                })}
                onClick={() => this.handleEllipseButtonClick(3)}></div>
            </div>
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
      </Swipeable>
    );
  }
}

export default ImageCarousel;
