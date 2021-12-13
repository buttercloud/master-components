import React from 'react';
import Content8230 from './Content8230';
import Content8230Icon from './Content8230.icon';

export default {
  title: 'organisms/content/Content8230',
  component: Content8230,
  args: {
    cards: [
      {
        h217462d: {
          text: 'Lorem ipsum dolor sit',
          styles: {},
        },
        p91ee87: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
          styles: {},
        },
        img5b65b1: {
          styles: {},
          src: 'https://dummyimage.com/1200x500',
          alt: '',
        },
        button3e6eb1: {
          text: 'Button',
          styles: {},
          onClick: () => {},
        },
      },
      {
        h217462d: {
          text: 'Lorem ipsum',
          styles: {},
        },
        p91ee87: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt',
          styles: {},
        },
        img5b65b1: {
          styles: {},
          src: 'https://dummyimage.com/1200x500',
          alt: '',
        },
        button3e6eb1: {
          text: 'Button',
          styles: {},
          onClick: () => {},
        },
      },
    ],
  },
};

const Template = (args) => <Content8230 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Content8230';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Content8230Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
