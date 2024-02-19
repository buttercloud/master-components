import React from 'react';

import Contact2724 from './Contact2724';
import Contact2724Icon from './Contact2724.icon';

export default {
  title: 'organisms/contact/Contact2724',
  component: Contact2724,
};

const Template = (args) => <Contact2724 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Contact2724';
// Primary.args = {};

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Contact2724Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
