import React from 'react';

import Gallery4193 from './Gallery4193';
import Gallery4193Icon from './Gallery4193.icon';

export default {
  title: 'organisms/gallery/Gallery4193',
  component: Gallery4193,
};

const Template = (args) => <Gallery4193 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Gallery4193';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Gallery4193Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
