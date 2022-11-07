import React from 'react';
import Footer1670 from './Footer1670';
import Footer1670Icon from './Footer1670.icon';

export default {
  title: 'organisms/footer/Footer1670',
  component: Footer1670,
  args: {
    logo: {
      src: 'https://dummyimage.com/50x50',
      alt: 'logo',
    },
    sections: [
      {
        h28c72d3: {
          text: 'CATEGORIES',
          styles: {},
        },
        links: [
          {
            button50095b: {
              text: 'First Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button50095b: {
              text: 'Second Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button50095b: {
              text: 'Third Link',
              styles: {},
              onClick: () => {},
            },
          },
        ],
      },
      {
        h28c72d3: {
          text: 'CATEGORIES',
          styles: {},
        },
        links: [
          {
            button50095b: {
              text: 'First Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button50095b: {
              text: 'Second Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button50095b: {
              text: 'Third Link',
              styles: {},
              onClick: () => {},
            },
          },
        ],
      },
      {
        h28c72d3: {
          text: 'CATEGORIES',
          styles: {},
        },
        links: [
          {
            button50095b: {
              text: 'First Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button50095b: {
              text: 'Second Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button50095b: {
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

const Template = (args) => <Footer1670 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Footer1670';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Footer1670Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
