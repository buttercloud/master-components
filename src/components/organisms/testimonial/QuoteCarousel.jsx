import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import styled from 'styled-components';

import { textType } from '../../../customPropTypes/customPropTypes';
import DoubleQuotesIcon from '../../assets/DoubleQuotesIcon';
import Carousel from '../../molecules/Carousel';

const Container = styled.div`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.backgroundColor};
`;
const LeftBlock = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CenterBlock = styled.div`
  width: 80%;
`;
const RightBlock = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const NavButton = styled.button`
  background-color: transparent;
  border: 0;
  cursor: pointer;
  &:active {
    transform: translateY(1px);
  }
`;
const InnerBlock = styled.div``;
const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledText = styled.p`
  text-align: center;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}rem;
  margin: 0;
  font-weight: 400;
`;
const Quote = styled(StyledText)`
  margin: 25px 50px;
  font-style: italic;
`;
const Quotee = styled(StyledText)``;

const ArrowIcon = (props) => {
  const { transform } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 24"
      width="1em"
      height="1em"
      transform={transform}
    >
      <polygon points="16 12 0 24 7.85 12 0 0 16 12" />
    </svg>
  );
};

ArrowIcon.propTypes = { transform: PropTypes.string };
ArrowIcon.defaultProps = { transform: 'rotate(0)' };

const QuoteCarousel = (props) => {
  const { quotes, quotesIcon, background } = props;

  const carouselRef = useRef(null);

  const scrollRight = (event) => {
    event.preventDefault();
    carouselRef.current.slickNext();
  };

  const scrollLeft = (event) => {
    event.preventDefault();
    carouselRef.current.slickPrev();
  };

  return (
    <Container backgroundColor={background.backgroundColor}>
      <LeftBlock>
        <NavButton onClick={scrollLeft}>
          <ArrowIcon transform="rotate(-180)" />
        </NavButton>
      </LeftBlock>
      <CenterBlock>
        <Carousel
          carouselRef={carouselRef}
          infinite
          autoplay={false}
          slidesToShow={1}
          dots={false}
          arrows={false}
          centerMode={false}
        >
          {
            quotes.map((element) => (
              <InnerBlock>
                <IconContainer>
                  <DoubleQuotesIcon
                    color={quotesIcon?.color || QuoteCarousel.defaultProps.quotesIcon.color}
                  />
                </IconContainer>
                <Quote
                  color={element.quote?.color || 'black'}
                  fontSize={element.quote?.fontSize}
                >
                  {element.quote?.text}
                </Quote>
                <Quotee
                  color={element.quotee?.color || '#9e9fa5'}
                  fontSize={element.quotee?.fontSize}
                >
                  {element.quotee?.text}
                </Quotee>
              </InnerBlock>
            ))
          }
        </Carousel>
      </CenterBlock>
      <RightBlock>
        <NavButton onClick={scrollRight}>
          <ArrowIcon />
        </NavButton>
      </RightBlock>
    </Container>
  );
};

QuoteCarousel.defaultProps = {
  quotes: [],
  quotesIcon: {
    color: '#9e9fa5',
  },
  background: {
    backgroundColor: '#fff',
  },
};

QuoteCarousel.propTypes = {
  /**
   * Quotes array.
   */
  quotes: PropTypes.arrayOf(PropTypes.shape({
    quote: textType.isRequired,
    quotee: textType,
  })),
  quotesIcon: PropTypes.shape({
    color: PropTypes.string,
  }),
  background: PropTypes.shape({
    backgroundColor: PropTypes.string,
  }),
};

export default QuoteCarousel;
