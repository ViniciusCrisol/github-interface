import React from 'react';

import {
  Container,
  Breadcrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  LinkButton,
  GithubIcon,
} from './styles';
import { Link } from 'react-router-dom';

const Repo: React.FC = () => {
  return (
    <Container>
      <Breadcrumb>
        <RepoIcon />
        <Link className='username' to='/ViniciusCrisol'>
          ViniciusCrisol
        </Link>

        <span>/</span>

        <Link className='repoName' to='/ViniciusCrisol/ecoleta'>
          ecoleta
        </Link>
      </Breadcrumb>

      <p>Description</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href='/github.com/ViniciusCrisol/ecoleta'>
        <GithubIcon />
        <span>View on GitHub</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
