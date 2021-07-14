import React from 'react';
import BackgroundImageHeader from './BackgroundImageHeader';

export default {
  title: 'Organisms/Headers/BackgroundImage Header',
  component: BackgroundImageHeader,
  argTypes: {},
  args: {
    title: {
      text: 'LOREM IPSUM',
    },
    subtitle: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    backgroundImage: {
      url: 'https://place-hold.it/1000',
    },
    logo: {
      url: 'https://place-hold.it/300x300/ffffff.png',
      alt: '',
    },
  },
};

const Template = (args) => <BackgroundImageHeader {...args} />;

export const CenteredContent = Template.bind({});
