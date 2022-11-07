import React from 'react';
import styled from 'styled-components';

import {
  backgroundType,
  buttonType,
  textType,
} from '../../../customPropTypes/customPropTypes';
import {
  StyledButton,
  StyledContainer,
  StyledH5,
  StyledParagraph,
} from '../../assets/customStyledComponents';
import Content0001Icon from './Content0001.icon';

const Container = styled(StyledContainer)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 20px;
`;
const Title = styled(StyledH5)`
  text-align: center;
  margin: 25px 0;
  width: 75%;
  color: ${(props) => props.color};
  font-weight: 400;
  letter-spacing: 0.5px;
`;
const Paragraph = styled(StyledParagraph)`
  margin: 10px 0px 35px 0px;
  width: 75%;
  letter-spacing: 0.5px;
  font-weight: 400;
  line-height: 1.7;
`;
const ActionButton = styled(StyledButton)`
  border: 1px solid black;
  padding: 15px 45px;
  cursor: pointer;
  &:active {
    transform: translateY(1px);
  }
`;

const Content0001 = (props) => {
  const {
    background,
    title,
    paragraph,
    actionButton,
  } = props;

  return (
    <Container customProps={background}>
      <Title customProps={title}>
        {title?.text}
      </Title>
      <Paragraph customProps={paragraph}>
        {paragraph?.text}
      </Paragraph>
      <ActionButton customProps={actionButton}>
        {actionButton?.text}
      </ActionButton>
    </Container>
  );
};

Content0001.icon = Content0001Icon;

Content0001.defaultProps = {
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

Content0001.propTypes = {
  /**
   * Background styles.
   */
  background: backgroundType,
  /**
   * Title.
   */
  title: textType,
  /**
   * Paragraph.
   */
  paragraph: textType,
  /**
   * Call to Action Button.
   */
  actionButton: buttonType,
};

export default Content0001;
