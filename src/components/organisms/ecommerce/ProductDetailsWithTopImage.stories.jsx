import React from 'react';

import ProductDetailsWithTopImage from './ProductDetailsWithTopImage';

export default {
  title: 'organisms/ecommerce/ProductDetailsWithTopImage',
  component: ProductDetailsWithTopImage,
};

const Template = (args) => <ProductDetailsWithTopImage {...args} />;

export const Primary = Template.bind({});

// Primary.storyName = '';

Primary.args = {
  masterVariant: {
    name: { text: 'Product #1' },
    description: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    price: {
      cents: 6490,
      currency: 'JOD',
      precision: 3,
      color: 'palevioletred',
    },
    images: [
      {
        src: 'https://place-hold.it/1280x850',
        alt: '',
      },
      {
        src: 'https://place-hold.it/1280x850',
        alt: '',
      },
    ],
    options: [
      {
        name: { text: 'Size' },
        value: { text: 'Personal' },
      },
      {
        name: { text: 'Color' },
        value: { text: 'Pink' },
      },
    ],
  },
  optionTypes: [
    {
      name: { text: 'Size' },
      values: [
        { text: 'Personal' },
        { text: 'On the Go' },
      ],
    },
    {
      name: { text: 'Color' },
      values: [
        { text: 'Red' },
        { text: 'Black' },
        { text: 'Purple' },
        { text: 'Pink' },
        { text: 'Yellow' },
        { text: 'Green' },
        { text: 'Brown' },
        { text: 'Orange' },
        { text: 'Gray' },
        { text: 'White' },
      ],
    },
  ],
  properties: [
    {
      name: { text: 'Extras' },
      values: [
        {
          name: { text: 'Avocado Salsa' },
          price: {
            cents: 900,
            currency: 'JOD',
            precision: 3,
            color: 'palevioletred',
          },
        },
        {
          name: { text: 'Walnuts' },
          price: {
            cents: -900,
            currency: 'JOD',
            precision: 3,
            color: 'palevioletred',
          },
        },
        {
          name: { text: 'Roasted Almonds' },
          price: {
            cents: 900,
            currency: 'JOD',
            precision: 3,
            color: 'palevioletred',
          },
        },
      ],
      type: 'checkbox', // radio
      minRequired: 1,
      maxRequired: null,
    },
    {
      name: { text: 'Serving Options' },
      values: [
        {
          name: { text: 'Mix Salad with Dressing' },
          price: null,
        },
      ],
      type: 'checkbox',
      minRequired: null,
      maxRequired: null,
    },
    {
      name: { text: 'Extra Dressing (choose up to 3)' },
      values: [
        { name: { text: 'Ginger Lemon' }, price: null },
        { name: { text: 'Chipotle Caesar Dressing' }, price: null },
        { name: { text: 'Balsamic Vinaigrette' }, price: null },
        { name: { text: 'Creamy Summaq Dressing' }, price: null },
        { name: { text: 'Peanut Thai Dressing' }, price: null },
        { name: { text: 'Pesto Dressing' }, price: null },
        { name: { text: 'Japanese Teriyaki Dressing' }, price: null },
      ],
      type: 'checkbox',
      minRequired: null,
      maxRequired: 3,
    },
  ],
  variants: [
    {
      name: { text: 'Product #1 (Size On the Go, Color Purple)' },
      description: { text: 'testing' },
      price: {
        cents: 5990,
        currency: 'JOD',
        precision: 3,
      },
      images: [],
      options: [
        { name: { text: 'Size' }, value: { text: 'On the Go' } },
        { name: { text: 'Color' }, value: { text: 'Purple' } },
      ],
    },
    {
      name: { text: 'Product #1 (Size On the Go, Color Pink)' },
      description: { text: null },
      price: {
        cents: 6990,
        currency: 'JOD',
        precision: 3,
      },
      images: [],
      options: [
        { name: { text: 'Size' }, value: { text: 'On the Go' } },
        { name: { text: 'Color' }, value: { text: 'Pink' } },
      ],
    },
    {
      name: { text: 'Product #1 (Size Personal, Color Orange)' },
      description: { text: null },
      price: {
        cents: 7990,
        currency: 'JOD',
        precision: 3,
      },
      images: [],
      options: [
        { name: { text: 'Size' }, value: { text: 'Personal' } },
        { name: { text: 'Color' }, value: { text: 'Orange' } },
      ],
    },
  ],
  actionButton: {
    text: 'ORDER NOW',
    backgroundColor: 'red',
    color: 'white',
  },
  filledInputColor: 'red',
};
