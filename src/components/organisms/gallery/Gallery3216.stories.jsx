import React from 'react';

import Gallery3216 from './Gallery3216';
import Gallery3216Icon from './Gallery3216.icon';

export default {
  title: 'organisms/gallery/Gallery3216',
  component: Gallery3216,
};

const Template = (args) => <Gallery3216 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Gallery3216';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Gallery3216Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
