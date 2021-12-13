import React from 'react';
import Cta0369 from './Cta0369';
import Cta0369Icon from './Cta0369.icon';

export default {
  title: 'organisms/cta/Cta0369',
  component: Cta0369,
};

const Template = (args) => <Cta0369 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Cta0369';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Cta0369Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
