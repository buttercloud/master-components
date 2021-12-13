import React from 'react';
import Content8679 from './Content8679';
import Content8679Icon from './Content8679.icon';

export default {
  title: 'organisms/content/Content8679',
  component: Content8679,
  args: {
    links: [
      {
        button85f531: {
          text: 'First Link',
          styles: {},
          onClick: () => {},
        },
      },
      {
        button85f531: {
          text: 'Second Link',
          styles: {},
          onClick: () => {},
        },
      },
      {
        button85f531: {
          text: 'Third Link',
          styles: {},
          onClick: () => {},
        },
      },
      {
        button85f531: {
          text: 'Fourth Link',
          styles: {},
          onClick: () => {},
        },
      },
      {
        button85f531: {
          text: 'Fifth Link',
          styles: {},
          onClick: () => {},
        },
      },
      {
        button85f531: {
          text: 'Sixth Link',
          styles: {},
          onClick: () => {},
        },
      },
    ],
  },
};

const Template = (args) => <Content8679 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Content8679';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Content8679Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
