import styled, { css } from 'styled-components';
import {
  RiGroupLine,
  RiBuilding4Line,
  RiMap2Line,
  RiMailLine,
  RiLinksLine,
} from 'react-icons/ri';

export const Container = styled.div``;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  > div {
    margin-left: 24px;

    > h1 {
      font-size: 26px;
      font-weight: 600;
      line-height: 1.25;
      color: var(--gray-dark);
    }

    > h2 {
      font-size: 20px;
      font-weight: 300;
      color: var(--username);
    }
  }

  > p {
    margin-top: 20px;
    line-height: 1.5;
    font-size: 15px;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    > div {
      margin-left: 0;
      margin-top: 16px;
    }
  }
`;

export const Avatar = styled.img`
  width: 16%;
  margin-top: -34px;
  border-radius: 50%;

  @media (min-width: 768px) {
    width: 100%;
  }
`;

export const Row = styled.ul`
  margin: 20px 0;

  display: flex;
  flex-wrap: wrap;
  align-items: center;

  > li {
    display: flex;
    align-items: center;

    > span {
      font-size: 14px;
      color: var(--gray);
    }

    > b {
      font-size: 14px;
    }

    > * {
      margin-right: 5px;
    }
  }
`;

const iconsCSS = css`
  width: 16px;
  height: 16px;

  flex-shrink: 0;
  fill: var(--icon);
`;

export const PeopleIcon = styled(RiGroupLine)`
  ${iconsCSS}
`;

export const Column = styled.ul`
  li {
    font-size: 14px;

    display: flex;
    align-items: center;

    li + li {
      margin-top: 10px;
    }

    span {
      font-size: 14px;
      margin-left: 5px;

      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }
`;

export const CompanyIcon = styled(RiBuilding4Line)`
  ${iconsCSS}
`;

export const LocationIcon = styled(RiMap2Line)`
  ${iconsCSS}
`;

export const EmailIcon = styled(RiMailLine)`
  ${iconsCSS}
`;

export const BlogIcon = styled(RiLinksLine)`
  ${iconsCSS}
`;
