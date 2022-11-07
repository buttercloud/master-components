import React from 'react';

import Header8278 from './Header8278';
import Header8278Icon from './Header8278.icon';

export default {
  title: 'organisms/header/Header8278',
  component: Header8278,
  args: {
    logo: {
      src: 'https://dummyimage.com/70x70',
      alt: 'logo',
    },
    links: [
      {
        button9831b8: {
          text: 'First Link',
          styles: {},
          onClick: () => {},
        },
      },
      {
        button9831b8: {
          text: 'Second Link',
          styles: {},
          onClick: () => {},
        },
      },
      {
        button9831b8: {
          text: 'Third Link',
          styles: {},
          onClick: () => {},
        },
      },
      {
        button9831b8: {
          text: 'Fourth Link',
          styles: {},
          onClick: () => {},
        },
      },
    ],
  },
};

const Template = (args) => <Header8278 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Header8278';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Header8278Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
