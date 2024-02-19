import React from 'react';

import CartButton from './CartButton';

export default {
  title: 'Atoms/Buttons/Cart',
  component: CartButton,
  argTypes: {
    iconColor: { control: 'color' },
    badgeColor: { control: 'color' },
    fontColor: { control: 'color' },
    badgeNumber: { control: 'number' },
    badgePosition: { control: 'radio' },
  },
};

const Template = (args) => <CartButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  iconColor: 'palevioletred',
  badgeColor: 'palevioletred',
  badgeNumber: 5,
  badgePosition: 'bottom-left',
};

Primary.storyName = 'Cart';
