import React from 'react';
import Features01 from './Features01';

export default {
  title: 'Organisms/Features/Features01',
  component: Features01,
  argTypes: {
    content: { control: 'object' },
    backgroundColor: { control: 'color' },
    backgroundImage: { control: 'text' },
  },
};

const Template = (args) => <Features01 {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  content: [
    {
      title: 'QUALITY FOODS',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://lh3.googleusercontent.com/proxy/GwktnjVA7dIVJ0aKRK6xi1iOLokWSAfSv8dD4vQ68YQ3uL6TJ3ypXk1wHeFX9qrgC48qxMX6tPUkcngJU4uruOp2AcWosuRG9aY1c8CNzlJkdMoULJHqOjxl6sdU3AHUuWhAmWffmRQbpGR4ag',
    },
    {
      title: 'FASTEST DELIVERY',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://lh3.googleusercontent.com/proxy/GwktnjVA7dIVJ0aKRK6xi1iOLokWSAfSv8dD4vQ68YQ3uL6TJ3ypXk1wHeFX9qrgC48qxMX6tPUkcngJU4uruOp2AcWosuRG9aY1c8CNzlJkdMoULJHqOjxl6sdU3AHUuWhAmWffmRQbpGR4ag',
    },
    {
      title: 'ORIGINAL RECIPES',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      imageUrl: 'https://lh3.googleusercontent.com/proxy/GwktnjVA7dIVJ0aKRK6xi1iOLokWSAfSv8dD4vQ68YQ3uL6TJ3ypXk1wHeFX9qrgC48qxMX6tPUkcngJU4uruOp2AcWosuRG9aY1c8CNzlJkdMoULJHqOjxl6sdU3AHUuWhAmWffmRQbpGR4ag',
    },
  ],
  backgroundColor: 'palevioletred',
  backgroundImage: 'https://demo.web3canvas.com/themeforest/tomato/img/bg2.png',
  titleColor: 'palevioletred',
  descriptionColor: 'purple',
};
