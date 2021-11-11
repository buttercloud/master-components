import React from 'react';
import PromotionWithBackgroundImage from './PromotionWithBackgroundImage';

export default {
  title: 'organisms/Features/Promotion With Background Image',
  component: PromotionWithBackgroundImage,
  argTypes: {},
};

const Template = (args) => <PromotionWithBackgroundImage {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: {
    text: 'Order Online',
  },
  subtitle: {
    text: 'Get 10% Off Your First Order',
  },
  description: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  },
  actionButton: {
    text: 'LOREM IPSUM',
  },
  background: {
    image: {
      url: 'https://place-hold.it/1000.png',
      alt: '',
    },
    backgroundColor: 'palevioletred',
  },
};

Primary.storyName = 'Promotion With Background Image';
