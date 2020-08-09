import styled, { css } from 'styled-components';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: column;

  > p {
    font-size: 16px;
  }
`;

export const Breadcrumb = styled.div`
  margin-bottom: 16px;

  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  white-space: nowrap;

  font-size: 18px;

  > a {
    color: var(--link);
    text-decoration: none;

    transition: text-decoration 200ms ease-out;

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    &.username {
      margin-left: 8px;
    }

    &.reponame {
      font-weight: 600;
    }
  }

  > span {
    margin: 0 5px;
  }
`;

const iconsCSS = css`
  width: 16px;
  height: 16px;

  flex-shrink: 0;
  fill: var(--icon);
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconsCSS}
`;

export const Stats = styled.ul`
  margin-top: 16px;

  display: flex;
  align-items: center;

  > li {
    margin-right: 9px;

    display: flex;
    align-items: center;

    > * {
      margin-right: 7px;
      color: var(--gray);
    }
  }
`;

export const StarIcon = styled(RiStarLine)`
  ${iconsCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconsCSS}
`;

export const LinkButton = styled.a`
  width: max-content;

  margin-top: 24px;
  padding: 12px 17px;
  border-radius: 24px;
  text-decoration: none;
  background-color: var(--gray-dark);

  display: flex;
  align-items: center;

  > span {
    color: var(--primary);
  }

  > svg {
    fill: var(--primary);
    margin-right: 10px;
  }
`;

export const GithubIcon = styled(FaGithub)`
  ${iconsCSS}
`;
