import React from 'react';
import Carousel from './Carousel';

export default {
  title: 'molecules/Carousel',
  component: Carousel,
};

const Template = (args) => <Carousel {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  children: [
    <div style={{ width: '100%' }}><img src="https://place-hold.it/200.png" alt="" /></div>,
    <div style={{ width: '100%' }}><img src="https://place-hold.it/200x200/3fb8d3.png" alt="" /></div>,
    <div style={{ width: '100%' }}><img src="https://place-hold.it/200.png" alt="" /></div>,
  ],
  arrows: false,
  autoplay: false,
};
Primary.storyName = 'Carousel';
