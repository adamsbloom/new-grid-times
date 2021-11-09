import React from 'react';
import styled from 'styled-components/macro';
import { QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <OpinionLink href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <OpinionArticle>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </OpinionArticle>
      </Wrapper>
    </OpinionLink>
  );
};

const OpinionLink = styled.a`
  padding-top: 8px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--color-gray-300);

  &:first-of-type {
    padding-top: 0;
  }

  &:last-of-type {
    padding-bottom: 0;
    border-bottom: 0;
  }

  @media ${QUERIES.tabletOnly} {
    flex: 1;
    gap: 64px;
    padding: 0 8px;
    border-bottom: 0;

    &:first-of-type {
      padding-left: 0;
    }

    &:last-of-type {
      padding-right: 0;
    }
  }
`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  display: flex;
  gap: 32px;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row-reverse;

  @media ${QUERIES.tabletOnly} {
    display: block;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-top: 8px;
`;

const OpinionArticle = styled.div`
  justify-self: flex-start;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
