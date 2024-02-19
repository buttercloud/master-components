import React from 'react';

import Ecommerce0001 from './Ecommerce0001';

export default {
  title: 'organisms/ecommerce/Ecommerce0001',
  component: Ecommerce0001,
};

const Template = (args) => <Ecommerce0001 {...args} />;

export const Primary = Template.bind({});

// Primary.storyName = 'Ecommerce0001';

Primary.args = {
  title: {
    text: 'LOREM',
  },
  subtitle: {
    text: 'DAILY 11:00 AM - 01:00 PM',
  },
  products: [
    {
      id: 1,
      name: {
        text: 'LOREM IPSUM',
      },
      description: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      price: {
        cents: 8000,
        currency: 'USD',
        precision: 2,
      },
    },
    {
      id: 2,
      name: {
        text: 'LOREM IPSUM',
      },
      description: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      price: {
        cents: 9000,
        currency: 'USD',
        precision: 2,
      },
    },
    {
      id: 3,
      name: {
        text: 'LOREM IPSUM',
      },
      description: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      price: {
        cents: 10000,
        currency: 'USD',
        precision: 2,
      },
    },
    {
      id: 4,
      name: {
        text: 'LOREM IPSUM',
      },
      description: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      price: {
        cents: 6900,
        currency: 'USD',
        precision: 2,
      },
    },
  ],
};
