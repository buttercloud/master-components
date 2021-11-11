import React from 'react';
import Hero1392 from './Hero1392';
import Hero1392Icon from './Hero1392.icon';

export default {
  title: 'organisms/hero/Hero1392',
  component: Hero1392,
};

const Template = (args) => <Hero1392 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Hero1392';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Hero1392Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
