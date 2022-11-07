import Dinero from 'dinero.js';
import PropTypes from 'prop-types';
import React, { useEffect,useState } from 'react';
import styled, { css } from 'styled-components';

import {
  backgroundType,
  buttonType,
  imageType,
  moneyType,
  textType,
} from '../../../customPropTypes/customPropTypes';
import {
  StyledContainer,
  StyledH4,
  StyledH5,
  StyledLabel,
  StyledParagraph,
} from '../../assets/customStyledComponents';

const variantType = PropTypes.shape({
  name: textType,
  description: textType,
  price: moneyType,
  images: PropTypes.arrayOf(imageType),
  options: PropTypes.arrayOf(PropTypes.shape({
    name: textType,
    value: textType,
  })),
});

const propertyType = PropTypes.shape({
  name: textType,
  values: PropTypes.arrayOf(PropTypes.shape({
    name: textType,
    price: moneyType,
  })),
  type: PropTypes.string,
  minRequired: PropTypes.number,
  maxRequired: PropTypes.number,
});

const optionTypeType = PropTypes.shape({
  name: textType,
  values: PropTypes.arrayOf(textType),
});

const Container = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Header = styled.div`
  display: flex;
  width: 100%;
  border-radius: 8px 8px 0 0;
  padding: 120px 0;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
`;
const Body = styled.div`
  max-width: 100%;
  padding: 30px 15px;
`;
const BodyTopInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const TitleAndPriceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled(StyledH4)`
  margin: 0;
`;
const Price = styled(StyledParagraph)`
  margin: 0;
`;
const Description = styled(StyledParagraph)``;
const BodyVariations = styled.div`
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const OptionTypesContainer = styled.div``;
const OptionType = styled.div`
  display: flex;
  align-items: center;
`;
const Subheader = styled(StyledH5)`
  margin-right: 15px;
  font-weight: 700;
`;
const OptionValues = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const OptionValue = styled.div``;
const OptionValueButton = styled.button`
  appearance: none;
  padding: 5px;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color }) => color};
  ${({ checked }) => checked && css`
    background-color: ${({ filledColor }) => filledColor};
    border-color: ${({ filledColor }) => filledColor};
    color: white;
    border-radius: 7px;
  `}
`;
const PropertiesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
`;
const Property = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.8rem;
  border: 1;
  width: 30%;
  @media (max-width: 770px) {
    width: 47%;
  }
  @media (max-width:  500px) {
    width: 100%;
  }
`;
const PropertyValues = styled.div`
  display: flex;
  flex-direction: column;
`;
const PropertyValue = styled.div`
  display: flex;
  align-items: center;
`;
const PropValLabel = styled(StyledLabel)`
  margin: 0;
`;
const PropValPrice = styled(StyledLabel)`
  margin: 0;
  margin-left: auto;
`;
const CustomInput = styled.input`
  appearance: none;
  width: 13px;
  height: 13px;
  border: 1px solid;
`;
const RadioButton = styled(CustomInput)`
  border-radius: 50%;
  &:checked {
    background-color: ${({ filledColor }) => filledColor};
    border-color: ${({ filledColor }) => filledColor};
  }
`;
const Checkbox = styled(CustomInput)`
  &:checked {
    background-color: ${({ filledColor }) => filledColor};
    border-color: ${({ filledColor }) => filledColor};
  }
`;
const BodyControls = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;
const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  color: #515151;
`;
const QuantityActionButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: inherit;
  margin: 0;
  padding: 0;
  border: 1px solid rgba(0, 0, 0, 0.1);
  &:active {
    transform: ${(props) => (props.disabled ? null : 'translateY(1px)')};
  }
`;
const SubtractButton = styled(QuantityActionButton)`
  border-right: 0;
  border-radius: 25px 0 0 25px;
`;
const AddButton = styled(QuantityActionButton)`
  border-left: 0;
  border-radius: 0 25px 25px 0;
`;
const QuantityInput = styled.input.attrs({ type: 'number' })`
  appearance: textfield;
  width: 40px;
  height: 40px;
  text-align: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0;
  background-color: inherit;
`;
const TotalPriceContainer = styled.div`
  display: flex;
  align-items: center;
`;
const PriceLabel = styled(StyledH5)`
  margin-right: 7px;
