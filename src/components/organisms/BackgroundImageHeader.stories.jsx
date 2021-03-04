import React from 'react';
import BackgroundImageHeader from './BackgroundImageHeader';

export default {
  title: 'Organisms/Headers/BackgroundImage Header',
  component: BackgroundImageHeader,
  argTypes: {
    title: { control: 'text' },
    titleColor: { control: 'color' },
    subtitle: { control: 'text' },
    subtitleColor: { control: 'color' },
    backgroundImageUrl: { control: 'text' },
    logoUrl: { control: 'text' },
  },
  args: {
    title: 'DELICIOUS FOOD',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    backgroundImageUrl: 'https://demo.web3canvas.com/themeforest/tomato/img/bg2.png',
    logoUrl: 'https://demo.web3canvas.com/themeforest/tomato/img/logo.png',
    titleColor: '#fff',
    subtitleColor: '#D63BD6',
  },
};

const Template = (args) => <BackgroundImageHeader {...args} />;

export const CenteredContent = Template.bind({});

// CenteredContent.args = {}
