import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.nav`
  height: 53px;
  padding: 0 16px;
  background-color: var(--header);

  display: flex;
  align-items: center;
`;

export const GithubLogo = styled(FaGithub)`
  width: 32px;
  height: 32px;

  flex-shrink: 0;
  fill: var(--logo);
`;

export const SearchForm = styled.form`
  width: 100%;
  padding-left: 16px;

  input {
    width: 100%;

    padding: 7px 12px;
    border-radius: 6px;
    background-color: var(--search);

    transition: width 200ms ease-out, color 200ms ease-out;

    &:focus {
      width: 318px;
    }
  }
`;
