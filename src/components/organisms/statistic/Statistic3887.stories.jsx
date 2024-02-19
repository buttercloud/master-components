import React from 'react';

import Statistic3887 from './Statistic3887';
import Statistic3887Icon from './Statistic3887.icon';

export default {
  title: 'organisms/statistic/Statistic3887',
  component: Statistic3887,
};

const Template = (args) => <Statistic3887 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Statistic3887';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Statistic3887Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
