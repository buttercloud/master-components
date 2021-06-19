import React from 'react';
import PromotionWithBackgroundImage from './PromotionWithBackgroundImage';

export default {
  title: 'organisms/Features/PromotionWithBackgroundImage',
  component: PromotionWithBackgroundImage,
  argTypes: {
    titleFontSize: {
      control: {
        type: 'range', min: 0, max: 5, step: 0.1,
      },
    },
    titleColor: { control: 'color' },
    subtitleFontSize: {
      control: {
        type: 'range', min: 0, max: 5, step: 0.1,
      },
    },
    subtitleColor: { control: 'color' },
    descriptionFontSize: {
      control: {
        type: 'range', min: 0, max: 5, step: 0.1,
      },
    },
    descriptionColor: { control: 'color' },
    actionButtonFontSize: {
      control: {
        type: 'range', min: 0, max: 5, step: 0.1,
      },
    },
    actionButtonTextColor: { control: 'color' },
    actionButtonBackgroundColor: { control: 'color' },
  },
};

const Template = (args) => <PromotionWithBackgroundImage {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Order Online',
  subtitle: 'Get 10% Off Your First Order',
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  backgroundImage: {
    url: 'http://androthemes.com/themes/html/slices/assets/img/bg/cta.jpg',
    alt: '',
  },

};
Primary.storyName = 'PromotionWithBackgroundImage';
