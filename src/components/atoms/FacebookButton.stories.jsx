import React from 'react';
import FacebookButton from './FacebookButton';

export default {
  title: 'Atoms/Social Icons/Facebook Button',
  component: FacebookButton,
  argTypes: {
    color: { control: 'color' },
    pageUrl: { control: 'text' },
  },
};

const Template = (args) => <FacebookButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  pageUrl: 'https://www.facebook.com/PageName',
};

Primary.storyName = 'Facebook Button';
