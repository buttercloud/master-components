import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Slider from 'react-slick';

// TODO:
// copy css from these 2 files and paste them here.
// then remove the slick-carousel library
// cause it has jquery as a peer dependency
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const StyledSlider = styled(Slider)`
  width: 100%;
  max-width: 100%;
  background-color: transparent;
  padding: 15px 0;
  .slick-slide > div {
    margin: 0 10px;
  }
  .slick-list {
    margin: 0 -10px;
  }
  .slick-slide *:focus{
    outline: none;
  }
`;

const Carousel = (props) => {
  const {
    carouselRef,
    children,
    infinite,
    swipe,
    swipeToSlide,
    autoplay,
    autoplaySpeed,
    speed,
    slidesToShow,
    slidesToScroll,
    centerMode,
    dots,
    arrows,
    asNavFor,
    focusOnSelect,
  } = props;

  let alteredSlidesToShow = slidesToShow;
  if (children.length === undefined || children.length < slidesToShow) {
    alteredSlidesToShow = children.length;
  }
  if (children.length === undefined) {
    alteredSlidesToShow = 1;
  }

  return (
    <StyledSlider
      ref={carouselRef}
      asNavFor={asNavFor?.current}
      accessibility
      infinite={infinite}
      swipe={swipe}
      swipeToSlide={swipeToSlide}
      autoplay={autoplay}
      autoplaySpeed={autoplaySpeed}
      speed={speed}
      slidesToShow={alteredSlidesToShow}
      slidesToScroll={slidesToScroll}
      centerMode={centerMode}
      dots={dots}
      arrows={arrows}
      centerPadding="50px"
      focusOnSelect={focusOnSelect}
    >
      {children}
    </StyledSlider>
  );
};

Carousel.defaultProps = {
  carouselRef: null,
  infinite: true,
  swipe: true,
  swipeToSlide: true,
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  dots: true,
  arrows: true,
  asNavFor: undefined,
  focusOnSelect: true,
};

Carousel.propTypes = {
  /**
   * Carousel Ref.
   */
  carouselRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.element,
    }),
  ]),
  /**
   * Children elements.
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
  /**
   * Enable/disable infinite scrolling
   */
  infinite: PropTypes.bool,
  /**
   * Enable/disable swiping.
   */
  swipe: PropTypes.bool,
  /**
   * Enable/disable swiping to change slides position instead of just moving 1 block.
   */
  swipeToSlide: PropTypes.bool,
  /**
   * Enable/disable autoplay.
   */
  autoplay: PropTypes.bool,
  /**
   * Delay between auto scrolls in milliseconds.
   */
  autoplaySpeed: PropTypes.number,
  /**
   * Animation speed in milliseconds.
   */
  speed: PropTypes.number,
  /**
   * Number of slides to show in one frame.
   */
  slidesToShow: PropTypes.number,
  /**
   * Number of slides to scroll at once.
   */
  slidesToScroll: PropTypes.number,
  /**
   * Enable/disable centering the current slide.
   */
  centerMode: PropTypes.bool,
  /**
   * Show/hide dots
   */
  dots: PropTypes.bool,
  /**
   * Show/hide arrows.
   */
  arrows: PropTypes.bool,
  /**
   * Provide ref for another slider to sync them
   */
  asNavFor: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({
      current: PropTypes.element,
    }),
  ]),
  /**
   * Go to the clicked on slide
   */
  focusOnSelect: PropTypes.bool,
};

export default Carousel;
