import React from 'react';
import Header0003 from './Header0003';
import Header0003Icon from './Header0003.icon';

export default {
  title: 'organisms/header/Header0003',
  component: Header0003,
  args: {
    background: {
      styles: {
        backgroundColor: 'black',
      },
      image: 'https://dummyimage.com/1920x1080',
    },
    logo: {
      src: 'https://dummyimage.com/100x100',
      alt: '',
    },
    navCallToActionButton: {
      text: 'Book Now',
      styles: {
        color: 'white',
      },
    },
    leftLinks: [
      {
        id: Math.random().toString().slice(10),
        button: {
          text: 'Home',
        },
      },
      {
        id: Math.random().toString().slice(10),
        button: {
          text: 'Classes',
        },
      },
    ],
    rightLinks: [
      {
        id: Math.random().toString().slice(10),
        button: {
          text: 'About',
        },
      },
      {
        id: Math.random().toString().slice(10),
        button: {
          text: 'Contact',
        },
      },
    ],
    mainText: {
      text: 'Keep in touch with your inner Self',
      styles: {
        textAlign: 'center',
        color: 'white',
      },
    },
    secondaryText: {
      text: 'JOFLOW Yoga is where love lives. Feel the peace and lightness in the whole body after your first session.',
      styles: {
        textAlign: 'center',
        color: 'white',
      },
    },
    actionButton: {
      text: 'Book Now',
      styles: {
        backgroundColor: 'white',
      },
    },
  },
};

const Template = (args) => <Header0003 {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Header0003';

export const Icon = (args) => {
  const { darkMode } = args;

  let className = '';
  if (darkMode) className += 'dark-mode';

  return (
    <div className={className}>
      <Header0003Icon />
    </div>
  );
};

Icon.args = {
  darkMode: false,
};

Icon.parameters = { controls: { include: ['darkMode'] } };
