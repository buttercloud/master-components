import React from 'react';

import Header0001 from './Header0001';
import Header0001Icon from './Header0001.icon';

export default {
  title: 'organisms/header/Header0001',
  component: Header0001,
  args: {
    background: {
      styles: {
        backgroundColor: 'black',
      },
    },
  },
};

const Template = (args) => <Header0001 {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  background: {
    styles: {
      backgroundColor: 'black',
    },
  },
  logo: {
    src: 'https://dummyimage.com/100x100',
    alt: 'logo',
  },
  socialMedia: [
    {
      type: 'instagram',
      styles: {
        color: 'white',
      },
      text: 'instagram',
      url: '#',
    },
    {
      type: 'discord',
      styles: {
        color: 'white',
      },
      text: 'Discord',
      url: '#',
    },
    {
      type: 'facebook',
      styles: {
        color: 'white',
      },
      text: 'facebook',
      url: '#',
    },
  ],
};

Primary.storyName = 'Header0001';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Header0001Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
