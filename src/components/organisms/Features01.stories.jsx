import React from 'react';
import Features01 from './Features01';

export default {
  title: 'Organisms/Features/Features01',
  component: Features01,
  argTypes: {
    content: { control: 'object' },
    backgroundColor: { control: 'color' },
    backgroundImage: { control: 'text' },
  },
};

const Template = (args) => <Features01 {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  content: [
    {
      title: 'QUALITY FOODS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://place-hold.it/300x300.png&bold&fontsize=15',
    },
    {
      title: 'FASTEST DELIVERY',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://place-hold.it/300x300.png&bold&fontsize=15',
    },
    {
      title: 'ORIGINAL RECIPES',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://place-hold.it/300x300.png&bold&fontsize=15',
    },
  ],
  backgroundColor: 'palevioletred',
  backgroundImage: 'https://place-hold.it/1500/000000.png&fontSize=15',
  titleColor: 'palevioletred',
  descriptionColor: 'purple',
};
