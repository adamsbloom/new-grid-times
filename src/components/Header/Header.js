import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const SearchAndMenu = () => {
  return (
    <>
      <button>
        <Search size={24} />
      </button>
      <button>
        <Menu size={24} />
      </button>
    </>
  );
};

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <SearchAndMenu />
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <ActionGroupDesktop>
          <SearchAndMenu />
        </ActionGroupDesktop>
        <Logo />
        <SubscribeActions>
          <SubscribeButton>
            <Button>Subscribe</Button>
            <SubscribeLink href="/">Already a subscriber?</SubscribeLink>
          </SubscribeButton>
        </SubscribeActions>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const ActionGroupDesktop = styled(ActionGroup)`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    display: flex;
    flex: 1;
    justify-content: flex-start;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.laptopAndUp} {
    margin-top: 8px;
    justify-content: space-between;
  }
`;

const SubscribeActions = styled.div`
  display: none;

  @media ${QUERIES.laptopAndUp} {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-self: flex-end;
  }
`;

const SubscribeButton = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
`;

const SubscribeLink = styled.a`
  text-align: center;
  color: var(--color-gray-900);
  font-size: ${14 / 16}rem;
  font-style: italic;
  text-decoration: revert;
`;

export default Header;
