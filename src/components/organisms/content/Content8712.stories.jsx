import React from 'react';
import Content8712 from './Content8712';
import Content8712Icon from './Content8712.icon';

export default {
  title: 'organisms/content/Content8712',
  component: Content8712,
  args: {
    cards: [
      {
        h269c32a: {
          text: 'Lorem ipsum',
          styles: {},
        },
        pff6413: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        img3d2872: {
          styles: {},
          src: 'https://dummyimage.com/1200x500',
          alt: '',
        },
        button5911fd: {
          text: 'Learn More',
          styles: {},
          onClick: () => {},
        },
      },
      {
        h269c32a: {
          text: 'Lorem ipsum',
          styles: {},
        },
        pff6413: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        img3d2872: {
          styles: {},
          src: 'https://dummyimage.com/1200x500',
          alt: '',
        },
        button5911fd: {
          text: 'Learn More',
          styles: {},
          onClick: () => {},
        },
      },
      {
        h269c32a: {
          text: 'Lorem ipsum',
          styles: {},
        },
        pff6413: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        img3d2872: {
          styles: {},
          src: 'https://dummyimage.com/1200x500',
          alt: '',
        },
        button5911fd: {
          text: 'Learn More',
          styles: {},
          onClick: () => {},
        },
      },
    ],
  },
};

const Template = (args) => <Content8712 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Content8712';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Content8712Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
