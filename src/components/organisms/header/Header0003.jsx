import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import HamburgerMenuIcon from '../../../assets/svg/hamburger-menu.svg';
import XIcon from '../../../assets/svg/x.svg';
import {
  backgroundType,
  buttonType,
  imageType,
  textType,
} from '../../../customPropTypes/customPropTypes';
import {
  StyledButton,
  StyledH1,
  StyledHeader,
  StyledImage,
  StyledParagraph,
} from '../../assets/customStyledComponents';
import Header0003Icon from './Header0003.icon';

const Container = styled(StyledHeader)`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100%;
  background: url(${({ image }) => image}) no-repeat center center;
  background-size: cover;
`;
const Nav = styled.nav`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 120px;

  @media (min-width: 768px) {

  }
`;
const LinkButton = styled(StyledButton)`
  margin: 0 25px;
`;
const Logo = styled.div`
  margin: 0 10px;
`;
const MobileLogo = styled(Logo)`
  margin-right: auto;
`;
const NavBarCallToActionButton = styled(StyledButton)`
  position: absolute;
  margin-left: auto;
  top: 0.50;
  right: 25px;
  border: 1px solid white;
  padding: 10px;
  border-radius: 20px;
`;
const MobileNavBarCallToActionButton = styled(NavBarCallToActionButton)`
  margin-right: 50px;
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 85%;
  @media(min-width: 768px) {
    max-width: 60%;
  }
`;
const MainText = styled(StyledH1)`
  font-size: 5rem;
  letter-spacing: 0px;
  line-height: 90px;
  margin-bottom: 25px;
`;
const SecondaryText = styled(StyledParagraph)`
  margin-bottom: 40px;
`;
const ActionButton = styled(StyledButton)`
  padding: 15px 25px;
  border-radius: 20px;
`;
const HamburgerMenu = styled.button`
  margin-right: 25px;
`;
const SideNav = styled.div`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  flex-direction: column;
  height: 100%;
  width: 50%;
  position: fixed;
  z-index: 99;
  top: 0;
  right: 0;
  transition: 0.5s ease;
  overflow-x: hidden;
  padding-top: 50px;
  padding-left: 15px;
  padding-right: 35px;
  gap: 20px;
  background-color: white;
`;
const CloseButton = styled.button`
  margin-left: auto;
  margin-bottom: 20px;
`;

const DesktopNav = (props) => {
  const {
    leftLinks,
    logo,
    rightLinks,
    navCallToActionButton,
  } = props;

  return (
    <Nav>
      {
        leftLinks?.map((link) => (
          <div key={link.id} id={link.id}>
            <LinkButton
              id={link.id + 'button'}
              onClick={link.button?.onClick}
              customProps={link.button}
            >
              {link.button.text}
            </LinkButton>
          </div>
        ))
      }
      <Logo>
        <StyledImage
          src={logo.src}
          alt={logo.alt}
          customProps={logo}
        />
      </Logo>
      {
        rightLinks?.map((link) => (
          <div key={link.id} id={link.id}>
            <LinkButton
              id={link.id + 'button'}
              onClick={link.button?.onClick}
              customProps={link.button}
            >
              {link.button.text}
            </LinkButton>
          </div>
        ))
      }
      <NavBarCallToActionButton
        onClick={navCallToActionButton?.onClick}
        customProps={navCallToActionButton}
      >
        {navCallToActionButton.text}
      </NavBarCallToActionButton>
    </Nav>
  );
};
DesktopNav.defaultProps = {
  leftLinks: [],
  rightLinks: [],
  navCallToActionButton: {},
  logo: {},
};
DesktopNav.propTypes = {
  leftLinks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    button: buttonType,
  })),
  rightLinks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    button: buttonType,
  })),
  navCallToActionButton: buttonType,
  logo: imageType,
};

const MobileNav = (props) => {
  const {
    links,
    logo,
    navCallToActionButton,
  } = props;

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <>
      <SideNav visible={showMenu}>
        <CloseButton onClick={toggleMenu}>
          <XIcon />
        </CloseButton>
        {
          links?.map((link) => (
            <div key={link.id} id={link.id}>
              <LinkButton
                id={link.id + 'button'}
                onClick={link.button?.onClick}
                customProps={link.button}
              >
                {link.button.text}
              </LinkButton>
            </div>
          ))
        }
      </SideNav>
      <Nav>
        <MobileLogo>
          <StyledImage
            src={logo.src}
            alt={logo.alt}
            customProps={logo}
          />
        </MobileLogo>
        <MobileNavBarCallToActionButton
          onClick={navCallToActionButton?.onClick}
          customProps={navCallToActionButton}
        >
          {navCallToActionButton.text}
        </MobileNavBarCallToActionButton>
        <HamburgerMenu onClick={toggleMenu}>
          <HamburgerMenuIcon />
        </HamburgerMenu>
      </Nav>
    </>
  );
};
MobileNav.defaultProps = {
  links: [],
  navCallToActionButton: {},
  logo: {},
};
MobileNav.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    button: buttonType,
  })),
  navCallToActionButton: buttonType,
  logo: imageType,
};

/**
 * Header with a background cover image, centered navbar and centered content
 */
const Header0003 = (props) => {
  const {
    background,
    leftLinks,
    rightLinks,
    navCallToActionButton,
    logo,
    mainText,
    secondaryText,
    actionButton,
  } = props;

  const [showMobileNav, setShowMobileNav] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        if (window.innerWidth < 768) {
          setShowMobileNav(true);
        } else {
          setShowMobileNav(false);
        }
      });
    }
  }, []);

  return (
    <Container
      image={background.image?.src}
      customProps={background}
    >
      {
        showMobileNav
          ? (
            <MobileNav
              links={leftLinks.concat(rightLinks)}
              logo={logo}
              navCallToActionButton={navCallToActionButton}
            />
          ) : (
            <DesktopNav
              leftLinks={leftLinks}
              rightLinks={rightLinks}
              logo={logo}
              navCallToActionButton={navCallToActionButton}
            />
          )
      }
      <MainContent>
        <MainText customProps={mainText}>
          {mainText.text}
        </MainText>
        <SecondaryText customProps={secondaryText}>
          {secondaryText.text}
        </SecondaryText>
        <ActionButton
          onClick={actionButton?.onClick}
          customProps={actionButton}
        >
          {actionButton.text}
        </ActionButton>
      </MainContent>
    </Container>
  );
};

Header0003.icon = Header0003Icon;

Header0003.defaultProps = {
  background: {
    styles: {},
    image: '',
  },
  leftLinks: [],
  rightLinks: [],
  navCallToActionButton: {},
  logo: {},
  mainText: {},
  secondaryText: {},
  actionButton: {},
};

Header0003.propTypes = {
  /**
   * Background stuff
   */
  background: backgroundType,
  /**
   * Link on the left side of the logo
   */
  leftLinks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Button props for a link button
     */
    button: buttonType,
  })),
  /**
   * Link on the right side of the logo
   */
  rightLinks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    /**
     * Button props for a link button
     */
    button: buttonType,
  })),
  /**
   * Call to action button on nav bar
   */
  navCallToActionButton: buttonType,
  /**
   * Logo image
   */
  logo: imageType,
  /**
   * Main centered text
   */
  mainText: textType,
  /**
   * Secondary centered text
   */
  secondaryText: textType,
  /**
   * Centered action button
   */
  actionButton: buttonType,
};

export default Header0003;
