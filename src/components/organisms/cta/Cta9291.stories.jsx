import React from 'react';
import Cta9291 from './Cta9291';
import Cta9291Icon from './Cta9291.icon';

export default {
  title: 'organisms/cta/Cta9291',
  component: Cta9291,
};

const Template = (args) => <Cta9291 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Cta9291';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Cta9291Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
