import React from 'react';
import ItemCategoriesMenuWithBackgroundImage from './ItemCategoriesMenuWithBackgroundImage';

export default {
  title: 'organisms/ecommerce/Item Categories Menu with Background Image',
  component: ItemCategoriesMenuWithBackgroundImage,
};

const Template = (args) => <ItemCategoriesMenuWithBackgroundImage {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  categories: [
    {
      name: {
        text: 'Lorem ipsum',
        color: 'palevioletred',
        textAlign: 'left',
        fontSize: 1.3,
      },
      image: {
        src: 'https://place-hold.it/1600x1000',
      },
    },
    {
      name: { text: 'Lorem ipsum' },
      image: {
        src: 'https://place-hold.it/1600x1000',
      },
    },
    {
      name: { text: 'Lorem ipsum' },
      image: {
        src: 'https://place-hold.it/1600x1000',
      },
    },
    {
      name: { text: 'Lorem ipsum' },
      image: {
        src: 'https://place-hold.it/1600x1000',
      },
    },
  ],
};

Primary.storyName = 'Item Categories Menu with Background Image';
