import React from 'react';

import Blog9197 from './Blog9197';
import Blog9197Icon from './Blog9197.icon';

export default {
  title: 'organisms/blog/Blog9197',
  component: Blog9197,
  args: {
    cards: [
      {
        id: Math.random().toString().slice(10),
        spance9288: {
          text: 'CATEGORY',
          styles: {},
        },
        h21320bb: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        pbe19e1: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        button25a354: {
          text: 'Learn More',
          styles: {},
          onClick: () => {},
        },
        span2afc7d: {
          text: '1.2K',
          styles: {},
        },
        span26ef0a: {
          text: '6',
          styles: {},
        },
        button5920f8: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
        imgbbfa09: {
          styles: {},
          src: 'https://place-hold.it/300.png',
          alt: '',
        },
        span910327: {
          text: 'Lorem ipsum',
          styles: {},
        },
        span249c4d: {
          text: 'JOHN DOE',
          styles: {},
        },
        span0aea65: {
          text: 'DEVELOPER',
          styles: {},
        },
      },
      {
        id: Math.random().toString().slice(10),
        spance9288: {
          text: 'CATEGORY',
          styles: {},
        },
        h21320bb: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        pbe19e1: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        button25a354: {
          text: 'Learn More',
          styles: {},
          onClick: () => {},
        },
        span2afc7d: {
          text: '1.2K',
          styles: {},
        },
        span26ef0a: {
          text: '6',
          styles: {},
        },
        button5920f8: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
        imgbbfa09: {
          styles: {},
          src: 'https://place-hold.it/300.png',
          alt: '',
        },
        span910327: {
          text: 'Lorem ipsum',
          styles: {},
        },
        span249c4d: {
          text: 'JOHN DOE',
          styles: {},
        },
        span0aea65: {
          text: 'DEVELOPER',
          styles: {},
        },
      },
    ],
  },
};

const Template = (args) => <Blog9197 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Blog9197';
// Primary.args = {};

export const Icon = (args) => {
  let className = '';

  const { darkMode } = args;

  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Blog9197Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};
