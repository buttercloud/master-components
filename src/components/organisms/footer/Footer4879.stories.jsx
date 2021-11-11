import React from 'react';
import Footer4879 from './Footer4879';
import Footer4879Icon from './Footer4879.icon';

export default {
  title: 'organisms/footer/Footer4879',
  component: Footer4879,
  args: {
    sections: [
      {
        h22b4187: {
          text: 'CATEGORIES',
          styles: {},
        },
        links: [
          {
            button2d46e5: {
              text: 'First Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button2d46e5: {
              text: 'Second Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button2d46e5: {
              text: 'Third Link',
              styles: {},
              onClick: () => {},
            },
          },
        ],
      },
      {
        h22b4187: {
          text: 'CATEGORIES',
          styles: {},
        },
        links: [
          {
            button2d46e5: {
              text: 'First Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button2d46e5: {
              text: 'Second Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button2d46e5: {
              text: 'Third Link',
              styles: {},
              onClick: () => {},
            },
          },
        ],
      },
      {
        h22b4187: {
          text: 'CATEGORIES',
          styles: {},
        },
        links: [
          {
            button2d46e5: {
              text: 'First Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button2d46e5: {
              text: 'Second Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button2d46e5: {
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

const Template = (args) => <Footer4879 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Footer4879';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Footer4879Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
