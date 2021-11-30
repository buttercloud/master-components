import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  textType,
  buttonType,
} from '../../../customPropTypes/customPropTypes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.backgroundColor};
  padding-bottom: 20px;
`;
const Title = styled.h5`
  text-align: center;
  margin: 25px 50px 5px 50px;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}rem;
  font-weight: 400;
  letter-spacing: 0.5px;
`;
const Paragraph = styled.p`
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 20px;
  color: ${(props) => props.color};
  letter-spacing: 0.5px;
  font-size: ${(props) => props.fontSize}rem;
  font-weight: 400;
  line-height: 1.7;
`;
const ActionButton = styled.button`
  border: 1px solid black;
  padding: 15px 45px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}rem;
  cursor: pointer;
  &:active {
    transform: translateY(1px);
  }
`;

const TextBlock = (props) => {
  const {
    title,
    paragraph,
    background,
    actionButton,
  } = props;

  return (
    <Container
      backgroundColor={background?.backgroundColor
        || TextBlock.defaultProps.background.backgroundColor}
    >
      <Title
        color={title.color || TextBlock.defaultProps.title.color}
        fontSize={title.fontSize || TextBlock.defaultProps.title.color}
      >
        {title.text}
      </Title>
      <Paragraph
        color={paragraph.color || TextBlock.defaultProps.paragraph.color}
        fontSize={paragraph.fontSize || TextBlock.defaultProps.paragraph.color}
      >
        {paragraph.text}
      </Paragraph>
      <ActionButton
        onClick={actionButton?.onClick}
        backgroundColor={
          actionButton?.backgroundColor || TextBlock.defaultProps.actionButton.backgroundColor
        }
        color={actionButton?.color || TextBlock.defaultProps.actionButton.color}
        fontSize={actionButton?.fontSize || TextBlock.defaultProps.actionButton.fontSize}
      >
        {actionButton?.text}
      </ActionButton>
    </Container>
  );
};

TextBlock.defaultProps = {
  background: {
    backgroundColor: '#fff',
  },
  title: {
    color: '#000',
    fontSize: 1,
    text: '',
  },
  paragraph: {
    color: '#000',
    fontSize: 1.5,
    text: '',
  },
  actionButton: {
    backgroundColor: '#fff',
    color: '#000',
    fontSize: 1,
    text: '',
  },
};

TextBlock.propTypes = {
  /**
   * Title.
   */
  title: textType,
  /**
   * Paragraph.
   */
  paragraph: textType,
  /**
   * Background styles.
   */
  background: PropTypes.shape({
    backgroundColor: PropTypes.string,
  }),
  /**
   * Call to Action Button.
   */
  actionButton: buttonType,
};

export default TextBlock;
