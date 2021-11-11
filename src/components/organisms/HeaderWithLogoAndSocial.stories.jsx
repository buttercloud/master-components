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
    src: 'https://place-hold.it/300x300.png',
    alt: 'logo',
  },
  background: {
    backgroundColor: 'black',
  },
  socialMedia: [
    {
      type: 'instagram',
      color: 'white',
      text: 'instagram',
      url: '#',
    },
    {
      type: 'discord',
      color: 'white',
      text: 'Discord',
      url: '#',
    },
    {
      type: 'facebook',
      color: 'white',
      text: 'facebook',
      url: '#',
    },
  ],
};

Primary.storyName = 'Header With Logo And Social';
