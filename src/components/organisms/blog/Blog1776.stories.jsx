import React from 'react';

import Blog1776 from './Blog1776';
import Blog1776Icon from './Blog1776.icon';

export default {
  title: 'organisms/blog/Blog1776',
  component: Blog1776,
  args: {
    cards: [
      {
        id: Math.random().toString().slice(10),
        img6cf1e1: {
          styles: {},
          src: 'https://place-hold.it/300.png',
          alt: '',
        },
        h278a95e: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h1a19822: {
          text: 'Lorem ipsum',
          styles: {},
        },
        pa30212: {
          text: 'Lorem ipsum',
          styles: {},
        },
        spanac7728: {
          text: 'Lorem ipsum',
          styles: {},
        },
        span714d9f: {
          text: 'Lorem ipsum',
          styles: {},
        },
        buttonf75bb7: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
      },
      {
        id: Math.random().toString().slice(10),
        img6cf1e1: {
          styles: {},
          src: 'https://place-hold.it/300.png',
          alt: '',
        },
        h278a95e: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h1a19822: {
          text: 'Lorem ipsum',
          styles: {},
        },
        pa30212: {
          text: 'Lorem ipsum',
          styles: {},
        },
        spanac7728: {
          text: 'Lorem ipsum',
          styles: {},
        },
        span714d9f: {
          text: 'Lorem ipsum',
          styles: {},
        },
        buttonf75bb7: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
      },
      {
        id: Math.random().toString().slice(10),
        img6cf1e1: {
          styles: {},
          src: 'https://place-hold.it/300.png',
          alt: '',
        },
        h278a95e: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h1a19822: {
          text: 'Lorem ipsum',
          styles: {},
        },
        pa30212: {
          text: 'Lorem ipsum',
          styles: {},
        },
        spanac7728: {
          text: 'Lorem ipsum',
          styles: {},
        },
        span714d9f: {
          text: 'Lorem ipsum',
          styles: {},
        },
        buttonf75bb7: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
      },
    ],
  },
};

const Template = (args) => <Blog1776 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Comp';

export const Icon = (args) => {
  let className = '';

  const { darkMode } = args;

  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Blog1776Icon />
    </div>
  );
};

Icon.args = {
  darkMode: true,
};
