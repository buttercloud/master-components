import React from 'react';
import Footer1 from './Footer1';

export default {
  title: 'Organisms/Footers/Footer1',
  component: Footer1,
  argTypes: {
    backgroundColor: {
      table: { category: 'Styles' },
      control: 'color',
    },
    facebookPageUrl: {
      control: 'text',
    },
    facebookButtonColor: {
      table: { category: 'Styles' },
      control: 'color',
    },
    instagramPageUrl: {
      control: 'text',
    },
    instagramButtonColor: {
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

const Template = (args) => <Footer1 {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  infoFields: [
    { name: 'Address', value: 'Your address here' },
    { name: 'Contact', value: '07********' },
    { name: 'Hours', value: '11am to 11pm daily' },
  ],
  facebookPageUrl: 'https://www.facebook.com/PageName',
  instagramPageUrl: 'https://www.instagram.com/PageName',
  backgroundColor: '#000000',
  facebookButtonColor: '#ffffff',
  instagramButtonColor: '#ffffff',
  fontFamily: 'Public Sans, sans-serif',
  fontColor: '#ffffff',
};

Primary.storyName = 'Footer1';
