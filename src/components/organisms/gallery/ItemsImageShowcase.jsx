import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {
  buttonType,
  imageType,
  textType,
} from '../../../customPropTypes/customPropTypes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px 0;
`;
const Title = styled.h6`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color }) => color};
`;
const Subtitle = styled.p`
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color }) => color};
  margin-bottom: 50px;
`;
const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
`;
const ItemImage = styled.img`
  max-width: 100%;
  height: auto;
  border-style: none;
  padding: 0;
  margin: 0;
  vertical-align: middle;
  transform: scale(1);
  transition: transform 0.6s cubic-bezier(0.28, 0, 0.18, 1);
`;
const Item = styled.div`
  margin: 15px;
  overflow: hidden;
  position: relative;
  width: 100%;
  height: auto;
  @media (min-width: 768px) {
    width: 25%;
  }
  &:hover ${ItemImage} {
    transform: scale(1.05);
  }
`;
const ItemButton = styled.div`
  position: absolute;
  text-align: ${({ textAlign }) => textAlign};
  top: 50%;
  left: 50%;
  width: 70%;
  background-color: ${({ backgroundColor }) => backgroundColor};;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.06);
  transform: translate(-50%, -50%);
  cursor: pointer;
`;
const ItemButtonText = styled.h3`
  padding: 15px 0;
  margin: 0;
  font-weight: 500;
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color }) => color};
`;

const ItemsImageShowcase = (props) => {
  const { title, subtitle, items } = props;

  return (
    <Container>
      <Title
        color={title.color}
        fontSize={title.fontSize}
        textAlign={title.textAlign}
      >
        {title.text}
      </Title>
      <Subtitle
        color={subtitle.color}
        fontSize={subtitle.fontSize}
        textAlign={subtitle.textAlign}
      >
        {subtitle.text}
      </Subtitle>
      <Items>
        {
          items?.map((item) => (
            <Item>
              <ItemImage src={item.image?.src} alt={item.image?.alt || ''} />
              <ItemButton
                onClick={item.actionButton?.onClick}
                backgroundColor={item.actionButton?.backgroundColor}
                textAlign={item.actionButton?.textAlign}
              >
                <ItemButtonText
                  color={item.actionButton?.color}
                  fontSize={item.actionButton?.fontSize}
                >
                  {item.actionButton?.text}
                </ItemButtonText>
              </ItemButton>
            </Item>
          ))
        }
      </Items>
    </Container>
  );
};

ItemsImageShowcase.defaultProps = {
  title: {
    text: '',
    color: 'black',
    fontSize: 1,
  },
  subtitle: {
    text: '',
    color: 'black',
    fontSize: 1,
  },
};

ItemsImageShowcase.propTypes = {
  /**
   * Title
   */
  title: textType,
  /**
   * Subtitle
   */
  subtitle: textType,
  /**
   * Items to show.
   */
  items: PropTypes.arrayOf(PropTypes.shape({
    image: imageType,
    actionButton: buttonType,
  })).isRequired,
};

export default ItemsImageShowcase;
