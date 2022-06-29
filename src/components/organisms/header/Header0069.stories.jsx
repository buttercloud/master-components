import React from 'react';
import Header0069 from './Header0069';
import Header0069Icon from './Header0069.icon';

export default {
  title: 'organisms/header/Header0069',
  component: Header0069,
  args: {
    logo: {
      src: 'https://dummyimage.com/70x70',
      alt: 'logo',
    },
    links: [
      {
        buttonff2cb2: {
          text: 'First Link',
          styles: {},
          onClick: () => {},
        },
      },
      {
        buttonff2cb2: {
          text: 'Second Link',
          styles: {},
          onClick: () => {},
        },
      },
      {
        buttonff2cb2: {
          text: 'Third Link',
          styles: {},
          onClick: () => {},
        },
      },
      {
        buttonff2cb2: {
          text: 'Fourth Link',
          styles: {},
          onClick: () => {},
        },
      },
    ],
  },
};

const Template = (args) => <Header0069 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Header0069';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Header0069Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
