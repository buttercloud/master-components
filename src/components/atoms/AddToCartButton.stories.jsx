import React from 'react';
import AddToCartButton from './AddToCartButton';

export default {
  title: 'atoms/Buttons/Add To Cart',
  component: AddToCartButton,
  argTypes: {
    label: { control: 'text' },
    fontColor: { control: 'color' },
    fontSize: { control: 'number' },
    cartIconColor: { control: 'color' },
    backgroundColor: { control: 'color' },
    addToCart: { action: 'addToCart' },
  },
};

const Template = (args) => <AddToCartButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Add to Cart',
  fontColor: '#fff',
  fontSize: 1.1,
  cartIconIsVisible: true,
  cartIconColor: '#fff',
  backgroundColor: '#000',
};

Primary.storyName = 'Add To Cart';
