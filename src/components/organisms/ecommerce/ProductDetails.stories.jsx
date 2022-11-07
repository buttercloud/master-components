import React from 'react';

import ProductDetails from './ProductDetails';

export default {
  title: 'organisms/ecommerce/ProductDetails',
  component: ProductDetails,
  argTypes: {
    maxQuantity: {
      control: {
        type: 'range', min: 1, step: 1,
      },
    },
    nameFontSize: {
      table: { category: 'Styles' },
      control: {
        type: 'range', min: 0, max: 5, step: 0.1,
      },
    },
    nameColor: {
      table: { category: 'Styles' },
      control: 'color',
    },
    priceFontSize: {
      table: { category: 'Styles' },
      control: {
        type: 'range', min: 0, max: 5, step: 0.1,
      },
    },
    priceColor: {
      table: { category: 'Styles' },
      control: 'color',
    },
    descriptionFontSize: {
      table: { category: 'Styles' },
      control: {
        type: 'range', min: 0, max: 5, step: 0.1,
      },
    },
    descriptionColor: {
      table: { category: 'Styles' },
      control: 'color',
    },
    optionTypeSubheaderSize: {
      table: { category: 'Styles' },
      control: {
        type: 'range', min: 0, max: 5, step: 0.1,
      },
    },
    optionTypeSubheaderColor: {
      table: { category: 'Styles' },
      control: 'color',
    },
    optionValueLabelSize: {
      table: { category: 'Styles' },
      control: {
        type: 'range', min: 0, max: 5, step: 0.1,
      },
    },
    optionValueLabelColor: {
      table: { category: 'Styles' },
      control: 'color',
    },
    propertySubheaderSize: {
      table: { category: 'Styles' },
      control: {
        type: 'range', min: 0, max: 5, step: 0.1,
      },
    },
    propertySubheaderColor: {
      table: { category: 'Styles' },
      control: 'color',
    },
    propertyValueLabelSize: {
      table: { category: 'Styles' },
      control: {
        type: 'range', min: 0, max: 5, step: 0.1,
      },
    },
    propertyValueLabelColor: {
      table: { category: 'Styles' },
      control: 'color',
    },
    filledInputColor: {
      table: { category: 'Styles' },
      control: 'color',
    },
  },
};

const Template = (args) => <ProductDetails {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  id: '45',
  showSpecialRequests: true,
  maxQuantity: 5,

  nameFontSize: 2,
  nameColor: 'black',
  priceFontSize: 1.3,
  priceColor: 'palevioletred',
  descriptionFontSize: 1,
  descriptionColor: '#acabab',
  filledInputColor: 'palevioletred',

  addToCartButton: {
    fontSize: 1.2,
    color: '#fff',
    backgroundColor: '#000',
    text: 'ADD TO CART',
  },

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
        src: 'https://place-hold.it/425x425/aaa/000000.png',
        alt: '',
      },
      {
        src: 'https://place-hold.it/425x425/aaa/ffffff.png',
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
};

Primary.storyName = 'ProductDetails';
// categories: [
//   {
//     name: 'cat1',
//     products: [
//       {
//         masterVariant: {
//           name: 'Product #1',
//           description: '',
//           price: {
//             cents: '6490',
//             currency: 'JOD',
//           },
//           imagesUrls: [],
//           options: {
//             color: 'black',
//             size: 'small',
//           },
//         },
//         optionTypes: [
//           {
//             name: 'Size',
//             values: ['Small', 'Large'],
//             // type: 'RadioButtons' // by default
//           },
//           {
//             name: 'Color',
//             values: ['Red', 'Purple'],
//           },
//         ],
//         variants: [
//           {
//             size: 'Personal',
//             color: 'black',
//           },
//           {
//             options: {
//               size: 'Small',
//               color: 'blue',
//             },
//             name: 'Product #1 (Size Small, Color Red)',
//             description: '',
//             price: 'JOD 6.99',
//             imagesUrls: [],
//           },
//         ],
//         properties: [
//           {
//             name: 'Free extras',
//             values: [
//               { name: '', price: null },
//               { name: '', price: null },
//             ],
//             type: 'Checkboxes', // RadioButtons
//             minRequired: 1,
//             maxRequired: null,
//           }
//         ]
//
//         options: [
//           {
//             name: 'size',
//             values: [
//               { name: 'Personal', price: null },
//               { name: 'On the GO', price: null }
//             ]
//             type: 'RadioButtons'
//           },
//           {
//             name: 'Add one or More Proteins',
//             values: [
//               { name: 'Baked Chicken Breast', price: 'JOD 1.99' },
//               { name: 'Tofu', price: 'JOD 1.69' },
//             ],
//             type: 'Checkboxes',
//           },
//           {
//             name: 'extras',
//             values: [
//               { name: 'Avocado Salsa', price: 'JOD 0.99' },
//               { name: 'Avocado Walnuts', price: 'JOD 0.99' },
//             ],
//             type: 'Checkboxes',
//           },
//           {
//             name: 'Free Extras',
//             values: [
//               { name: 'Pickled Ginger', price: null },
//               { name: 'Chia Seeds', price: null },
//             ],
//             type: 'Checkboxes',
//           }
//         ]
//
//       }
//     ]
//   }
// ]
