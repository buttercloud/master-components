import React from 'react';
import Cta9114 from './Cta9114';
import Cta9114Icon from './Cta9114.icon';

export default {
  title: 'organisms/cta/Cta9114',
  component: Cta9114,
};

const Template = (args) => <Cta9114 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Cta9114';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Cta9114Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