`;
const TotalPrice = styled(StyledParagraph)``;
const BodyActionButtons = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;
const ActionButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 30px;
  border-style: none;
  border: 0;
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 25px;
  cursor: pointer;
  box-shadow: 4px 3px 24px rgba(237, 78, 83, 0.5);
  &:active {
    transform: translateY(2px);
  }
`;
const ActionButtonText = styled(StyledParagraph)``;

const TitleAndPriceBlock = ({ currentVariant, masterVariant }) => {
  const amount = currentVariant?.price?.cents || masterVariant.price.cents;
  const currency = currentVariant?.price?.currency || masterVariant.price.currency;
  const precision = currentVariant?.price?.precision || masterVariant.price.precision;

  let price = '';

  try {
    price = Dinero({
      amount: parseInt(amount, 10),
      currency,
      precision,
    });

    price = price.toFormat();
  } catch (error) {
    console.log('Title and price block: ', error);
    // TODO
    // handle error
  }

  return (
    <TitleAndPriceContainer>
      <Title
        color={currentVariant?.name?.color || masterVariant.name?.color}
        fontSize={currentVariant?.name?.fontSize || masterVariant.name?.fontSize}
        fontFamily={currentVariant?.name?.fontFamily || masterVariant.name?.fontFamily}
      >
        {currentVariant?.name?.text}
      </Title>
      <Price
        color={currentVariant?.price?.color || masterVariant.price?.color}
        fontSize={currentVariant?.price?.fontSize || masterVariant.price?.fontSize}
        fontFamily={currentVariant?.price?.fontFamily || masterVariant.price?.fontFamily}
      >
        {price}
      </Price>
    </TitleAndPriceContainer>
  );
};

TitleAndPriceBlock.propTypes = {
  currentVariant: variantType.isRequired,
  masterVariant: variantType.isRequired,
};

const TotalPriceBlock = ({
  currentVariant,
  masterVariant,
  customProperties,
  quantity,
}) => {
  const amount = currentVariant?.price?.cents || masterVariant.price.cents;
  const currency = currentVariant?.price?.currency || masterVariant.price.currency;
  const precision = currentVariant?.price?.precision || masterVariant.price.precision;

  let price = '';

  try {
    price = Dinero({
      amount: parseInt(amount, 10),
      currency,
      precision,
    });

    // Add all price from custom properties
    Object.values(customProperties).forEach((property) => {
      property.forEach((value) => {
        if (value.price) {
          price = price.add(Dinero({
            amount: parseInt(value.price.cents, 10),
            currency: value.price.currency,
            precision: value.price.precision,
          }));
        }
      });
    });

    price = price.multiply(quantity);

    price = price.toFormat();
  } catch (error) {
    console.log('Total price block: ', error);
    // TODO
    // handle error
  }

  return (
    <TotalPriceContainer>
      <PriceLabel>
        Total Price:
      </PriceLabel>
      <TotalPrice
        color={currentVariant?.price?.color || masterVariant.price?.color}
        fontSize={currentVariant?.price?.fontSize || masterVariant.price?.fontSize}
        fontFamily={currentVariant?.price?.fontFamily || masterVariant.price?.fontFamily}
      >
        {price}
      </TotalPrice>
    </TotalPriceContainer>
  );
};

TotalPriceBlock.propTypes = {
  currentVariant: variantType.isRequired,
  masterVariant: variantType.isRequired,
  customProperties: PropTypes.arrayOf(propertyType).isRequired,
  quantity: PropTypes.number.isRequired,
};

const OptionTypesBlock = ({
  optionTypes,
  customOptions,
  handleOptionChange,
  filledInputColor,
}) => (
  <OptionTypesContainer>
    {
      optionTypes.map((type) => (
        <OptionType key={Math.random().toString().slice(10)}>
          <Subheader
            color={type.name?.color}
            fontSize={type.name?.fontSize}
            fontFamily={type.name?.fontFamily}
            textAlign={type.name?.textAlign}
          >
            {type.name?.text}
            :
          </Subheader>
          <OptionValues>
            {
              type.values.map((typeValue) => (
                <OptionValue key={Math.random().toString().slice(10)}>
                  <OptionValueButton
                    type="radio"
                    name={type.name.text}
                    id={typeValue.text}
                    value={typeValue.text}
                    filledColor={filledInputColor}
                    onClick={handleOptionChange}
                    checked={customOptions[type.name.text] === typeValue.text}
                    color={typeValue.color}
                    fontSize={typeValue.fontSize}
                    fontFamily={typeValue.fontFamily}
                  >
                    {typeValue.text}
                  </OptionValueButton>
                </OptionValue>
              ))
            }
          </OptionValues>
        </OptionType>
      ))
    }
  </OptionTypesContainer>
);

