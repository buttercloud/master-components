import React from 'react';
import Header7610 from './Header7610';
import Header7610Icon from './Header7610.icon';

export default {
  title: 'organisms/header/Header7610',
  component: Header7610,
  args: {
    button16f859: {
      styles: {},
      text: 'MyWebsite',
    },
    links: [
      {
        buttond79b6c: {
          text: 'First Link',
          styles: {},
          onClick: () => {},
        },
      },
      {
        buttond79b6c: {
          text: 'Second Link',
          styles: {},
          onClick: () => {},
        },
      },
      {
        buttond79b6c: {
          text: 'Third Link',
          styles: {},
          onClick: () => {},
        },
      },
      {
        buttond79b6c: {
          text: 'Fourth Link',
          styles: {},
          onClick: () => {},
        },
      },
    ],
  },
};

const Template = (args) => <Header7610 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Header7610';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Header7610Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
