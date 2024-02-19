import React from 'react';

import Statistic3613 from './Statistic3613';
import Statistic3613Icon from './Statistic3613.icon';

export default {
  title: 'organisms/statistic/Statistic3613',
  component: Statistic3613,
};

const Template = (args) => <Statistic3613 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Statistic3613';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Statistic3613Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
