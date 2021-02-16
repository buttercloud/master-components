// @flow
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// TODO:
// * Change name later
// * Make product card clickable and opens the product show page

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /*scroll-behaviour: smooth;*/
  /*background-color: purple;*/
`;
const InnerContainer = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-self: center;
  min-height: 200px;
  /*background-color: red;*/
`;

const NavigatorContainer = styled.div`
  display: flex;
  flex: 0.15;
  flex-direction: column;
  justify-content: flex-start;
  padding-right: 10px;
`;
const Navigator = styled.nav`
  display: block;
  position: sticky;
  top: 0;
`;
const MenuTitle = styled.h2`
  margin-top: 0px;
`;

const UnorderedList = styled.ul`
  padding: 0px;
  list-style-type: none;
  font-size: 1.2rem;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  line-height: 1.5;
  text-align: left;
`;
const MenuHyperlink = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #acabab;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.85;
`;
const CategoryTitle = styled.h2``;
const ProductsList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const CategorySeparator = styled.hr``;
const ProductCard = styled.div`
  cursor: pointer;
  box-sizing: border-box;
  width: 250px;
  margin-right: 10px;
  margin-left: 10px;
  font-family: 'Public Sans', sans-serif;
`;
const ProductImage = styled.img`
  min-width: 100%;
  max-width: 100%;
  height: auto;
`;
const ProductInfo = styled.div`
  margin-top: 15px;
`;
const ProductName = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
  margin-top: 0;
  color: black;
`;
const ProductPrice = styled.span`
  color: #1e774c;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
`;
const ProductDescription = styled.h5`
  min-height: 25px;
  max-height: 2rem;
  line-height: 1rem;
  display: block;
  overflow: hidden;
  margin-top: 15px;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  font-weight: 500;
  color: #acabab;
  text-align: left;
`;

const Menu01 = (props) => {
  const { categories } = props;

  // const categoriesRefs = categories.reduce((acc, value) => {
  //   // acc[value.name] = useRef(null);
  //   acc[value.name] = React.createRef();
  //   return acc;
  // }, {});

  // const handleScrolling = (ref) => {
  //   ref.current.scrollInfoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //   });
  // }

  const NavBlock = () => (
    <NavigatorContainer>
      <Navigator>
        <MenuTitle>Menu</MenuTitle>
        <UnorderedList>
          {
            categories.map((category) => (
              <ListItem key={category.name}>
                <MenuHyperlink href={`#${category.name}`}>
                  {category.name}
                </MenuHyperlink>
              </ListItem>
            ))
          }
        </UnorderedList>
      </Navigator>
    </NavigatorContainer>
  );

  const ProductsBlock = () => (
    <ProductsContainer>
      {
        categories.map((category) => (
          <>
            <CategoryTitle>{category.name}</CategoryTitle>
            <ProductsList id={`#${category.name}`}>
              {
                category.products.map((product) => (
                  <ProductCard>
                    <ProductImage src={product.img_url} />
                    <ProductInfo>
                      <ProductName>{product.name}</ProductName>
                      <ProductPrice>{product.price}</ProductPrice>
                      <ProductDescription>{product.description}</ProductDescription>
                    </ProductInfo>
                  </ProductCard>
                ))
              }
            </ProductsList>
          </>
        ))
      }
    </ProductsContainer>
  )

  return (
    <Container>
      <InnerContainer>
        <NavBlock />
        <ProductsBlock />
      </InnerContainer>
    </Container>
  )
}

export default Menu01;
