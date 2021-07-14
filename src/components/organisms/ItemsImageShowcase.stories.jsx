import React from 'react';
import ItemsImageShowcase from './ItemsImageShowcase';

export default {
  title: 'organisms/Features/Items Image Showcase',
  component: ItemsImageShowcase,
};

const Template = (args) => <ItemsImageShowcase {...args} />;

export const Primary = Template.bind({});

Primary.storyName = 'Items Image Showcase';

Primary.args = {
  title: {
    text: 'LOREM IPSUM',
    color: 'black',
    fontSize: 0.8,
  },
  subtitle: {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    color: 'gray',
    fontSize: 1.3,
  },
  items: [
    {
      image: {
        src: 'https://place-hold.it/1000x1500',
        alt: '',
      },
      actionButton: {
        text: 'Lorem Ipsum',
        backgroundColor: 'white',
        color: 'black',
        fontSize: 1,
        textAlign: 'center',
      },
    },
    {
      image: {
        src: 'https://place-hold.it/1000x1500',
        alt: '',
      },
      actionButton: {
        text: 'Lorem Ipsum',
        backgroundColor: 'white',
        color: 'black',
        fontSize: 1,
        textAlign: 'center',
      },
    },
    {
      image: {
        src: 'https://place-hold.it/1000x1500',
        alt: '',
      },
      actionButton: {
        text: 'Lorem Ipsum',
        backgroundColor: 'white',
        color: 'black',
        fontSize: 1,
        textAlign: 'center',
      },
    },
  ],
};
