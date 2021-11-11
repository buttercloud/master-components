import React from 'react';
import Testimonial8468 from './Testimonial8468';
import Testimonial8468Icon from './Testimonial8468.icon';

export default {
  title: 'organisms/testimonial/Testimonial8468',
  component: Testimonial8468,
  args: {
    cards: [
      {
        h283f86b: {
          text: 'Lorem ipsum',
          styles: {},
        },
        p82b3e2: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        p2c1f48: {
          text: 'Senior Product Designer',
          styles: {},
        },
        span2c9834: {
          text: 'Lorem ipsum',
          styles: {},
        },
        img6cc264: {
          styles: {},
          src: 'https://dummyimage.com/300x300',
          alt: '',
        },
      },
      {
        h283f86b: {
          text: 'Lorem ipsum',
          styles: {},
        },
        p82b3e2: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        p2c1f48: {
          text: 'UI Developer',
          styles: {},
        },
        span2c9834: {
          text: 'Lorem ipsum',
          styles: {},
        },
        img6cc264: {
          styles: {},
          src: 'https://dummyimage.com/300x300',
          alt: '',
        },
      },
      {
        h283f86b: {
          text: 'Lorem ipsum',
          styles: {},
        },
        p82b3e2: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        p2c1f48: {
          text: 'CTO',
          styles: {},
        },
        span2c9834: {
          text: 'Lorem ipsum',
          styles: {},
        },
        img6cc264: {
          styles: {},
          src: 'https://dummyimage.com/300x300',
          alt: '',
        },
      },
    ],
  },
};

const Template = (args) => <Testimonial8468 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Testimonial8468';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Testimonial8468Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
