// @flow
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dinero from 'dinero.js';
import AddToCartButton from '../atoms/AddToCartButton';
import TextareaWithLabel from '../molecules/TextareaWithLabel';
import NumberInputWithCircleActionButtons from '../molecules/NumberInputWithCircleActionButtons';
import ImageGalleryWithThumbnails from '../molecules/ImageGalleryWithThumbnails';
import {
  textType,
  imageType,
  buttonType,
  moneyType,
} from '../../customPropTypes/customPropTypes';

// TODO
// add default values for fontSize, color, ...

const DeviceWidth = 650;

// --MainContainers--
const Container = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: ${DeviceWidth}px) {
    align-items: center;
    flex-direction: column;
  }
`;
const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0.50;
  max-width: 40vw;
  @media (max-width: ${DeviceWidth}px) {
    flex: 1;
    width: 100%;
    max-width: 100vw;
  }
`;
const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  flex: 0.50;
  @media (max-width: ${DeviceWidth}px) {
    flex: 1;
  }
`;
// --Product--
const Title = styled.h2`
  font-weight: 600;
  line-height: 3rem;
  margin: 0;
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color }) => color};
`;
const Price = styled.h3`
  margin: 0;
  font-weight: 500;
  line-height: 1.2;
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color }) => color};
`;
const Description = styled.p`
  padding: 0;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color }) => color};
`;
// --OptionType--
const OptionType = styled.div``;
const OptionValues = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const OptionValue = styled.div``;
// --Property--
const Property = styled.div``;
const PropertyValues = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const PropertyValue = styled.div`
  display: flex;
