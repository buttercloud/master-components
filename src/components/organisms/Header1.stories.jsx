import React from 'react';

import { storiesOf } from '@storybook/react';
import Header1 from './Header1';

// storiesOf('Headers', module)
//   .add('Header', () => <Header />);

export default {
  title: "Organisms/Headers/Header1",
  component: Header1,
  argTypes: {
    backgroundColor: { control: 'color' },
    darkMode: { control: 'boolean' },
    facebookPageUrl: { control: 'text' },
    instagramPageUrl: { control: 'text' },
  },
};

const Template = (args) => <Header1 {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  logoUrl: '',
  backgroundColor: '#1e774c',
  darkMode: false,
  facebookPageUrl: 'https://www.facebook.com/PageName',
  instagramPageUrl: 'https://www.instagram.com/PageName'
};

Primary.storyName = 'Header1';
