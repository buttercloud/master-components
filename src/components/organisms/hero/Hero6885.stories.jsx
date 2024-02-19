import React from 'react';

import Hero6885 from './Hero6885';
import Hero6885Icon from './Hero6885.icon';

export default {
  title: 'organisms/hero/Hero6885',
  component: Hero6885,
};

const Template = (args) => <Hero6885 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Hero6885';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Hero6885Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
