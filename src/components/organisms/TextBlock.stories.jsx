import React from 'react';
import TextBlock from './TextBlock';

export default {
  title: 'organisms/Text Block',
  component: TextBlock,
  argTypes: {
    backgroundColor: {
      control: 'color',
    },
  },
};

const Template = (args) => <TextBlock {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: {
    text: 'Lorem ipsum',
    color: '#000',
    fontSize: 1,
  },
  paragraph: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    color: '#000',
    fontSize: 1.3,
  },
  backgroundColor: '#fff',
  actionButton: {
    text: 'LOREM IPSUM',
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 1,
  },
};
Primary.storyName = 'Text Block';
