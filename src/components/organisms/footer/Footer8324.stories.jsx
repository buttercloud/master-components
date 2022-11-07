import React from 'react';
import Footer8324 from './Footer8324';
import Footer8324Icon from './Footer8324.icon';

export default {
  title: 'organisms/footer/Footer8324',
  component: Footer8324,
  args: {
    logo: {
      src: 'https://dummyimage.com/50x50',
      alt: 'logo',
    },
    sections: [
      {
        h268b71e: {
          text: 'CATEGORIES',
          styles: {},
        },
        links: [
          {
            button50f353: {
              text: 'First Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button50f353: {
              text: 'Second Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button50f353: {
              text: 'Third Link',
              styles: {},
              onClick: () => {},
            },
          },
        ],
      },
      {
        h268b71e: {
          text: 'CATEGORIES',
          styles: {},
        },
        links: [
          {
            button50f353: {
              text: 'First Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button50f353: {
              text: 'Second Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button50f353: {
              text: 'Third Link',
              styles: {},
              onClick: () => {},
            },
          },
        ],
      },
      {
        h268b71e: {
          text: 'CATEGORIES',
          styles: {},
        },
        links: [
          {
            button50f353: {
              text: 'First Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button50f353: {
              text: 'Second Link',
              styles: {},
              onClick: () => {},
            },
          },
          {
            button50f353: {
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

const Template = (args) => <Footer8324 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Footer8324';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Footer8324Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
