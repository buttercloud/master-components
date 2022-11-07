import React from 'react';

import Blog2266 from './Blog2266';
import BlogIcon from './Blog2266.icon';

export default {
  title: 'organisms/blog/Blog2266',
  component: Blog2266,
  args: {
    cards: [
      {
        id: Math.random().toString().slice(10),
        spanadd6c3: {
          text: 'CATEGORY',
          styles: {},
        },
        button353254: {
          text: 'Learn More',
          styles: {},
          onClick: () => {},
        },
        p27b16b: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        h29de95d: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        spanf9a557: {
          text: '12 Jun 2021',
          styles: {},
        },
      },
      {
        id: Math.random().toString().slice(10),
        spanadd6c3: {
          text: 'CATEGORY',
          styles: {},
        },
        button353254: {
          text: 'Learn More',
          styles: {},
          onClick: () => {},
        },
        p27b16b: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        h29de95d: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        spanf9a557: {
          text: '12 Jun 2021',
          styles: {},
        },
      },
      {
        id: Math.random().toString().slice(10),
        spanadd6c3: {
          text: 'CATEGORY',
          styles: {},
        },
        button353254: {
          text: 'Learn More',
          styles: {},
          onClick: () => {},
        },
        p27b16b: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        h29de95d: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        spanf9a557: {
          text: '12 Jun 2021',
          styles: {},
        },
      },
      {
        id: Math.random().toString().slice(10),
        spanadd6c3: {
          text: 'CATEGORY',
          styles: {},
        },
        button353254: {
          text: 'Learn More',
          styles: {},
          onClick: () => {},
        },
        p27b16b: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          styles: {},
        },
        h29de95d: {
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          styles: {},
        },
        spanf9a557: {
          text: '12 Jun 2021',
          styles: {},
        },
      },
    ],
  },
};

const Template = (args) => <Blog2266 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Blog2266';
// Primary.args = {};

export const Icon = (args) => {
  let className = '';

  const { darkMode } = args;

  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      {/* <img src={blogIcon} alt="blog2266" /> */}
      <BlogIcon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

// export const Icon = Blog2266Icon;
// Icon.args = {
//   className: 'dark-mode',
// };
