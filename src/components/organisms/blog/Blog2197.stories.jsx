import React from 'react';

import Blog2197 from './Blog2197';
import Blog2197Icon from './Blog2197.icon';

export default {
  title: 'organisms/blog/Blog2197',
  component: Blog2197,
  args: {
    cards: [
      {
        id: Math.random().toString().slice(10),
        h29a649f: {
          text: 'Lorem ipsum',
          styles: {},
        },
        spane33434: {
          text: '6',
          styles: {},
        },
        span4a4e66: {
          text: '12k',
          styles: {},
        },
        buttonbafe81: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
        p99c856: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h1184cb0: {
          text: 'Lorem ipsum',
          styles: {},
        },
      },
      {
        id: Math.random().toString().slice(10),
        h29a649f: {
          text: 'Lorem ipsum',
          styles: {},
        },
        spane33434: {
          text: '6',
          styles: {},
        },
        span4a4e66: {
          text: '12k',
          styles: {},
        },
        buttonbafe81: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
        p99c856: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h1184cb0: {
          text: 'Lorem ipsum',
          styles: {},
        },
      },
      {
        id: Math.random().toString().slice(10),
        h29a649f: {
          text: 'Lorem ipsum',
          styles: {},
        },
        spane33434: {
          text: '6',
          styles: {},
        },
        span4a4e66: {
          text: '12k',
          styles: {},
        },
        buttonbafe81: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
        p99c856: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h1184cb0: {
          text: 'Lorem ipsum',
          styles: {},
        },
      },
    ],
  },
};

const Template = (args) => <Blog2197 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Blog2197';

export const Icon = (args) => {
  let className = '';

  const { darkMode } = args;

  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Blog2197Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};
