import React from 'react';
import TitleImageAndText from './TitleImageAndText';

export default {
  title: 'organisms/content/Title Image and Text',
  component: TitleImageAndText,
  argTypes: {
    separatorColor: { control: 'color' },
  },
  args: {
    title: {
      text: 'LOREM ISPUM',
    },
    subtitle: {
      text: 'Lorem ispum dolor sit amet, consectetur adipiscing elit',
    },
    image: {
      url: 'https://place-hold.it/300x300.png',
      alt: 'myImage',
    },
    content: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    separatorColor: 'purple',
  },
};

const Template = (args) => <TitleImageAndText {...args} />;

export const LeftImageRightContent = Template.bind({});

LeftImageRightContent.storyName = 'Left image, right content';

export const RightImageLeftContent = Template.bind({});

RightImageLeftContent.args = {
  swapImageAndContent: true,
};

RightImageLeftContent.storyName = 'Left content, right image';