`;
const PropertyLabelsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3px;
  margin-right: 15px;
`;
// --Other--
const Subheader = styled.p`
  margin: 10px 0;
  font-weight: 500;
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color }) => color};
`;
const Label = styled.label`
  margin-left: 3px;
  margin-right: 15px;
  /*font-weight: 500;*/
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color }) => color};
`;
const PriceLabel = styled.label`
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color }) => color};
  line-height: 5px;
  margin: 5px 0;
`;
const StyledInput = styled.input`
  appearance: none;
  margin-top: 5px;
  width: 13px;
  height: 13px;
  border: 1px solid;
`;
const RadioButton = styled(StyledInput)`
  border-radius: 50%;
  &:checked {
    background-color: ${({ filledColor }) => filledColor};
    border-color: ${({ filledColor }) => filledColor};
  }
`;
const Checkbox = styled(StyledInput)`
  &:checked {
    background-color: ${({ filledColor }) => filledColor};
    border-color: ${({ filledColor }) => filledColor};
  }
`;
const QuantityAndCartButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
`;

const ProductDetails = (props) => {
  const {
    id,
    showSpecialRequests,
    maxQuantity,
    masterVariant,
    optionTypes,
    properties,
    variants,
    filledInputColor,
    addToCartButton,
  } = props;

  const [currentVariant, setCurrentVariant] = useState(masterVariant);
  const [customOptions, setCustomOptions] = useState({});
  const [customProperties, setCustomProperties] = useState({});

  const [specialRequests, setSpecialRequests] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Fill in customOptions
    const tempOptions = {};
    masterVariant.options?.forEach((type) => {
      tempOptions[type.name.text] = type.value.text;
    });

    setCustomOptions(tempOptions);

    // Fill in customProperties
    const tempProperties = {};
    properties.forEach((property) => {
      tempProperties[property.name.text] = [];
    });

    setCustomProperties(tempProperties);
  }, []);

  useEffect(() => {
    const foundVariant = variants.find((variant) => {
      let found = true;

      variant.options?.every((option) => {
        if (customOptions[option.name.text] !== option.value.text) {
          found = false;
          return false;
        }
        return true;
      });

      return found;
    });

    if (foundVariant) {
      setCurrentVariant(foundVariant);
    } else {
      setCurrentVariant(masterVariant);
    }
  }, [customOptions]);

  const handleOptionChange = (event) => {
    const optionName = event.target.name;
    const optionValue = event.target.value;
    setCustomOptions({
      ...customOptions,
      [optionName]: optionValue,
    });
  };

  // currently for checkboxes
  const handlePropertyChange = (event) => {
    const { target } = event;
    const targetName = target.name;
    const targetValue = target.value;
    const customProperty = Array.from(customProperties[targetName]);
    const index = customProperty.findIndex((value) => value.name.text === targetValue);

    if (index === -1) {
      const originalProperty = properties.find((property) => property.name.text === targetName);

      // reached maximum amount required
      if (originalProperty.maxRequired === customProperty.length) return;

      const originalPropertyValue = originalProperty.values.find(
        (value) => value.name.text === targetValue,
      );

      customProperty.splice(index, 0, originalPropertyValue);
    } else {
      customProperty.splice(index, 1);
    }

    setCustomProperties({
      ...customProperties,
      [targetName]: customProperty,
    });
  };

  const ImagesBlock = () => {
    let imagesToShow;

    if (currentVariant.images?.length > 0) {
      imagesToShow = currentVariant.images;
    } else {
      imagesToShow = masterVariant.images;
    }

    return (
      <ImageGalleryWithThumbnails
        images={imagesToShow}
        thumbnailListLocation="bottom"
      />
    );
  };

  const TitleBlock = () => (
    <Title
      fontSize={currentVariant?.name?.fontSize}
      color={currentVariant?.name?.color}
    >
      {currentVariant?.name.text}
    </Title>
  );

  const PriceBlock = () => {
    const amount = currentVariant?.price?.cents || masterVariant.price.cents;
    const currency = currentVariant?.price?.currency || masterVariant.price.currency;
    const precision = currentVariant?.price?.precision || masterVariant.price.precision;

    let priceAmount = Dinero({
      amount: parseInt(amount, 10),
      currency,
      precision,
    });

    // Add all price from custom properties
    Object.values(customProperties).forEach((property) => {
      property.forEach((value) => {
        if (value.price) {
          priceAmount = priceAmount.add(Dinero({
            amount: parseInt(value.price.cents, 10),
            currency: value.price.currency,
            precision: value.price.precision,
          }));
        }
      });
    });

    return (
      <Price
        fontSize={currentVariant?.price?.fontSize}
        color={currentVariant?.price?.color}
      >
        {priceAmount.toFormat()}
      </Price>
    );
  };

  const DescriptionBlock = () => {
    const descriptionDisplay = currentVariant.description?.text || masterVariant.description?.text;
    const descriptionFontSize = currentVariant.description?.fontSize;
    const descriptionColor = currentVariant.description?.color;

    return (
      <Description
        fontSize={descriptionFontSize}
        color={descriptionColor}
      >
        {descriptionDisplay}
      </Description>
    );
  };

  const OptionTypesBlock = () => optionTypes.map((type) => {
    const defaultValue = masterVariant.options?.find((o) => o.name.text === type.name.text)?.value;

    console.log(defaultValue);

    return (
      <OptionType key={Math.random().toString().slice(10)}>
        <Subheader
          fontSize={type.name?.fontSize || 1.4}
          color={type.name?.color || '#000'}
        >
          {type.name?.text}
        </Subheader>
        <OptionValues>
          {
            type.values.map((typeValue) => (
              <OptionValue key={Math.random().toString().slice(10)}>
                <RadioButton
                  type="radio"
                  name={type.name.text}
                  id={typeValue.text}
                  value={typeValue.text}
                  filledColor={filledInputColor}
                  // defaultChecked={(defaultValue === typeValue)}
                  onChange={handleOptionChange}
                  checked={customOptions[type.name.text] === typeValue.text}
                />
                <Label
                  htmlFor={typeValue.text}
                  fontSize={typeValue.fontSize}
                  color={typeValue.color}
                >
                  {typeValue.text}
                </Label>
              </OptionValue>
            ))
          }
        </OptionValues>
      </OptionType>
    );
  });

  const PropertiesBlock = () => properties.map((property) => {
    let CustomInput;
    if (property.type === 'radio') {
      CustomInput = RadioButton;
    } else if (property.type === 'checkbox') {
      CustomInput = Checkbox;
    }

    return (
      <Property key={Math.random().toString().slice(10)}>
        <Subheader
          fontSize={property.name.fontSize}
          color={property.name.color}
        >
          {property.name.text}
        </Subheader>
        <PropertyValues>
          {
            property.values.map((propertyValue) => {
              let propertyValueAmount;
              let propertyValueAmountDisplay = '';

              if (propertyValue.price) {
                propertyValueAmount = Dinero({
                  amount: parseInt(propertyValue.price.cents, 10),
                  currency: propertyValue.price.currency,
                  precision: propertyValue.price.precision,
                });

                if (propertyValueAmount.isPositive()) {
                  propertyValueAmountDisplay = `+ ${propertyValueAmount.toFormat()}`;
                } else {
                  propertyValueAmountDisplay = propertyValueAmount.toFormat();
                }
              }

              const exists = customProperties[property.name.text]?.find?.(
                (value) => value.name.text === propertyValue.name.text,
              );
              const isChecked = !!exists;

              return (
                <PropertyValue key={Math.random().toString().slice(10)}>
                  <CustomInput
                    type={property.type}
                    name={property.name.text}
                    id={propertyValue.name.text}
                    value={propertyValue.name.text}
                    filledColor={filledInputColor}
                    onChange={handlePropertyChange}
                    checked={isChecked}
                  />
                  <PropertyLabelsContainer>
                    <Label
                      htmlFor={propertyValue.name.text}
                      fontSize={propertyValue.name.fontSize}
                      color={propertyValue.name.color}
                    >
                      {propertyValue.name.text}
                    </Label>
                    <PriceLabel
                      htmlFor={propertyValue.name.text}
                      fontSize={propertyValue.price?.fontSize}
                      color={propertyValue.price?.color}
                    >
                      {propertyValueAmountDisplay}
                    </PriceLabel>
                  </PropertyLabelsContainer>
                </PropertyValue>
              );
            })
          }
        </PropertyValues>
      </Property>
    );
  });

  return (
    <Container id={id}>
      <ImagesContainer>
        <ImagesBlock />
      </ImagesContainer>
      <ProductInfoContainer>
        <TitleBlock />
        <PriceBlock />
        <DescriptionBlock />
        <OptionTypesBlock />
        <PropertiesBlock />
        {
          showSpecialRequests
            ? (
              <TextareaWithLabel
                label="Special Requests?"
                labelColor="purple"
                placeholder="Add them here. We'll do our best to make it happen"
                value={specialRequests}
                setValue={setSpecialRequests}
              />
            ) : null
          }
        <QuantityAndCartButtonsContainer>
          {
            maxQuantity > 1
              ? (
                <NumberInputWithCircleActionButtons
                  max={maxQuantity}
                  value={quantity}
                  setValue={setQuantity}
                />
              ) : null
          }
          <AddToCartButton
            addToCart={addToCartButton?.onClick}
            label={addToCartButton?.text}
            fontSize={addToCartButton?.fontSize || 1.3}
            backgroundColor={addToCartButton?.backgroundColor}
            color={addToCartButton?.color}
          />
        </QuantityAndCartButtonsContainer>
      </ProductInfoContainer>
    </Container>
  );
};

ProductDetails.defaultProps = {
  options: [],
  showSpecialRequests: true,
  maxQuantity: 20,

  optionTypes: [],
  properties: [],
  variants: [],

  // nameFontSize: 2,
  // nameColor: 'black',
  // priceFontSize: 1.3,
  // priceColor: 'black',
  // descriptionFontSize: 1,
  // descriptionColor: 'black',
  // optionTypeSubheaderSize: 1.4,
  // optionTypeSubheaderColor: 'black',
  // optionValueLabelSize: 1,
  // optionValueLabelColor: 'black',
  // propertySubheaderSize: 1.2,
  // propertySubheaderColor: 'black',
  // propertyValueLabelSize: 1,
  // propertyValueLabelColor: 'black',
  filledInputColor: 'black',
};

ProductDetails.propTypes = {
  /**
   * Master Variant
   */
  masterVariant: PropTypes.shape({
    name: textType,
    description: textType,
    price: moneyType,
    images: PropTypes.arrayOf(imageType),
    options: PropTypes.arrayOf(PropTypes.shape({
      name: textType,
      value: textType,
    })),
  }).isRequired,
  /**
   * Product Variants
   */
  variants: PropTypes.arrayOf(PropTypes.shape({
    name: textType,
    description: textType,
    price: moneyType,
    images: PropTypes.arrayOf(imageType),
    options: PropTypes.arrayOf(PropTypes.shape({
      name: textType,
      value: textType,
    })),
  })),
  /**
   * OptionTypes.
   */
  optionTypes: PropTypes.arrayOf(PropTypes.shape({
    name: textType,
    values: PropTypes.arrayOf(textType),
  })),
  /**
   * Properties
   */
  properties: PropTypes.arrayOf(PropTypes.shape({
    name: textType,
    values: PropTypes.arrayOf(PropTypes.shape({
      name: textType,
      price: moneyType,
    })),
    type: PropTypes.string,
    minRequired: PropTypes.number,
    maxRequired: PropTypes.number,
  })),
  /**
   * Filled checkbox/radio input color
   */
  filledInputColor: PropTypes.string,

  /**
   * Product ID.
   */
  id: PropTypes.string.isRequired,
  /**
   * Product options
   */
  options: PropTypes.arrayOf(PropTypes.shape({
    name: textType,
    values: PropTypes.arrayOf(
      PropTypes.shape({
        name: textType,
        price: moneyType,
      }),
    ),
    type: PropTypes.string,
  })),
  /**
   * Show/hide Special Requests.
   */
  showSpecialRequests: PropTypes.bool,
  /**
   * Maximum number of quantity a user can order. If its 1, quantity block will be hidden.
   */
  maxQuantity: PropTypes.number,
  /**
   * Add to cart button.
   */
  addToCartButton: buttonType.isRequired,
};

export default ProductDetails;