OptionTypesBlock.propTypes = {
  optionTypes: PropTypes.arrayOf(optionTypeType).isRequired,
  customOptions: PropTypes.shape({ // TODO, this is not the shape
    name: PropTypes.string,
  }).isRequired,
  handleOptionChange: PropTypes.func.isRequired,
  filledInputColor: PropTypes.string.isRequired,
};

const PropertiesBlock = ({ properties, customProperties, handlePropertyChange }) => (
  <PropertiesContainer>
    {
      properties.map((property) => {
        let InputType;
        if (property.type === 'radio') {
          InputType = RadioButton;
        } else if (property.type === 'checkbox') {
          InputType = Checkbox;
        }

        return (
          <Property key={Math.random().toString().slice(10)}>
            <Subheader>
              {property.name.text}
            </Subheader>
            <PropertyValues>
              {
                property.values.map((propertyValue) => {
                  let propValPrice = '';

                  try {
                    propValPrice = Dinero({
                      amount: parseInt(propertyValue.price.cents, 10),
                      currency: propertyValue.price.currency,
                      precision: propertyValue.price.precision,
                    });

                    if (propValPrice.isPositive()) {
                      propValPrice = `+ ${propValPrice.toFormat()}`;
                    } else {
                      propValPrice = propValPrice.toFormat();
                    }
                  } catch (error) {
                    // TODO
                  }

                  const exists = customProperties[property.name.text]?.find?.(
                    (value) => value.name.text === propertyValue.name.text,
                  );

                  const isChecked = !!exists;

                  return (
                    <PropertyValue key={Math.random().toString().slice(10)}>
                      <InputType
                        type={property.type}
                        name={property.name.text}
                        id={propertyValue.name.text}
                        value={propertyValue.name.text}
                        filledColor="red"
                        onChange={handlePropertyChange}
                        checked={isChecked}
                      />
                      <PropValLabel
                        htmlFor={propertyValue.name.text}
                        color={propertyValue.name?.color}
                        fontSize={propertyValue.name?.fontSize}
                        fontFamily={propertyValue.name?.fontFamily}
                        textAlign={propertyValue.name?.textAlign}
                      >
                        {propertyValue.name.text}
                      </PropValLabel>
                      <PropValPrice
                        htmlFor={propertyValue.name.text}
                        color={propertyValue.name?.color}
                        fontSize={propertyValue.name?.fontSize}
                        fontFamily={propertyValue.name?.fontFamily}
                        textAlign={propertyValue.name?.textAlign}
                      >
                        {propValPrice}
                      </PropValPrice>
                    </PropertyValue>
                  );
                })
              }
            </PropertyValues>
          </Property>
        );
      })
    }
  </PropertiesContainer>
);

PropertiesBlock.propTypes = {
  properties: PropTypes.arrayOf(propertyType).isRequired,
  customProperties: PropTypes.shape({ // TODO, this is not the shape
    name: PropTypes.string,
  }).isRequired,
  handlePropertyChange: PropTypes.func.isRequired,
};

const QuantityBlock = ({
  quantity,
  setQuantity,
  maxQuantity,
  minQuantity,
}) => {
  const handleIncreasing = () => {
    const newValue = (parseInt(quantity, 10) + 1) || null;
    setQuantity(newValue ?? 0);
  };

  const handleDecreasing = () => {
    const newValue = (parseInt(quantity, 10) - 1) || null;
    setQuantity(newValue ?? 0);
  };

  const handleQuantityInputChange = (event) => {
    const newValue = parseInt(event.target.value, 10);

    if (newValue > maxQuantity) return setQuantity(maxQuantity);
    if (newValue < minQuantity) return setQuantity(minQuantity);

    return setQuantity(newValue);
  };

  return (
    <QuantityContainer>
      <SubtractButton
        onClick={handleDecreasing}
        disabled={quantity <= minQuantity}
      >
        -
      </SubtractButton>
      <QuantityInput
        value={quantity}
        max={maxQuantity}
        min={minQuantity}
        onChange={handleQuantityInputChange}
      />
      <AddButton
        onClick={handleIncreasing}
        disabled={quantity >= maxQuantity}
      >
        +
      </AddButton>
    </QuantityContainer>
  );
};

