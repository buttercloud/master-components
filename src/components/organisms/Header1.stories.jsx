import React from 'react';
import Header1 from './Header1';

export default {
  title: 'Organisms/Headers/Header1',
  component: Header1,
  argTypes: {
    backgroundColor: { control: 'color' },
    facebookPageUrl: { control: 'text' },
    facebookButtonColor: { control: 'color' },
    instagramPageUrl: { control: 'text' },
    instagramButtonColor: { control: 'color' },
    logoUrl: { control: 'text' },
  },
};

const Template = (args) => <Header1 {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  logoUrl: '',
  backgroundColor: '#1e774c',
  facebookPageUrl: 'https://www.facebook.com/PageName',
  instagramPageUrl: 'https://www.instagram.com/PageName',
};

Primary.storyName = 'Header1';
