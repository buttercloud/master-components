import React from 'react';
import BackgroundImageHeader from './BackgroundImageHeader';

export default {
  title: 'Organisms/Headers/BackgroundImage Header',
  component: BackgroundImageHeader,
  argTypes: {},
  args: {
    title: {
      text: 'LOREM IPSUM',
      color: 'black',
      fontSize: 2,
    },
    subtitle: {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    },
    backgroundImage: {
      src: 'https://static.wixstatic.com/media/dcb373_711a346adf8f48fda26d20182545b4d9~mv2_d_2000_1333_s_2.png/v1/fill/w_2000,h_1159,al_c,q_95/dcb373_711a346adf8f48fda26d20182545b4d9~mv2_d_2000_1333_s_2.webp',
    },
    logo: {
      src: 'https://place-hold.it/300x300/E8E8E8.png',
      alt: '',
    },
  },
};

const Template = (args) => <BackgroundImageHeader {...args} />;

export const CenteredContent = Template.bind({});
