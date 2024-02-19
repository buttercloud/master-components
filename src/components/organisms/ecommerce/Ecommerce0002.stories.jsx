import React from 'react';

import Ecommerce0002 from './Ecommerce0002';

export default {
  title: 'organisms/ecommerce/Ecommerce0002',
  component: Ecommerce0002,
  argTypes: {
    fontFamily: { control: 'text' },
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Ecommerce0002 {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  logo: {
    url: 'https://place-hold.it/300x300.png',
  },
  title: {
    text: 'Explore Our Menu',
  },
  subtitle: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Lorem ipsum dolor sit amet.',
  },
  products: [
    {
      id: 'product1',
      name: {
        text: 'Product #1',
      },
      description: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      price: {
        cents: 690,
        currency: 'JOD',
        precision: 3,
      },
    },
    {
      id: 'product2',
      name: {
        text: 'Product #2',
      },
      description: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      price: {
        cents: 4200,
        currency: 'JOD',
        precision: 3,
      },
    },
    {
      id: 'product3',
      name: {
        text: 'Product #3',
      },
      description: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      price: {
        cents: 240,
        currency: 'JOD',
        precision: 3,
      },
    },
    {
      id: 'product4',
      name: {
        text: 'Product #4',
      },
      description: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      price: {
        cents: 690,
        currency: 'JOD',
        precision: 3,
      },
    },
    {
      id: 'product5',
      name: {
        text: 'Product #5',
      },
      description: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      price: {
        cents: 3140,
        currency: 'JOD',
        precision: 3,
      },
    },
    {
      id: 'product6',
      name: {
        text: 'Product #6',
      },
      description: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      },
      price: {
        cents: 6660,
        currency: 'JOD',
        precision: 3,
      },
    },
  ],
  actionButton: {
    text: 'LOREM IPSUM',
    styles: {
      // color: 'red',
    },
  },
  background: {
    styles: {
      // backgroundColor: '#28282a',
      backgroundColor: 'white',
      fontFamily: 'sans-serif',
    },
  },
};

Primary.storyName = 'Ecommerce0002';
