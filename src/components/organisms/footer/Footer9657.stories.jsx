import React from 'react';
import Footer9657 from './Footer9657';
import Footer9657Icon from './Footer9657.icon';

export default {
  title: 'organisms/footer/Footer9657',
  component: Footer9657,
  args: {
    logo: {
      src: 'https://dummyimage.com/50x50',
      alt: 'logo',
    },
  },
};

const Template = (args) => <Footer9657 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Footer9657';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Footer9657Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
