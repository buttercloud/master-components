import React from 'react';

import Team3864 from './Team3864';
import Team3864Icon from './Team3864.icon';

export default {
  title: 'organisms/team/Team3864',
  component: Team3864,
  args: {
    cards: [
      {
        h29f9644: {
          text: 'Lorem ipsum',
          styles: {},
        },
        pde59b6: {
          text: 'UI Designer',
          styles: {},
        },
        img64ea44: {
          styles: {},
          src: 'https://dummyimage.com/80x80',
          alt: '',
        },
      },
      {
        h29f9644: {
          text: 'Lorem ipsum',
          styles: {},
        },
        pde59b6: {
          text: 'CTO',
          styles: {},
        },
        img64ea44: {
          styles: {},
          src: 'https://dummyimage.com/80x80',
          alt: '',
        },
      },
      {
        h29f9644: {
          text: 'Lorem ipsum',
          styles: {},
        },
        pde59b6: {
          text: 'DevOps',
          styles: {},
        },
        img64ea44: {
          styles: {},
          src: 'https://dummyimage.com/80x80',
          alt: '',
        },
      },
      {
        h29f9644: {
          text: 'Lorem ipsum',
          styles: {},
        },
        pde59b6: {
          text: 'Software Engineer',
          styles: {},
        },
        img64ea44: {
          styles: {},
          src: 'https://dummyimage.com/80x80',
          alt: '',
        },
      },
      {
        h29f9644: {
          text: 'Lorem ipsum',
          styles: {},
        },
        pde59b6: {
          text: 'UX Researcher',
          styles: {},
        },
        img64ea44: {
          styles: {},
          src: 'https://dummyimage.com/80x80',
          alt: '',
        },
      },
    ],
  },
};

const Template = (args) => <Team3864 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Team3864';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Team3864Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
