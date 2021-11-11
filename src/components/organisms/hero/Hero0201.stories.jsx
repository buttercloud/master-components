import React from 'react';
import Hero0201 from './Hero0201';
import Hero0201Icon from './Hero0201.icon';

export default {
  title: 'organisms/hero/Hero0201',
  component: Hero0201,
};

const Template = (args) => <Hero0201 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Hero0201';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Hero0201Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
