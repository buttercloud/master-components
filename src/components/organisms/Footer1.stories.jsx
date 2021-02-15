import React from 'react';
import Footer1 from './Footer1';

export default {
  title: "Organisms/Footers/Footer1",
  component: Footer1,
  argTypes: {
    backgroundColor: { control: 'color' },
    facebookPageUrl: { control: 'text' },
    instagramPageUrl: { control: 'text' },
    address: { control: 'text' },
    contact: { control: 'text' },
    hours: { control: 'text' },
  },
};

const Template = (args) => <Footer1 {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  backgroundColor: '#000000',
  facebookPageUrl: 'https://www.facebook.com/PageName',
  instagramPageUrl: 'https://www.instagram.com/PageName',
  address: 'Your address here',
  contact: '**********',
  hours: '11am to 11pm daily',
};

Primary.storyName = 'Footer1';
