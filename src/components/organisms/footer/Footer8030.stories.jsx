import React from 'react';
import Footer8030 from './Footer8030';
import Footer8030Icon from './Footer8030.icon';

export default {
  title: 'organisms/footer/Footer8030',
  component: Footer8030,
  args: {
    logo: {
      src: 'https://dummyimage.com/100x100',
      alt: '',
    },
    sections: [
      {
        h2c60623: {
          text: 'CATEGORIES',
          styles: {},
        },
        links: [
          {
            button0fe4a7: {
              text: 'First Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button0fe4a7: {
              text: 'Second Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button0fe4a7: {
              text: 'Third Link',
              styles: {},
              onClick: () => {},
            },
          },
        ],
      },
      {
        h2c60623: {
          text: 'CATEGORIES',
          styles: {},
        },
        links: [
          {
            button0fe4a7: {
              text: 'First Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button0fe4a7: {
              text: 'Second Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button0fe4a7: {
              text: 'Third Link',
              styles: {},
              onClick: () => {},
            },
          },
        ],
      },
      {
        h2c60623: {
          text: 'CATEGORIES',
          styles: {},
        },
        links: [
          {
            button0fe4a7: {
              text: 'First Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button0fe4a7: {
              text: 'Second Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button0fe4a7: {
              text: 'Third Link',
              styles: {},
              onClick: () => {},
            },
          },
        ],
      },
    ],
  },
};

const Template = (args) => <Footer8030 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Footer8030';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Footer8030Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
