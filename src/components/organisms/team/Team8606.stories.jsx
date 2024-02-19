import React from 'react';

import Team8606 from './Team8606';
import Team8606Icon from './Team8606.icon';

export default {
  title: 'organisms/team/Team8606',
  component: Team8606,
  args: {
    cards: [
      {
        h23aae33: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h3004fb7: {
          text: 'UI Designer',
          styles: {},
        },
        p80fcc7: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        span6ea60a: {
          text: 'Lorem ipsum',
          styles: {},
        },
        img8cb400: {
          styles: {},
          src: 'https://dummyimage.com/200x200',
          alt: '',
        },
        buttone7afeb: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
        buttoneb0693: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
        button21bf52: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
      },
      {
        h23aae33: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h3004fb7: {
          text: 'UI Designer',
          styles: {},
        },
        p80fcc7: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        span6ea60a: {
          text: 'Lorem ipsum',
          styles: {},
        },
        img8cb400: {
          styles: {},
          src: 'https://dummyimage.com/200x200',
          alt: '',
        },
        buttone7afeb: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
        buttoneb0693: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
        button21bf52: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
      },
      {
        h23aae33: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h3004fb7: {
          text: 'UI Designer',
          styles: {},
        },
        p80fcc7: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        span6ea60a: {
          text: 'Lorem ipsum',
          styles: {},
        },
        img8cb400: {
          styles: {},
          src: 'https://dummyimage.com/200x200',
          alt: '',
        },
        buttone7afeb: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
        buttoneb0693: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
        button21bf52: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
      },
      {
        h23aae33: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h3004fb7: {
          text: 'UI Designer',
          styles: {},
        },
        p80fcc7: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        span6ea60a: {
          text: 'Lorem ipsum',
          styles: {},
        },
        img8cb400: {
          styles: {},
          src: 'https://dummyimage.com/200x200',
          alt: '',
        },
        buttone7afeb: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
        buttoneb0693: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
        button21bf52: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
      },
    ],
  },
};

const Template = (args) => <Team8606 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Team8606';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Team8606Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
