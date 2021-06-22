import React from 'react';
import NumberInputWithCircleActionButtons from './NumberInputWithCircleActionButtons';

export default {
  title: 'molecules/Inputs/NumberInputWithCircleActionButtons',
  component: NumberInputWithCircleActionButtons,
};

const Template = (args) => <NumberInputWithCircleActionButtons {...args} />;

export const Primary = Template.bind({});

// Primary.args = {};
Primary.storyName = 'NumberInputWithCircleActionButtons';
