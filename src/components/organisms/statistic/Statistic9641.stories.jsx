import React from 'react';

import Statistic9641 from './Statistic9641';
import Statistic9641Icon from './Statistic9641.icon';

export default {
  title: 'organisms/statistic/Statistic9641',
  component: Statistic9641,
};

const Template = (args) => <Statistic9641 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Statistic9641';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Statistic9641Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
