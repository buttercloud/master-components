import React from 'react';
import RecommendedItemsCardsCarousel from './RecommendedItemsCardsCarousel';

export default {
  title: 'organisms/Features/RecommendedItemsCardsCarousel',
  component: RecommendedItemsCardsCarousel,
};

const Template = (args) => <RecommendedItemsCardsCarousel {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  centerMode: true,
  title: {
    color: 'palevioletred',
    fontSize: 1.1,
    text: 'Lorem ipsum',
  },
  subtitle: {
    text: 'Lorem ipsum dolor sit amet.',
    color: '',
    fontSize: 1.1,
  },
  description: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
    color: '',
    fontSize: 1.1,
  },
  items: [
    {
      img: {
        url: 'https://place-hold.it/300x300/aaa/ffffff.png&bold&fontsize=15',
        alt: '',
      },
      title: {
        text: 'Lorem ipsum',
      },
      description: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      price: {
        cents: 669,
        currency: 'usd',
        precision: 2,
      },
      actionButton: {
        text: 'CART ME',
        backgroundColor: 'palevioletred',
        color: 'white',
        fontSize: 1.1,
        icon: {
          isVisible: true,
          color: 'white',
        },
      },
    },
    {
      img: {
        url: 'https://place-hold.it/300x300/aaa/ffffff.png&bold&fontsize=15',
        alt: '',
      },
      title: {
        text: 'Lorem ipsum',
      },
      description: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      price: {
        cents: 999,
        currency: 'usd',
        precision: 2,
      },
      actionButton: {
        text: 'ADD TO CART',
        backgroundColor: 'palevioletred',
        color: 'white',
        fontSize: 1.1,
        icon: {
          isVisible: true,
          color: 'white',
        },
      },
    },
    {
      img: {
        url: 'https://place-hold.it/300x300/aaa/ffffff.png&bold&fontsize=15',
        alt: '',
      },
      title: {
        text: 'Lorem ipsum',
      },
      description: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      price: {
        cents: 1000,
        currency: 'usd',
        precision: 2,
      },
      actionButton: {
        text: 'ORDER',
        backgroundColor: 'palevioletred',
        color: 'white',
        fontSize: 1.1,
        icon: {
          isVisible: true,
          color: 'white',
        },
      },
    },
    {
      img: {
        url: 'https://place-hold.it/300x300/aaa/ffffff.png&bold&fontsize=15',
        alt: '',
      },
      title: {
        text: 'Lorem ipsum',
      },
      description: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      },
      price: {
        cents: 1000,
        currency: 'usd',
        precision: 2,
      },
      actionButton: {
        text: 'ADD TO CART',
        backgroundColor: 'palevioletred',
        color: 'white',
        fontSize: 1.1,
      },
    },
  ],
  navigationArrows: {
    isVisible: true,
    backgroundColor: '#fff',
    arrowColor: '#000',
    onHover: {
      backgroundColor: 'palevioletred',
      arrowColor: '#fff',
    },
  },
};
Primary.storyName = 'RecommendedItemsCardsCarousel';
