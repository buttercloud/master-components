import styled from 'styled-components';

const StyledContainer = styled.div.attrs((props) => ({
  onClick: props?.customProps?.onClick,
  styles: props?.customProps?.styles,
}))`
  width: 100%;
  font-size: ${({ styles }) => styles?.fontSize}rem;
  font-family: ${({ styles }) => styles?.fontFamily} !important;
  background-color: ${({ styles }) => styles?.backgroundColor};
`;
const StyledDiv = styled.div.attrs((props) => ({
  onClick: props?.customProps?.onClick,
  styles: props?.customProps?.styles,
}))`
  font-size: ${({ styles }) => styles?.fontSize}rem;
  font-family: ${({ styles }) => styles?.fontFamily} !important;
  background-color: ${({ styles }) => styles?.backgroundColor};
  /*border-color: ${({ styles }) => styles?.borderColor};*/
  /*border-bottom-color: red;*/
`;

// TODO
// find a way to use this textStyles css object on all styled text below
// instead of writing all these props in all of them
// const textStyles = css`
//   font-family: ${({ styles }) => styles?.fontFamily};
//   font-size: ${({ styles }) => styles?.fontSize}rem;
//   color: ${({ styles }) => color};
//   text-align: ${({ styles }) => styles?.textAlign};
// `;

const StyledSpan = styled.span.attrs((props) => ({
  onClick: props?.customProps?.onClick,
  styles: props?.customProps?.styles,
}))`
  font-family: ${({ styles }) => styles?.fontFamily} !important;
  font-size: ${({ styles }) => styles?.fontSize}rem;
  color: ${({ styles }) => styles?.color};
  text-align: ${({ styles }) => styles?.textAlign};
`;
const StyledParagraph = styled.p.attrs((props) => ({
  onClick: props?.customProps?.onClick,
  styles: props?.customProps?.styles,
}))`
  font-family: ${({ styles }) => styles?.fontFamily} !important;
  font-size: ${({ styles }) => styles?.fontSize}rem !important;
  color: ${({ styles }) => styles?.color};
  text-align: ${({ styles }) => styles?.textAlign};
`;
const StyledLabel = styled.label.attrs((props) => ({
  onClick: props?.customProps?.onClick,
  styles: props?.customProps?.styles,
}))`
  font-family: ${({ styles }) => styles?.fontFamily} !important;
  font-size: ${({ styles }) => styles?.fontSize}rem !important;
  color: ${({ styles }) => styles?.color};
  text-align: ${({ styles }) => styles?.textAlign};
`;
const StyledH1 = styled.h1.attrs((props) => ({
  onClick: props?.customProps?.onClick,
  styles: props?.customProps?.styles,
}))`
  font-family: ${({ styles }) => styles?.fontFamily} !important;
  font-size: ${({ styles }) => styles?.fontSize}rem !important;
  color: ${({ styles }) => styles?.color};
  text-align: ${({ styles }) => styles?.textAlign};
`;
const StyledH2 = styled.h2.attrs((props) => ({
  onClick: props?.customProps?.onClick,
  styles: props?.customProps?.styles,
}))`
  font-family: ${({ styles }) => styles?.fontFamily} !important;
  font-size: ${({ styles }) => styles?.fontSize}rem !important;
  color: ${({ styles }) => styles?.color};
  text-align: ${({ styles }) => styles?.textAlign};
`;
const StyledH3 = styled.h3.attrs((props) => ({
  onClick: props?.customProps?.onClick,
  styles: props?.customProps?.styles,
}))`
  font-family: ${({ styles }) => styles?.fontFamily} !important;
  font-size: ${({ styles }) => styles?.fontSize}rem !important;
  color: ${({ styles }) => styles?.color};
  text-align: ${({ styles }) => styles?.textAlign};
`;
const StyledH4 = styled.h4.attrs((props) => ({
  onClick: props?.customProps?.onClick,
  styles: props?.customProps?.styles,
}))`
  font-family: ${({ styles }) => styles?.fontFamily} !important;
  font-size: ${({ styles }) => styles?.fontSize}rem !important;
  color: ${({ styles }) => styles?.color};
  text-align: ${({ styles }) => styles?.textAlign};
`;
const StyledH5 = styled.h5.attrs((props) => ({
  onClick: props?.customProps?.onClick,
  styles: props?.customProps?.styles,
}))`
  font-family: ${({ styles }) => styles?.fontFamily} !important;
  font-size: ${({ styles }) => styles?.fontSize}rem !important;
  color: ${({ styles }) => styles?.color};
  text-align: ${({ styles }) => styles?.textAlign};
`;
const StyledH6 = styled.h6.attrs((props) => ({
  onClick: props?.customProps?.onClick,
  styles: props?.customProps?.styles,
}))`
  font-family: ${({ styles }) => styles?.fontFamily} !important;
  font-size: ${({ styles }) => styles?.fontSize}rem !important;
  color: ${({ styles }) => styles?.color};
  text-align: ${({ styles }) => styles?.textAlign};
`;

const StyledImage = styled.img.attrs((props) => ({
  onClick: props?.customProps?.onClick,
  styles: props?.customProps?.styles,
}))``;

const StyledButton = styled.button.attrs((props) => ({
  onClick: props?.customProps?.onClick,
  styles: props?.customProps?.styles,
}))`
  font-family: ${({ styles }) => styles?.fontFamily} !important;
  font-size: ${({ styles }) => styles?.fontSize}rem;
  color: ${({ styles }) => styles?.color};
  text-align: ${({ styles }) => styles?.textAlign};
  background-color: ${({ styles }) => styles?.backgroundColor};
`;

const StyledTextarea = styled.textarea.attrs((props) => ({
  onClick: props?.customProps?.onClick,
}))``;
const StyledInput = styled.input.attrs((props) => ({
  onClick: props?.customProps?.onClick,
}))``;
const StyledFooter = styled.footer.attrs((props) => ({
  onClick: props?.customProps?.onClick,
  styles: props?.customProps?.styles,
}))`
  background-color: ${({ styles }) => styles?.backgroundColor};
`;
const StyledHeader = styled.header.attrs((props) => ({
  onClick: props?.customProps?.onClick,
  styles: props?.customProps?.styles,
}))`
  background-color: ${({ styles }) => styles?.backgroundColor};
`;
const StyledAnchor = styled.a.attrs((props) => ({
  onClick: props?.customProps?.onClick,
  styles: props?.customProps?.styles,
}))`
  font-family: ${({ styles }) => styles?.fontFamily} !important;
  font-size: ${({ styles }) => styles?.fontSize}rem;
  color: ${({ styles }) => styles?.color};
  text-align: ${({ styles }) => styles?.textAlign};
  background-color: ${({ styles }) => styles?.backgroundColor};
`;

export {
  StyledContainer,
  StyledSpan,
  StyledParagraph,
  StyledLabel,
  StyledH1,
  StyledH2,
  StyledH3,
  StyledH4,
  StyledH5,
  StyledH6,
  StyledImage,
  StyledButton,
  StyledTextarea,
  StyledInput,
  StyledFooter,
  StyledHeader,
  StyledDiv,
  StyledAnchor,
};
