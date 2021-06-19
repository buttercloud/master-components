import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Dinero from 'dinero.js';

import AddToCartButton from '../atoms/AddToCartButton';
import TextareaWithLabel from '../molecules/TextareaWithLabel';
import NumberInputWithCircleActionButtons from '../molecules/NumberInputWithCircleActionButtons';
import ImageGalleryWithThumbnails from '../molecules/ImageGalleryWithThumbnails';

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
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => props.color};
`;
const Price = styled.h3`
  margin: 0;
  font-weight: 500;
  line-height: 1.2;
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => props.color};
`;
const Description = styled.p`
  padding: 0;
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => props.color};
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
  margin: 0;
  font-weight: 500;
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => props.color};
`;
const Label = styled.label`
  margin-left: 3px;
  margin-right: 15px;
  /*font-weight: 500;*/
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => props.color};
`;
const PriceLabel = styled.label`
  font-size: ${(props) => props.fontSize}rem;
  color: ${(props) => props.color};
  margin-top: 0px;
  padding-top: 0px;
  line-height: 5px;
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
    background-color: ${(props) => props.filledColor};
    border-color: ${(props) => props.filledColor};
  }
`;
const Checkbox = styled(StyledInput)`
  &:checked {
    background-color: ${(props) => props.filledColor};
    border-color: ${(props) => props.filledColor};
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
    // styles props
    nameFontSize,
    nameColor,
    priceFontSize,
    priceColor,
    descriptionFontSize,
    descriptionColor,
    optionTypeSubheaderSize,
    optionTypeSubheaderColor,
    optionValueLabelSize,
    optionValueLabelColor,
    propertySubheaderSize,
    propertySubheaderColor,
    propertyValueLabelSize,
    propertyValueLabelColor,
    filledInputColor,
    // methods
    addToCart,
  } = props;

  const [currentVariant, setCurrentVariant] = useState(masterVariant);
  const [customOptions, setCustomOptions] = useState({});
  const [customProperties, setCustomProperties] = useState({});

  const [specialRequests, setSpecialRequests] = useState('');
  const [quantity, setQuantity] = useState(1);

  console.log('id: ', id);

  useEffect(() => {
    // Fill in customOptions
    const tempOptions = {};
    masterVariant.options.forEach((type) => {
      tempOptions[type.name] = type.value;
    });

    setCustomOptions(tempOptions);

    // Fill in customProperties
    const tempProperties = {};
    properties.forEach((property) => {
      tempProperties[property.name] = [];
    });

    setCustomProperties(tempProperties);
  }, []);

  useEffect(() => {
    const foundVariant = variants.find((variant) => {
      let found = true;

      variant.options.every((option) => {
        if (customOptions[option.name] !== option.value) {
          found = false;
          return false;
        }
        return true;
      });

      return found;
    });

    let defaultImage = masterVariant.imagesUrls?.[0];

    if (foundVariant) {
      setCurrentVariant(foundVariant);
      defaultImage = foundVariant.imagesUrls?.[0] || defaultImage;
    } else {
      setCurrentVariant(masterVariant);
    }

    console.log('defaultImage: ', defaultImage);
    // setCurrentImage(defaultImage);
  }, [customOptions]);

  const handleOptionChange = (event: SyntheticMouseEvent<HTMLElement>) => {
    const optionName = event.target.name;
    const optionValue = event.target.value;
    setCustomOptions({
      ...customOptions,
      [optionName]: optionValue,
    });
  };

  // currently for checkboxes
  const handlePropertyChange = (event: SyntheticMouseEvent<HTMLElement>) => {
    const { target } = event;
    const targetName = target.name;
    const targetValue = target.value;
    const customProperty = Array.from(customProperties[targetName]);
    const index = customProperty.findIndex((value) => value.name === targetValue);

    if (index === -1) {
      const originalProperty = properties.find((property) => property.name === targetName);

      // reached maximum amount required
      if (originalProperty.maxRequired === customProperty.length) return;

      const originalPropertyValue = originalProperty.values.find(
        (value) => value.name === targetValue,
      );

      customProperty.splice(index, 0, originalPropertyValue);

      console.log('maxRequired: ', originalProperty.maxRequired);
      console.log('customProperty.length: ', customProperty.length);
      console.log('customProperty: ', customProperty);
    } else {
      customProperty.splice(index, 1);
    }

    setCustomProperties({
      ...customProperties,
      [targetName]: customProperty,
    });
  };

  const ImagesBlock = () => {
    let urls;

    if (currentVariant.imagesUrls.length > 0) {
      urls = currentVariant.imagesUrls;
    } else {
      urls = masterVariant.imagesUrls;
    }

    return (
      <ImageGalleryWithThumbnails
        srcs={urls}
        thumbnailListLocation="bottom"
      />
    );
  };

  const TitleBlock = () => (
    <Title fontSize={nameFontSize} color={nameColor}>
      {currentVariant?.name}
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
      <Price fontSize={priceFontSize} color={priceColor}>
        {priceAmount.toFormat()}
      </Price>
    );
  };

  const DescriptionBlock = () => {
    const descriptionDisplay = currentVariant.description || masterVariant.description;

    return (
      <Description fontSize={descriptionFontSize} color={descriptionColor}>
        {descriptionDisplay}
      </Description>
    );
  };

  const OptionTypesBlock = () => optionTypes.map((type) => {
    const defaultValue = masterVariant.options.find((o) => o.name === type.name).value;

    console.log('defaultValue: ', defaultValue);

    return (
      <OptionType key={Math.random().toString().slice(10)}>
        <Subheader
          fontSize={optionTypeSubheaderSize}
          color={optionTypeSubheaderColor}
        >
          {type.name}
        </Subheader>
        <OptionValues>
          {
            type.values.map((typeValue) => (
              <OptionValue key={Math.random().toString().slice(10)}>
                <RadioButton
                  type="radio"
                  name={type.name}
                  id={typeValue}
                  value={typeValue}
                  filledColor={filledInputColor}
                  // defaultChecked={(defaultValue === typeValue)}
                  onChange={handleOptionChange}
                  checked={customOptions[type.name] === typeValue}
                />
                <Label
                  htmlFor={typeValue}
                  fontSize={optionValueLabelSize}
                  color={optionValueLabelColor}
                >
                  {typeValue}
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
          fontSize={propertySubheaderSize}
          color={propertySubheaderColor}
        >
          {property.name}
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

              const exists = customProperties[property.name]?.find?.(
                (value) => value.name === propertyValue.name,
              );
              const isChecked = !!exists;

              return (
                <PropertyValue key={Math.random().toString().slice(10)}>
                  <CustomInput
                    type={property.type}
                    name={property.name}
                    id={propertyValue.name}
                    value={propertyValue.name}
                    filledColor={filledInputColor}
                    onChange={handlePropertyChange}
                    checked={isChecked}
                  />
                  <PropertyLabelsContainer>
                    <Label
                      htmlFor={propertyValue.name}
                      fontSize={propertyValueLabelSize}
                      color={propertyValueLabelColor}
                    >
                      {propertyValue.name}
                    </Label>
                    <PriceLabel
                      htmlFor={propertyValue.name}
                      fontSize={propertyValueLabelSize}
                      color={priceColor}
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
    <Container>
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
            addToCart={addToCart}
            label="Add to Cart"
            fontSize={1.3}
            backgroundColor="#1e774c"
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

  nameFontSize: 2,
  nameColor: 'black',
  priceFontSize: 1.3,
  priceColor: 'black',
  descriptionFontSize: 1,
  descriptionColor: 'black',
  optionTypeSubheaderSize: 1.4,
  optionTypeSubheaderColor: 'black',
  optionValueLabelSize: 1,
  optionValueLabelColor: 'black',
  propertySubheaderSize: 1.2,
  propertySubheaderColor: 'black',
  propertyValueLabelSize: 1,
  propertyValueLabelColor: 'black',
  filledInputColor: 'black',
};

ProductDetails.propTypes = {
  /**
  * Master Variant
  */
  masterVariant: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.shape({
      cents: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      precision: PropTypes.number.isRequired,
    }),
    imagesUrls: PropTypes.arrayOf(PropTypes.string),
    options: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    })),
  }).isRequired,
  /**
  * Product Variants
  */
  variants: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.shape({
      cents: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      precision: PropTypes.number.isRequired,
    }),
    // TODO: Maybe change to image type of `alt` and `src`
    images: PropTypes.arrayOf(PropTypes.string),
    options: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string,
    })),
  })),
  /**
  * OptionTypes.
  */
  optionTypes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.string),
  })),
  /**
  * Properties
  */
  properties: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    values: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      price: PropTypes.shape({
        cents: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired,
        precision: PropTypes.number.isRequired,
      }),
    })),
    type: PropTypes.string,
    minRequired: PropTypes.number,
    maxRequired: PropTypes.number,
  })),
  /**
  * Product name font size.
  */
  nameFontSize: PropTypes.number,
  /**
  * Product name color.
  */
  nameColor: PropTypes.string,
  /**
  * Product price font size.
  */
  priceFontSize: PropTypes.number,
  /**
  * Product price color.
  */
  priceColor: PropTypes.string,
  /**
  * Product description font size.
  */
  descriptionFontSize: PropTypes.number,
  /**
  * Product description color.
  */
  descriptionColor: PropTypes.string,
  /**
  * OptionType label font size in rem
  */
  optionTypeSubheaderSize: PropTypes.number,
  /**
  * OptionType label color
  */
  optionTypeSubheaderColor: PropTypes.string,
  /**
  * Option value font size in rem
  */
  optionValueLabelSize: PropTypes.number,
  /**
  * Option value label color
  */
  optionValueLabelColor: PropTypes.string,
  /**
  * Property label font size in rem
  */
  propertySubheaderSize: PropTypes.number,
  /**
  * Property label color
  */
  propertySubheaderColor: PropTypes.string,
  /**
  * Property value font size in rem
  */
  propertyValueLabelSize: PropTypes.number,
  /**
  * Property value color
  */
  propertyValueLabelColor: PropTypes.string,
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
    name: PropTypes.string,
    values: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.string,
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
  * A method to add the current item to the cart.
  */
  addToCart: PropTypes.func.isRequired,
};

export default ProductDetails;
