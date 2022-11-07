import React from 'react';

import Content3566 from './Content3566';
import Content3566Icon from './Content3566.icon';

export default {
  title: 'organisms/content/Content3566',
  component: Content3566,
};

const Template = (args) => <Content3566 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Content3566';
// Primary.args = {};

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Content3566Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
