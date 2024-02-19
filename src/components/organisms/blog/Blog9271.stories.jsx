import React from 'react';

import Blog9271 from './Blog9271';
import Blog9271Icon from './Blog9271.icon';

export default {
  title: 'organisms/blog/Blog9271',
  component: Blog9271,
  args: {
    cards: [
      {
        id: Math.random().toString().slice(10),
        h1107f02: {
          text: 'The 400 Blows',
          styles: {},
        },
        h20419ab: {
          text: 'CATEGORY',
          styles: {},
        },
        p61585f: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        span8bb54d: {
          text: 'Jul',
          styles: {},
        },
        span7c1d0e: {
          text: '18',
          styles: {},
        },
        span5b94d0: {
          text: 'Lorem ipsum',
          styles: {},
        },
        span22ab86: {
          text: 'Lorem ipsum',
          styles: {},
        },
        img2938b8: {
          styles: {},
          src: 'https://place-hold.it/300.png',
          alt: '',
        },
        button2910ba: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
      },
      {
        id: Math.random().toString().slice(10),
        h1107f02: {
          text: 'The 400 Blows',
          styles: {},
        },
        h20419ab: {
          text: 'CATEGORY',
          styles: {},
        },
        p61585f: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        span8bb54d: {
          text: 'Jul',
          styles: {},
        },
        span7c1d0e: {
          text: '18',
          styles: {},
        },
        span5b94d0: {
          text: 'Lorem ipsum',
          styles: {},
        },
        span22ab86: {
          text: 'Lorem ipsum',
          styles: {},
        },
        img2938b8: {
          styles: {},
          src: 'https://place-hold.it/300.png',
          alt: '',
        },
        button2910ba: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
      },
      {
        id: Math.random().toString().slice(10),
        h1107f02: {
          text: 'The 400 Blows',
          styles: {},
        },
        h20419ab: {
          text: 'CATEGORY',
          styles: {},
        },
        p61585f: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        span8bb54d: {
          text: 'Jul',
          styles: {},
        },
        span7c1d0e: {
          text: '18',
          styles: {},
        },
        span5b94d0: {
          text: 'Lorem ipsum',
          styles: {},
        },
        span22ab86: {
          text: 'Lorem ipsum',
          styles: {},
        },
        img2938b8: {
          styles: {},
          src: 'https://place-hold.it/300.png',
          alt: '',
        },
        button2910ba: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
      },
    ],
  },
};

const Template = (args) => <Blog9271 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Blog9271';
// Primary.args = {};

export const Icon = (args) => {
  let className = '';

  const { darkMode } = args;

  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Blog9271Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};
