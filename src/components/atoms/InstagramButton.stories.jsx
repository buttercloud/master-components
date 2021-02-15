import React from 'react';
import InstagramButton from './InstagramButton';

export default {
  title: "Atoms/Social Icons/Instagram",
  component: InstagramButton,
  argTypes: {
    color: { control: 'color' },
    pageUrl: { control: 'text' },
  },
};

const Template = (args) => <InstagramButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  color: '#000000',
  pageUrl: 'https://www.instagram.com/PageName',
};

Primary.storyName = 'Instagram';
