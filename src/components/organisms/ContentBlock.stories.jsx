import React from 'react';
import ContentBlock from './ContentBlock';

export default {
  title: 'Organisms/Features/ContentBlock',
  component: ContentBlock,
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    titleColor: { control: 'color' },
    subtitleColor: { control: 'color' },
    contentColor: { control: 'color' },
    contentFontSize: {
      control: {
        type: 'range', min: 0, max: 5, step: 0.1,
      },
    },
    separatorColor: { control: 'color' },
  },
};

const Template = (args) => <ContentBlock {...args} />;

export const LeftImageRightContent = Template.bind({});

LeftImageRightContent.args = {
  title: 'THE RESTAURANT',
  subtitle: 'A little about us and a breif history of how we started',
  imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsimply-delicious-food.com%2Fwp-content%2Fuploads%2F2015%2F07%2FBacon-and-cheese-burgers-3.jpg&f=1&nofb=1',
  content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. \n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  separatorColor: 'purple',
};

LeftImageRightContent.storyName = 'Image left, content right';
