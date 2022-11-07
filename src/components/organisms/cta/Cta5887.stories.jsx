import React from 'react';

import Cta5887 from './Cta5887';
import Cta5887Icon from './Cta5887.icon';

export default {
  title: 'organisms/cta/Cta5887',
  component: Cta5887,
};

const Template = (args) => <Cta5887 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Cta5887';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Cta5887Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
