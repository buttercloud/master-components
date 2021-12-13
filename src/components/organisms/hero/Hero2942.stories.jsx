import React from 'react';
import Hero2942 from './Hero2942';
import Hero2942Icon from './Hero2942.icon';

export default {
  title: 'organisms/hero/Hero2942',
  component: Hero2942,
};

const Template = (args) => <Hero2942 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Hero2942';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Hero2942Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
