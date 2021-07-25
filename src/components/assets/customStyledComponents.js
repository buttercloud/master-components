import styled from 'styled-components';

const StyledContainer = styled.div`
  font-size: ${({ fontSize }) => fontSize}rem;
  font-family: ${({ fontFamily }) => fontFamily};
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

// TODO
// find a way to use this textStyles css object on all styled text below
// instead of writing all these props in all of them
// const textStyles = css`
//   font-family: ${({ fontFamily }) => fontFamily};
//   font-size: ${({ fontSize }) => fontSize}rem;
//   color: ${({ color }) => color};
//   text-align: ${({ textAlign }) => textAlign};
// `;

const StyledParagraph = styled.p`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
`;
const StyledLabel = styled.label`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
`;
const StyledH1 = styled.h1`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
`;
const StyledH2 = styled.h2`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
`;
const StyledH3 = styled.h3`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
`;
const StyledH4 = styled.h4`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
`;
const StyledH5 = styled.h5`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
`;
const StyledH6 = styled.h6`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}rem;
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
`;

export {
  StyledContainer,
  StyledParagraph,
  StyledLabel,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
};
