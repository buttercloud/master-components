import React from 'react';
import SocialButtons from './SocialButtons';

export default {
  title: 'molecules/Social Buttons',
  component: SocialButtons,

};

const Template = (args) => <SocialButtons {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  socials: [
    {
      type: 'instagram',
      url: 'somelink',
      color: '#000000',
      text: 'Instagram',
    },
    {
      type: 'discord',
      url: 'somelink',
      color: 'palevioletred',
      text: 'Discord',
    },
    {
      type: 'youtube',
      url: 'somelink',
      color: 'palevioletred',
      text: 'Youtube',
    },
  ],
};
Primary.storyName = 'Social Buttons';
