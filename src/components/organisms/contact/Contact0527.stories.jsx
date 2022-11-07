import React from 'react';

import Contact0527 from './Contact0527';
import Contact0527Icon from './Contact0527.icon';

export default {
  title: 'organisms/contact/Contact0527',
  component: Contact0527,
};

const Template = (args) => <Contact0527 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Contact0527';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Contact0527Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
