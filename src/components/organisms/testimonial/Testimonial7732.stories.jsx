import React from 'react';

import Testimonial7732 from './Testimonial7732';
import Testimonial7732Icon from './Testimonial7732.icon';

export default {
  title: 'organisms/testimonial/Testimonial7732',
  component: Testimonial7732,
};

const Template = (args) => <Testimonial7732 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Testimonial7732';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Testimonial7732Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
