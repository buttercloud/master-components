import React from 'react';

import Footer0001 from './Footer0001';
import Footer0001Icon from './Footer0001.icon';

export default {
  title: 'organisms/footer/Footer0001',
  component: Footer0001,
  argTypes: {
    backgroundColor: {
      table: { category: 'Styles' },
      control: 'color',
    },
    fontFamily: {
      table: { category: 'Styles' },
      control: 'text',
    },
    fontColor: {
      table: { category: 'Styles' },
      control: 'color',
    },
    infoKeyFontSize: {
      table: { category: 'Styles' },
      control: {
        type: 'range', min: 0, max: 5, step: 0.1,
      },
    },
    infoValueFontSize: {
      table: { category: 'Styles' },
      control: {
        type: 'range', min: 0, max: 5, step: 0.1,
      },
    },
    infoFields: {
      control: 'object',
    },
  },
};

const Template = (args) => <Footer0001 {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  infoFields: [
    {
      id: Math.random().toString().slice(10),
      label: {
        styles: {
          color: 'white',
        },
        text: 'Address',
      },
      value: {
        styles: {
          color: 'white',
        },
        text: 'lorem ipsum st.',
      },
    },
    {
      id: Math.random().toString().slice(10),
      label: {
        styles: {
          color: 'white',
        },
        text: 'Contact',
      },
      value: {
        styles: {
          color: 'white',
        },
        text: '07********',
      },
    },
    {
      id: Math.random().toString().slice(10),
      label: {
        styles: {
          color: 'white',
        },
        text: 'Hours',
      },
      value: {
        styles: {
          color: 'white',
        },
        text: '11am to 11pm daily',
      },
    },
  ],
  socialMedia: [
    {
      type: 'instagram',
      styles: {
        color: 'white',
      },
      text: 'Instagram',
      url: '#',
    },
    {
      type: 'youtube',
      styles: {
        color: 'white',
      },
      text: 'Youtube',
      url: '#',
    },
    {
      type: 'facebook',
      styles: {
        color: 'white',
      },
      text: 'Facebook',
      url: '#',
    },
  ],
  background: {
    styles: {
      backgroundColor: '#000000',
      fontFamily: 'Public Sans, sans-serif',
      fontColor: '#ffffff',
    },
  },
};

Primary.storyName = 'Footer0001';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Footer0001Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
