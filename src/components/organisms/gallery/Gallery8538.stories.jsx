import React from 'react';

import Gallery8538 from './Gallery8538';
import Gallery8538Icon from './Gallery8538.icon';

export default {
  title: 'organisms/gallery/Gallery8538',
  component: Gallery8538,
  args: {
    cards: [
      {
        h19d820e: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h24fc552: {
          text: 'THE SUBTITLE',
          styles: {},
        },
        pd4ac10: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        imgf39064: {
          styles: {},
          src: 'https://dummyimage.com/600x360',
          alt: '',
        },
      },
      {
        h19d820e: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h24fc552: {
          text: 'THE SUBTITLE',
          styles: {},
        },
        pd4ac10: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        imgf39064: {
          styles: {},
          src: 'https://dummyimage.com/600x360',
          alt: '',
        },
      },
      {
        h19d820e: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h24fc552: {
          text: 'THE SUBTITLE',
          styles: {},
        },
        pd4ac10: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        imgf39064: {
          styles: {},
          src: 'https://dummyimage.com/600x360',
          alt: '',
        },
      },
      {
        h19d820e: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h24fc552: {
          text: 'THE SUBTITLE',
          styles: {},
        },
        pd4ac10: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        imgf39064: {
          styles: {},
          src: 'https://dummyimage.com/600x360',
          alt: '',
        },
      },
      {
        h19d820e: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h24fc552: {
          text: 'THE SUBTITLE',
          styles: {},
        },
        pd4ac10: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        imgf39064: {
          styles: {},
          src: 'https://dummyimage.com/600x360',
          alt: '',
        },
      },
      {
        h19d820e: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h24fc552: {
          text: 'THE SUBTITLE',
          styles: {},
        },
        pd4ac10: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        imgf39064: {
          styles: {},
          src: 'https://dummyimage.com/600x360',
          alt: '',
        },
      },
    ],
  },
};

const Template = (args) => <Gallery8538 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Gallery8538';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Gallery8538Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
