import React from 'react';

import Hero4677 from './Hero4677';
import Hero4677Icon from './Hero4677.icon';

export default {
  title: 'organisms/hero/Hero4677',
  component: Hero4677,
};

const Template = (args) => <Hero4677 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Hero4677';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Hero4677Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
