import React from 'react';
import Testimonial9017 from './Testimonial9017';
import Testimonial9017Icon from './Testimonial9017.icon';

export default {
  title: 'organisms/testimonial/Testimonial9017',
  component: Testimonial9017,
  args: {
    cards: [
      {
        p9d1e0c: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        spanfb7e6c: {
          text: 'Lorem ipsum',
          styles: {},
        },
        span5a5f22: {
          text: 'Lorem ipsum',
          styles: {},
        },
        spancb9f5c: {
          text: 'UI DEVELOPER',
          styles: {},
        },
        img21a991: {
          styles: {},
          src: 'https://dummyimage.com/100x100',
          alt: '',
        },
        buttona565e9: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
      },
      {
        p9d1e0c: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        spanfb7e6c: {
          text: 'Lorem ipsum',
          styles: {},
        },
        span5a5f22: {
          text: 'Lorem ipsum',
          styles: {},
        },
        spancb9f5c: {
          text: 'UI DEVELOPER',
          styles: {},
        },
        img21a991: {
          styles: {},
          src: 'https://dummyimage.com/100x100',
          alt: '',
        },
        buttona565e9: {
          text: 'Lorem ipsum',
          styles: {},
          onClick: () => {},
        },
      },
    ],
  },
};

const Template = (args) => <Testimonial9017 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Testimonial9017';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Testimonial9017Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
