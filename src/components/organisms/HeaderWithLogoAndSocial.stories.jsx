import React from 'react';
import HeaderWithLogoAndSocial from './HeaderWithLogoAndSocial';

export default {
  title: 'Organisms/Headers/Header With Logo And Social',
  component: HeaderWithLogoAndSocial,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <HeaderWithLogoAndSocial {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  logo: {
    url: 'https://place-hold.it/300x300.png',
    alt: 'logo',
  },
  backgroundColor: 'palevioletred',
  socialMedia: [
    {
      type: 'instagram',
      color: 'black',
      text: 'instagram',
      url: '#',
    },
    {
      type: 'discord',
      color: 'black',
      text: 'Discord',
      url: '#',
    },
    {
      type: 'facebook',
      color: 'black',
      text: 'facebook',
      url: '#',
    },
  ],
};

Primary.storyName = 'Header With Logo And Social';
