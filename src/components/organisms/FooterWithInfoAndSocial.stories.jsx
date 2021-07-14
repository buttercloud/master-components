import React from 'react';
import FooterWithInfoAndSocial from './FooterWithInfoAndSocial';

export default {
  title: 'Organisms/Footers/Footer With Info And Social',
  component: FooterWithInfoAndSocial,
  argTypes: {
    backgroundColor: {
      table: { category: 'Styles' },
      control: 'color',
    },
    fontFamily: {
      table: { category: 'Styles' },
      control: 'text',
    },
    fontColor: {
      table: { category: 'Styles' },
      control: 'color',
    },
    infoKeyFontSize: {
      table: { category: 'Styles' },
      control: {
        type: 'range', min: 0, max: 5, step: 0.1,
      },
    },
    infoValueFontSize: {
      table: { category: 'Styles' },
      control: {
        type: 'range', min: 0, max: 5, step: 0.1,
      },
    },
    infoFields: {
      control: 'object',
    },
  },
};

const Template = (args) => <FooterWithInfoAndSocial {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  infoFields: [
    { name: 'Address', value: 'Your address here' },
    { name: 'Contact', value: '07********' },
    { name: 'Hours', value: '11am to 11pm daily' },
  ],
  socialMedia: [
    {
      type: 'instagram',
      color: 'white',
      text: 'Instagram',
      url: '#',
    },
    {
      type: 'youtube',
      color: 'white',
      text: 'Youtube',
      url: '#',
    },
    {
      type: 'facebook',
      color: 'white',
      text: 'Facebook',
      url: '#',
    },
  ],
  backgroundColor: '#000000',
  fontFamily: 'Public Sans, sans-serif',
  fontColor: '#ffffff',
};

Primary.storyName = 'Footer With Info And Social';
