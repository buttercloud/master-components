import React from 'react';
import ImagesGridWithText from './ImagesGridWithText';

export default {
  title: 'Organisms/Features/Images Grid With Text',
  component: ImagesGridWithText,
  argTypes: {
    content: { control: 'object' },
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ImagesGridWithText {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  content: [
    {
      title: {
        text: 'LOREM IPSUM',
        color: 'palevioletred',
        fontSize: 1,
      },
      description: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      image: {
        url: 'https://place-hold.it/300x300.png&fontsize=12',
        alt: '',
      },
    },
    {
      title: {
        text: 'LOREM IPSUM',
        color: 'palevioletred',
        fontSize: 1.1,
      },
      description: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      image: {
        url: 'https://place-hold.it/300x300.png&fontsize=12',
        alt: '',
      },
    },
    {
      title: {
        text: 'LOREM IPSUM',
        fontSize: 1.1,
      },
      description: {
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      },
      image: {
        url: 'https://place-hold.it/300x300.png&fontsize=12',
        alt: '',
      },
    },
  ],
  backgroundColor: 'white',
};

Primary.storyName = 'Images Grid With Text';
