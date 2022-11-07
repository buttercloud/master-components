import React from 'react';

import Hero0001 from './Hero0001';
import Hero0001Icon from './Hero0001.icon';

export default {
  title: 'organisms/hero/Hero0001',
  component: Hero0001,
  args: {
    image: {
      src: 'https://dummyimage.com/900x700',
      alt: '',
    },
    mainText: {
      text: 'Lorem ipsum dolor sit amet',
    },
    secondaryText: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    callToActionButton: {
      text: 'Lorem ipsum',
    },
  },
};

const Template = (args) => <Hero0001 {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Hero0001';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Hero0001Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
