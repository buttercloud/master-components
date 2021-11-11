import React from 'react';
import QuoteCarousel from './QuoteCarousel';

export default {
  title: 'organisms/Quote Carousel',
  component: QuoteCarousel,
  // argTypes: {},
};

const Template = (args) => <QuoteCarousel {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  background: {
    backgroundColor: '#f6f0eb',
  },
  quotesIcon: {
    color: '#9e9fa5',
  },
  quotes: [
    {
      quote: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        color: 'black',
      },
      quotee: {
        text: 'JOHN DOE',
        color: '#9e9fa5',
      },
    },
    {
      quote: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      quotee: {
        text: 'Lipsum',
        color: '#9e9fa5',
      },
    },
    {
      quote: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      quotee: {
        text: 'ME',
        color: '#9e9fa5',
      },
    },
  ],
};

Primary.storyName = 'Quote Carousel';
