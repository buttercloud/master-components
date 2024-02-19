import React from 'react';

import Gallery0001 from './Gallery0001';
import Gallery0001Icon from './Gallery0001.icon';

export default {
  title: 'organisms/gallery/Gallery0001',
  component: Gallery0001,
  args: {
    background: {},
    title: {
      text: 'Lorem ipsum dolor sit amet',
      styles: {
        fontSize: 3.5,
      },
    },
    subtitle: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    items: [
      {
        image: {
          src: 'https://dummyimage.com/300x500',
        },
        p87a657: {
          text: 'Name',
        },
        button163210: {
          text: 'Learn More',
        },
      },
      {
        image: {
          src: 'https://dummyimage.com/300x500',
        },
        p87a657: {
          text: 'Name',
        },
        button163210: {
          text: 'Learn More',
        },
      },
      {
        image: {
          src: 'https://dummyimage.com/300x500',
        },
        p87a657: {
          text: 'Name',
        },
        button163210: {
          text: 'Learn More',
        },
      },
    ],
  },
};

const Template = (args) => <Gallery0001 {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Gallery0001';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Gallery0001Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
