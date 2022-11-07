import React from 'react';

import Contact9102 from './Contact9102';
import Contact9102Icon from './Contact9102.icon';

export default {
  title: 'organisms/contact/Contact9102',
  component: Contact9102,
};

const Template = (args) => <Contact9102 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Contact9102';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Contact9102Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
