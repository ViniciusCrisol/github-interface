import styled, { css } from 'styled-components';
import { RiBookMarkLine, RiStarLine } from 'react-icons/ri';
import { AiOutlineFork } from 'react-icons/ai';

export const Container = styled.div`
  padding: 16px;
  border-radius: 6px;
  border: 1px solid var(--border);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TopSide = styled.div`
  > header {
    display: flex;
    align-items: center;

    > a {
      font-size: 14px;
      font-weight: 600;
      color: var(--link);
      text-decoration: none;

      margin-left: 8px;
      transition: text-decoration 200ms ease-out;

      &:hover,
      &:focus {
        text-decoration: underline;
      }
    }
  }

  > p {
    flex: 1;
    font-size: 12px;
    color: var(--gray);
    letter-spacing: 0.1px;

    margin: 8px 0 16px;
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;

  flex-shrink: 0;
  fill: var(--icon);
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`;

export const BotSide = styled.div`
  > ul {
    display: flex;
    align-items: center;

    > li {
      display: flex;
      align-items: center;
      margin-right: 16px;

      > span {
        margin-left: 5px;

        font-size: 12px;
        color: var(--gray);
      }
    }
  }

  .language {
    width: 12px;
    height: 12px;

    flex-shrink: 0;
    border-radius: 50%;

    &.other {
      background-color: var(--other-language);
    }
    &.javascript {
      background-color: var(--javascript);
    }
    &.typescript {
      background-color: var(--typescript);
    }
  }
`;

export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;
