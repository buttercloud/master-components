import React from 'react';
import ProductsShowcaseCarousel from './ProductsShowcaseCarousel';

export default {
  title: 'organisms/Features/Products Showcase Carousel',
  component: ProductsShowcaseCarousel,
};

const Template = (args) => <ProductsShowcaseCarousel {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Products Showcase Carousel';

Primary.args = {
  productCard: {
    backgroundColor: '#f8f9fa',
  },
  products: [
    {
      id: 1,
      name: {
        text: 'LOREM IPSUM',
        color: 'black',
      },
      description: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      image: {
        src: 'https://place-hold.it/600x600',
        alt: '',
      },
      price: {
        cents: 6999,
        currency: 'USD',
        precision: 2,
      },
      actionButton: {
        text: 'ORDER',
      },
    },
    {
      id: 2,
      name: {
        text: 'LOREM IPSUM',
        color: 'black',
      },
      description: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      image: {
        src: 'https://place-hold.it/600x600',
        alt: '',
      },
      price: {
        cents: 9999,
        currency: 'USD',
        precision: 2,
      },
      actionButton: {
        text: 'ORDER',
      },
    },
    {
      id: 3,
      name: {
        text: 'LOREM IPSUM',
        color: 'black',
      },
      description: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      image: {
        src: 'https://place-hold.it/600x600',
        alt: '',
      },
      price: {
        cents: 9999,
        currency: 'USD',
        precision: 2,
      },
      actionButton: {
        text: 'ORDER',
      },
    },
  ],
};
