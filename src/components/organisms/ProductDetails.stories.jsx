import React from 'react';
import ProductDetails from './ProductDetails';

export default {
  title: 'organisms/ProductDetails',
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
  priceColor: 'palevioletred', // #1e774c
  descriptionFontSize: 1,
  descriptionColor: '#acabab',
  optionTypeSubheaderSize: 1.4,
  optionTypeSubheaderColor: 'black',
  optionValueLabelSize: 1,
  optionValueLabelColor: 'black',
  propertySubheaderSize: 1.2,
  propertySubheaderColor: 'black',
  propertyValueLabelSize: 1,
  propertyValueLabelColor: 'black',
  filledInputColor: 'palevioletred',

  masterVariant: {
    name: 'Product #1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: {
      cents: 6490,
      currency: 'JOD',
      precision: 3,
    },
    imagesUrls: ['https://place-hold.it/300x300/aaa/000000.png&bold&fontsize=15', 'https://place-hold.it/300x300/aaa/ffffff.png&bold&fontsize=15'],
    options: [
      { name: 'Size', value: 'Personal' },
      { name: 'Color', value: 'Pink' },
    ],
  },
  optionTypes: [
    {
      name: 'Size',
      values: ['Personal', 'On the Go'],
    },
    {
      name: 'Color',
      values: ['Red', 'Black', 'Purple', 'Pink', 'Yellow', 'Green', 'Brown', 'Orange', 'Gray', 'White'],
    },
  ],
  properties: [
    {
      name: 'Extras',
      values: [
        {
          name: 'Avocado Salsa',
          price: {
            cents: 900,
            currency: 'JOD',
            precision: 3,
          },
        },
        {
          name: 'Walnuts',
          price: {
            cents: -900,
            currency: 'JOD',
            precision: 3,
          },
        },
        {
          name: 'Roasted Almonds',
          price: {
            cents: 900,
            currency: 'JOD',
            precision: 3,
          },
        },
      ],
      type: 'checkbox', // radio
      minRequired: 1,
      maxRequired: null,
    },
    {
      name: 'Serving Options',
      values: [
        {
          name: 'Mix Salad with Dressing',
          price: null,
        },
      ],
      type: 'checkbox',
      minRequired: null,
      maxRequired: null,
    },
    {
      name: 'Extra Dressing (choose up to 3)',
      values: [
        { name: 'Ginger Lemon', price: null },
        { name: 'Chipotle Caesar Dressing', price: null },
        { name: 'Balsamic Vinaigrette', price: null },
        { name: 'Creamy Summaq Dressing', price: null },
        { name: 'Peanut Thai Dressing', price: null },
        { name: 'Pesto Dressing', price: null },
        { name: 'Japanese Teriyaki Dressing', price: null },
      ],
      type: 'checkbox',
      minRequired: null,
      maxRequired: 3,
    },
  ],
  variants: [
    {
      name: 'Product #1 (Size On the Go, Color Purple)',
      description: 'testing',
      price: {
        cents: 5990,
        currency: 'JOD',
        precision: 3,
      },
      imagesUrls: [],
      options: [
        { name: 'Size', value: 'On the Go' },
        { name: 'Color', value: 'Purple' },
      ],
    },
    {
      name: 'Product #1 (Size On the Go, Color Pink)',
      description: null,
      price: {
        cents: 6990,
        currency: 'JOD',
        precision: 3,
      },
      imagesUrls: [],
      options: [
        { name: 'Size', value: 'On the Go' },
        { name: 'Color', value: 'Pink' },
      ],
    },
    {
      name: 'Product #1 (Size Personal, Color Orange)',
      description: null,
      price: {
        cents: 7990,
        currency: 'JOD',
        precision: 3,
      },
      imagesUrls: [],
      options: [
        { name: 'Size', value: 'Personal' },
        { name: 'Color', value: 'Orange' },
      ],
    },
  ],
};

// Primary.name = '';
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
