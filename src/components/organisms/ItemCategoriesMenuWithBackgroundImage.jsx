import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import {
  textType,
  imageType,
  // buttonType,
  // moneyType,
} from '../../customPropTypes/customPropTypes';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Image = styled.img`
  height: auto;
  max-width: 100%;
  vertical-align: middle;
  border-style: none;
  transform: scale(1);
  transition: transform 0.6s cubic-bezier(0.28, 0, 0.18, 1);
`;
const Category = styled.button`
  display: flex;
  ${({ justifyContent }) => justifyContent === 'left' && css`
    justify-content: flex-start;
  `}
  ${({ justifyContent }) => justifyContent === 'center' && css`
    justify-content: center;
  `}
  ${({ justifyContent }) => justifyContent === 'right' && css`
    justify-content: flex-end;
  `}
  position: relative;
  width: 100%;
  height: auto;
  @media (min-width: 768px) {
    width: 50%;
  }
  overflow: hidden;
  padding: 0;
  margin: 0;
  border: 0;
  cursor: pointer;
  &:hover ${Image} {
   transform: scale(1.05);
  }
`;
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  transition: all 0.2s ease-in-out;
  background-color: rgba(0, 0, 0, 0.3);
  &:hover {
    background-color: transparent;
  }
`;
const Caption = styled.div`
  position: absolute;
  top: 50%;
  padding: 0 50px;
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
  font-size: ${({ fontSize }) => fontSize}rem;
`;
const Separator = styled.div`
  height: 1px;
  position: relative;
  width: 30px;
  display: block;
  margin: 15px 0 0;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

const DEFAULTS = {
  category: {
    name: {
      color: '#000',
      fontSize: 1.3,
    },
  },
};

const ItemCategoriesMenuWithBackgroundImage = (props) => {
  const { categories } = props;

  return (
    <Container>
      {
        categories?.map((category) => (
          <Category
            justifyContent={category.name?.textAlign}
            onClick={category.onClick}
          >
            <Image src={category.image?.src} alt={category.image?.alt || ''} />
            <Overlay />
            <Caption
              textAlign={category.name?.textAlign}
              color={category.name?.color || DEFAULTS.category.name.color}
              fontSize={category.name?.fontSize || DEFAULTS.category.name.fontSize}
            >
              {category.name?.text}
              <Separator
                backgroundColor={category.name?.color || DEFAULTS.category.name.color}
              />
            </Caption>
          </Category>
        ))
      }
    </Container>
  );
};

ItemCategoriesMenuWithBackgroundImage.defaultProps = {};

ItemCategoriesMenuWithBackgroundImage.propTypes = {
  /**
   * Items categories.
   */
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: textType,
    onClick: PropTypes.func.isRequired,
    image: imageType.isRequired,
  })).isRequired,
};

export default ItemCategoriesMenuWithBackgroundImage;