QuantityBlock.propTypes = {
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
  maxQuantity: PropTypes.number.isRequired,
  minQuantity: PropTypes.number.isRequired,
};

const ProductDetailsWithTopImage = (props) => {
  const {
    background,
    id,
    masterVariant,
    variants,
    optionTypes,
    properties,
    maxQuantity,
    actionButton,
    filledInputColor,
  } = props;

  const [currentVariant, setCurrentVariant] = useState(masterVariant);
  const [customOptions, setCustomOptions] = useState({});
  const [customProperties, setCustomProperties] = useState({});
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

  const currentImage = currentVariant.images?.[0] || masterVariant.images?.[0];

  return (
    <Container
      id={id}
      backgroundColor={background.backgroundColor}
    >
      <Header imageUrl={currentImage?.src} />
      <Body>
        <BodyTopInfo>
          <TitleAndPriceBlock
            currentVariant={currentVariant}
            masterVariant={masterVariant}
            customProperties={customProperties}
          />
          <Description
            color={currentVariant?.description?.color}
            fontSize={currentVariant?.description?.fontSize}
            fontFamily={currentVariant?.description?.fontFamily}
          >
            {currentVariant?.description?.text || masterVariant?.description?.text}
          </Description>
        </BodyTopInfo>
        <BodyVariations>
          <OptionTypesBlock
            optionTypes={optionTypes}
            customOptions={customOptions}
            handleOptionChange={handleOptionChange}
            filledInputColor={filledInputColor}
          />
          <PropertiesBlock
            properties={properties}
            customProperties={customProperties}
            handlePropertyChange={handlePropertyChange}
          />
        </BodyVariations>
        <BodyControls>
          <QuantityBlock
            quantity={quantity}
            setQuantity={setQuantity}
            maxQuantity={maxQuantity}
            minQuantity={1}
          />
          <TotalPriceBlock
            currentVariant={currentVariant}
            masterVariant={masterVariant}
            customProperties={customProperties}
            quantity={quantity}
          />
        </BodyControls>
        <BodyActionButtons>
          <ActionButton
            backgroundColor={actionButton?.backgroundColor}
            onClick={actionButton?.onClick}
          >
            <ActionButtonText
              color={actionButton?.color}
              fontSize={actionButton?.fontSize}
              fontFamily={actionButton?.fontFamily}
            >
              {actionButton?.text}
            </ActionButtonText>
          </ActionButton>
        </BodyActionButtons>
      </Body>
    </Container>
  );
};

ProductDetailsWithTopImage.defaultProps = {
  background: {
    backgroundColor: 'white',
  },
  optionTypes: [],
  properties: [],
  variants: [],
  maxQuantity: 20,
  filledInputColor: 'black',
};

ProductDetailsWithTopImage.propTypes = {
  /**
   * Background styles.
   */
  background: backgroundType,
  /**
   * Product ID.
   */
  id: PropTypes.string.isRequired,
  /**
   * Master Variant
   */
  masterVariant: variantType.isRequired,
  /**
   * Product variants
   */
  variants: PropTypes.arrayOf(variantType),
  /**
   * OptionTypes.
   */
  optionTypes: PropTypes.arrayOf(optionTypeType),
  /**
   * Properties
   */
  properties: PropTypes.arrayOf(propertyType),
  /**
   * Maximum number of quantity a user can order. If its 1, quantity block will be hidden.
   */
  maxQuantity: PropTypes.number,
  /**
   * Action button.
   */
  actionButton: buttonType.isRequired,
  /**
   * Filled checkbox/radio input color
   */
  filledInputColor: PropTypes.string,
};

export default ProductDetailsWithTopImage;
