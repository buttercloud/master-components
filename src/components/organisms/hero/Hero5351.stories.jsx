import React from 'react';
import Hero5351 from './Hero5351';
import Hero5351Icon from './Hero5351.icon';

export default {
  title: 'organisms/hero/Hero5351',
  component: Hero5351,
};

const Template = (args) => <Hero5351 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Hero5351';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Hero5351Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
