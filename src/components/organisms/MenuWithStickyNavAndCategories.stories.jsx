import React from 'react';
import MenuWithStickyNavAndCategories from './MenuWithStickyNavAndCategories';

export default {
  title: 'Organisms/Menus/Menu With Sticky Nav And Categories',
  component: MenuWithStickyNavAndCategories,
  argTypes: {
    categories: {
      name: 'Categories with Products',
      control: 'object',
    },
  },
};

const Template = (args) => <MenuWithStickyNavAndCategories {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  categories: [
    {
      name: {
        text: 'Category #1',
      },
      products: [
        {
          name: {
            text: 'Product #1',
          },
          image: {
            src: 'https://place-hold.it/300x300/aaa/ffffff.png&bold&fontsize=15',
          },
          description: {
            text: 'This is Product #1',
          },
          price: {
            cents: 7400,
            currency: 'JOD',
            precision: 3,
          },
        },
        {
          name: {
            text: 'Product #2',
          },
          image: {
            src: 'https://place-hold.it/300x300/aaa/ffffff.png&bold&fontsize=15',
          },
          description: {
            text: 'This is Product #2',
          },
          price: {
            cents: 3490,
            currency: 'JOD',
            precision: 3,
          },
        },
        {
          name: {
            text: 'Product #5',
          },
          image: {
            src: 'https://place-hold.it/300x300/aaa/ffffff.png&bold&fontsize=15',
          },
          description: {
            text: 'This is Product #5',
          },
          price: {
            cents: 5500,
            currency: 'JOD',
            precision: 3,
          },
        },
      ],
    },
    {
      name: {
        text: 'Category #2',
      },
      products: [
        {
          name: {
            text: 'Product #3',
          },
          image: {
            src: 'https://place-hold.it/300x300/aaa/ffffff.png&bold&fontsize=15',
          },
          description: {
            text: 'This is Product #3',
          },
          price: {
            cents: 6990,
            currency: 'JOD',
            precision: 3,
          },
        },
        {
          name: {
            text: 'Product #4',
          },
          image: {
            src: 'https://place-hold.it/300x300/aaa/ffffff.png&bold&fontsize=15',
          },
          description: {
            text: 'This is Product #4',
          },
          price: {
            cents: 4200,
            currency: 'JOD',
            precision: 3,
          },
        },
      ],
    },
  ],
  cartButton: {
    badge: {
      number: 3,
    },
  },
};

Primary.storyName = 'Menu With Sticky Nav And Categories';
