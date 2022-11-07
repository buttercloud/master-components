import React from 'react';

import Content8929 from './Content8929';
import Content8929Icon from './Content8929.icon';

export default {
  title: 'organisms/content/Content8929',
  component: Content8929,
  args: {
    cards: [
      {
        h20e21d7: {
          text: 'Lorem ipsum',
          styles: {},
        },
        p3d0a44: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        button5d8c67: {
          text: 'Learn More',
          styles: {},
          onClick: () => {},
        },
      },
      {
        h20e21d7: {
          text: 'Lorem ipsum',
          styles: {},
        },
        p3d0a44: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        button5d8c67: {
          text: 'Learn More',
          styles: {},
          onClick: () => {},
        },
      },
      {
        h20e21d7: {
          text: 'Lorem ipsum',
          styles: {},
        },
        p3d0a44: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        button5d8c67: {
          text: 'Learn More',
          styles: {},
          onClick: () => {},
        },
      },
      {
        h20e21d7: {
          text: 'Lorem ipsum',
          styles: {},
        },
        p3d0a44: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        button5d8c67: {
          text: 'Learn More',
          styles: {},
          onClick: () => {},
        },
      },
    ],
  },
};

const Template = (args) => <Content8929 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Content8929';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Content8929Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
