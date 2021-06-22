import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
`;
const Image = styled.img`
  width: 100%;
  max-width: 100%;
  height: 100%;
  align-self: flex-start;
  border-radius: 5px;
`;
const ThumbnailList = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  /*background-color: red;*/
`;
const ThumbnailContainer = styled.button`
  padding: 0;
  width: 60px;
  height: 60px;
  margin: 10px 5px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid ${(props) => props.borderColor};
  background-color: transparent;
`;
const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`;

const ImageGalleryWithThumbnails = (props) => {
  const {
    srcs,
    thumbnailListLocation,
  } = props;
  const [currentImage, setCurrentImage] = useState(srcs?.[0]);

  let containerDirection = 'column';
  let listDirection = 'row';
  if (['left', 'right'].includes(thumbnailListLocation)) {
    containerDirection = 'row';
    listDirection = 'column';
  }

  const handleChangingImage = (event: SyntheticMouseEvent<HTMLElement>) => {
    setCurrentImage(event.target.src);
  };

  return (
    <Container direction={containerDirection}>
      {
        ['right', 'bottom'].includes(thumbnailListLocation)
          ? <Image src={currentImage} alt="" />
          : null
      }
      <ThumbnailList direction={listDirection}>
        {
          srcs.map((image) => (
            <ThumbnailContainer
              key={Math.random().toString().slice(10)}
              borderColor={image === currentImage ? 'blue' : '#DADADA'}
              onClick={handleChangingImage}
            >
              <Thumbnail src={image} alt="" />
            </ThumbnailContainer>
          ))
        }
      </ThumbnailList>
      {
        ['left', 'top'].includes(thumbnailListLocation)
          ? <Image src={currentImage} alt="" />
          : null
      }
    </Container>
  );
};

ImageGalleryWithThumbnails.defaultProps = {
  thumbnailListLocation: 'bottom',
};

ImageGalleryWithThumbnails.propTypes = {
  /**
  * A list of images urls/paths
  */
  srcs: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
  * Thumbnail list location
  */
  thumbnailListLocation: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
};

export default ImageGalleryWithThumbnails;
