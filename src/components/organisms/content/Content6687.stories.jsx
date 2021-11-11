import React from 'react';
import Content6687 from './Content6687';
import Content6687Icon from './Content6687.icon';

export default {
  title: 'organisms/content/Content6687',
  component: Content6687,
};

const Template = (args) => <Content6687 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Content6687';
// Primary.args = {};

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Content6687Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
