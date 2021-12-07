import React from 'react';
import Showcase0001 from './Showcase0001';
import Showcase0001Icon from './Showcase0001.icon';

export default {
  title: 'organisms/gallery/Showcase0001',
  component: Showcase0001,
  args: {
    background: {},
    title: {
      text: 'Popular Classes',
      styles: {
        fontSize: 3.5,
      },
    },
    callToActionButton: {
      text: 'View all Classes',
      styles: {
        fontSize: 1.5,
      },
    },
    items: [
      {
        image: {
          src: 'https://dummyimage.com/250x250',
        },
        title: {
          text: 'Morning Flow',
        },
        subtitle: {
          text: 'Saturday 09:00 am',
        },
        description: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        callToActionButton: {
          text: 'Book now',
        },
      },
      {
        image: {
          src: 'https://dummyimage.com/250x250',
        },
        title: {
          text: 'Morning Flow',
        },
        subtitle: {
          text: 'Saturday 09:00 am',
        },
        description: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        callToActionButton: {
          text: 'Book now',
        },
      },
      {
        image: {
          src: 'https://dummyimage.com/250x250',
        },
        title: {
          text: 'Morning Flow',
        },
        subtitle: {
          text: 'Saturday 09:00 am',
        },
        description: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        callToActionButton: {
          text: 'Book now',
        },
      },
    ],
  },
};

const Template = (args) => <Showcase0001 {...args} />;

export const Primary = Template.bind({});
Primary.storyName = 'Showcase0001';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Showcase0001Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
