import React from 'react';
import Content7209 from './Content7209';
import Content7209Icon from './Content7209.icon';

export default {
  title: 'organisms/content/Content7209',
  component: Content7209,
  args: {
    cards: [
      {
        h26728f1: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h31d04c8: {
          text: 'Subtitle',
          styles: {},
        },
        p1b9a6b: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        img120e93: {
          styles: {},
          src: 'https://dummyimage.com/720x400',
          alt: '',
        },
      },
      {
        h26728f1: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h31d04c8: {
          text: 'Subtitle',
          styles: {},
        },
        p1b9a6b: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        img120e93: {
          styles: {},
          src: 'https://dummyimage.com/720x400',
          alt: '',
        },
      },
      {
        h26728f1: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h31d04c8: {
          text: 'Subtitle',
          styles: {},
        },
        p1b9a6b: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        img120e93: {
          styles: {},
          src: 'https://dummyimage.com/720x400',
          alt: '',
        },
      },
      {
        h26728f1: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h31d04c8: {
          text: 'Subtitle',
          styles: {},
        },
        p1b9a6b: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        img120e93: {
          styles: {},
          src: 'https://dummyimage.com/720x400',
          alt: '',
        },
      },
    ],
  },
};

const Template = (args) => <Content7209 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Content7209';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Content7209Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
