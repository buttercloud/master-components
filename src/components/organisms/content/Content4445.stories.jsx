import React from 'react';

import Content4445 from './Content4445';
import Content4445Icon from './Content4445.icon';

export default {
  title: 'organisms/content/Content4445',
  component: Content4445,
  args: {
    cards: [
      {
        h221b9ac: {
          text: 'Lorem ipsum',
          styles: {},
        },
        p9e5837: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
      },
      {
        h221b9ac: {
          text: 'Lorem ipsum',
          styles: {},
        },
        p9e5837: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
      },
      {
        h221b9ac: {
          text: 'Lorem ipsum',
          styles: {},
        },
        p9e5837: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
      },
      {
        h221b9ac: {
          text: 'Lorem ipsum',
          styles: {},
        },
        p9e5837: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
      },
      {
        h221b9ac: {
          text: 'Lorem ipsum',
          styles: {},
        },
        p9e5837: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
      },
      {
        h221b9ac: {
          text: 'Lorem ipsum',
          styles: {},
        },
        p9e5837: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
      },
    ],
  },
};

const Template = (args) => <Content4445 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Content4445';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Content4445Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
