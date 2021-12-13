import React from 'react';
import Header0002 from './Header0002';
import Header0002Icon from './Header0002.icon';

export default {
  title: 'organisms/header/Header0002',
  component: Header0002,
  argTypes: {},
  args: {
    title: {
      text: 'LOREM IPSUM',
      styles: {
        color: 'black',
        fontSize: 2,
      },
    },
    subtitle: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    backgroundImage: {
      src: 'https://dummyimage.com/1280x960',
      alt: '',
    },
    logo: {
      src: 'https://dummyimage.com/300x300/ffffff',
      alt: '',
    },
  },
};

const Template = (args) => <Header0002 {...args} />;

export const CenteredContent = Template.bind({});

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Header0002Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
