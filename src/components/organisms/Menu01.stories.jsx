import React from 'react';
import Menu01 from './Menu01';

export default {
  title: 'Organisms/Menus/Menu01',
  component: Menu01,
  argTypes: {
    categories: {
      name: 'Categories with Products',
      control: 'object',
    },
  },
};

const Template = (args) => <Menu01 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  categories: [
    {
      name: 'Category #1',
      products: [
        {
          name: 'Product #1',
          img_url: 'https://place-hold.it/300x300/aaa/ffffff.png&bold&fontsize=15',
          description: 'This is Product #1',
          price: 'JOD 7.49',
        },
        {
          name: 'Product #2',
          img_url: 'https://place-hold.it/300x300/aaa/ffffff.png&bold&fontsize=15',
          description: 'This is Product #2',
          price: 'JOD 3.49',
        },
        {
          name: 'Product #5',
          img_url: 'https://place-hold.it/300x300/aaa/ffffff.png&bold&fontsize=15',
          description: 'This is Product #5',
          price: 'JOD 5.50',
        },
      ],
    },
    {
      name: 'Category #2',
      products: [
        {
          name: 'Product #3',
          img_url: 'https://place-hold.it/300x300/aaa/ffffff.png&bold&fontsize=15',
          description: 'This is Product #3',
          price: 'JOD 6.99',
        },
        {
          name: 'Product #4',
          img_url: 'https://place-hold.it/300x300/aaa/ffffff.png&bold&fontsize=15',
          description: 'This is Product #4',
          price: 'JOD 4.20',
        },
      ],
    },
  ],
};
