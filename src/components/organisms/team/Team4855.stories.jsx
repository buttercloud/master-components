import React from 'react';
import Team4855 from './Team4855';
import Team4855Icon from './Team4855.icon';

export default {
  title: 'organisms/team/Team4855',
  component: Team4855,
  args: {
    cards: [
      {
        h2e06ce6: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h31b5141: {
          text: 'UI Designer',
          styles: {},
        },
        p2f57d7: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        span8a9007: {
          text: 'Lorem ipsum',
          styles: {},
        },
        imgc08929: {
          styles: {},
          src: 'https://dummyimage.com/204x204',
          alt: '',
        },
        buttonb2e8f9: {
          text: 'Button',
          styles: {},
          onClick: () => {},
        },
        button2c9ee5: {
          text: 'Button',
          styles: {},
          onClick: () => {},
        },
        buttonffd044: {
          text: 'Button',
          styles: {},
          onClick: () => {},
        },
      },
      {
        h2e06ce6: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h31b5141: {
          text: 'Developer',
          styles: {},
        },
        p2f57d7: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        span8a9007: {
          text: 'Lorem ipsum',
          styles: {},
        },
        imgc08929: {
          styles: {},
          src: 'https://dummyimage.com/204x204',
          alt: '',
        },
        buttonb2e8f9: {
          text: 'Button',
          styles: {},
          onClick: () => {},
        },
        button2c9ee5: {
          text: 'Button',
          styles: {},
          onClick: () => {},
        },
        buttonffd044: {
          text: 'Button',
          styles: {},
          onClick: () => {},
        },
      },
      {
        h2e06ce6: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h31b5141: {
          text: 'DevOps',
          styles: {},
        },
        p2f57d7: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        span8a9007: {
          text: 'Lorem ipsum',
          styles: {},
        },
        imgc08929: {
          styles: {},
          src: 'https://dummyimage.com/204x204',
          alt: '',
        },
        buttonb2e8f9: {
          text: 'Button',
          styles: {},
          onClick: () => {},
        },
        button2c9ee5: {
          text: 'Button',
          styles: {},
          onClick: () => {},
        },
        buttonffd044: {
          text: 'Button',
          styles: {},
          onClick: () => {},
        },
      },
      {
        h2e06ce6: {
          text: 'Lorem ipsum',
          styles: {},
        },
        h31b5141: {
          text: 'UI Designer',
          styles: {},
        },
        p2f57d7: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        span8a9007: {
          text: 'Lorem ipsum',
          styles: {},
        },
        imgc08929: {
          styles: {},
          src: 'https://dummyimage.com/204x204',
          alt: '',
        },
        buttonb2e8f9: {
          text: 'Button',
          styles: {},
          onClick: () => {},
        },
        button2c9ee5: {
          text: 'Button',
          styles: {},
          onClick: () => {},
        },
        buttonffd044: {
          text: 'Button',
          styles: {},
          onClick: () => {},
        },
      },
    ],
  },
};

const Template = (args) => <Team4855 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Team4855';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Team4855Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
