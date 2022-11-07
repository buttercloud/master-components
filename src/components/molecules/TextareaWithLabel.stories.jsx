import React, { useState } from 'react';

import TextareaWithLabel from './TextareaWithLabel';

export default {
  title: 'molecules/Inputs/TextareaWithLabel',
  component: TextareaWithLabel,
  argTypes: {
    labelColor: {
      control: 'color',
    },
  },
};

const Template = (args) => {
  const [value, setValue] = useState();

  return (
    <TextareaWithLabel
      {...args}
      value={value}
      setValue={setValue}
    />
  );
};

export const Primary = Template.bind({});

Primary.args = {
  label: 'Lorem Ipsum',
  labelColor: 'palevioletred',
  value: '',
  setValue: (newValue) => console.log('value: ', newValue),
};

Primary.storyName = 'TextareaWithLabel';
