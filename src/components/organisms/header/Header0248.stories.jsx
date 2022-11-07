import React from 'react';
import Header0248 from './Header0248';
import Header0248Icon from './Header0248.icon';

export default {
  title: 'organisms/header/Header0248',
  component: Header0248,
  args: {
    logo: {
      src: 'https://dummyimage.com/70x70',
      alt: 'logo',
    },
    links: [
      {
        button22f896: {
          text: 'First Link',
          styles: {},
          onClick: () => {},
        },
      },
      {
        button22f896: {
          text: 'Second Link',
          styles: {},
          onClick: () => {},
        },
      },
      {
        button22f896: {
          text: 'Third Link',
          styles: {},
          onClick: () => {},
        },
      },
      {
        button22f896: {
          text: 'Fourth Link',
          styles: {},
          onClick: () => {},
        },
      },
    ],
  },
};

const Template = (args) => <Header0248 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Header0248';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Header0248Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
