import React from 'react';
import ImageGalleryWithThumbnails from './ImageGalleryWithThumbnails';

export default {
  title: 'molecules/ImageGalleryWithThumbnails',
  component: ImageGalleryWithThumbnails,
};

const Template = (args) => (
  <div
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
    }}
  >
    <div
      style={{
        width: '50%',
        height: '50%',
      }}
    >
      <ImageGalleryWithThumbnails {...args} />
    </div>
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  srcs: [
    'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fsimply-delicious-food.com%2Fwp-content%2Fuploads%2F2015%2F07%2FBacon-and-cheese-burgers-3.jpg&f=1&nofb=1',
    'https://images.pexels.com/photos/7190474/pexels-photo-7190474.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    'https://images.pexels.com/photos/2090900/pexels-photo-2090900.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
  ],
  // thumbnailListLocation: 'right',
};

Primary.storyName = 'ImageGalleryWithThumbnails';
