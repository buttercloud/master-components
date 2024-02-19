import React from 'react';

import SocialButton from './SocialButton';

export default {
  title: 'atoms/Buttons/Social',
  component: SocialButton,
  argTypes: {
    type: { control: 'radio' },
    color: { control: 'color' },
    url: { control: 'text' },
  },
};

const Template = (args) => <SocialButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  type: 'instagram',
  url: 'mysocialpage',
};
Primary.storyName = 'Social';
