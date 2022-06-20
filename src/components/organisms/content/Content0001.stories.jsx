import React from 'react';
import Content0001 from './Content0001';
import Content0001Icon from './Content0001.icon';

export default {
  title: 'organisms/content/Content0001',
  component: Content0001,
  args: {
    title: {
      text: 'Lorem ipsum',
      styles: {
        color: '#000',
        fontSize: 2,
      },
    },
    paragraph: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      styles: {
        color: '#000',
        fontSize: 1.3,
      },
    },
    background: {
      styles: {
        backgroundColor: '#fff',
      },
    },
    actionButton: {
      text: 'LOREM IPSUM',
      styles: {
        backgroundColor: '#fff',
        color: '#000',
        fontSize: 1,
      },
    },
  },
};

const Template = (args) => <Content0001 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Content0001';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Content0001Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
