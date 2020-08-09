import React from 'react';

import RepoCard from './RepoCard';
import ProfileData from './ProfileData';
import RandomCalendar from './RandomCalendar';

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  CalendarHeading,
  RepoIcon,
  Tab,
} from './styles';

const repositories = [
  {
    username: 'ViniciusCrisol',
    reponame: 'ecoleta',
    description: 'Next Level Week Starter/Booster',
    language: 'TypeScript',
    stars: 5,
    forks: 1,
  },
  {
    username: 'ViniciusCrisol',
    reponame: 'clone-facebook',
    description: 'A facebook clone made with ReactJs & NodeJs',
    language: 'JavaScript',
    stars: 11,
    forks: 2,
  },
  {
    username: 'ViniciusCrisol',
    reponame: 'clone-instagram',
    description: '🏗 Developement | A Instagram clone made with React & Node',
    language: 'TypeScript',
    stars: 1,
    forks: 0,
  },
  {
    username: 'ViniciusCrisol',
    reponame: 'be-the-hero',
    description: 'Projeto realizado durante a semana OmniStack 11',
    language: 'JavaScript',
    stars: 2,
    forks: 0,
  },
  {
    username: 'ViniciusCrisol',
    reponame: 'amazon-nextjs',
    description: 'A amazon interface create using NextJs & useContext',
    language: 'JavaScript',
    stars: 1,
    forks: 1,
  },
  {
    username: 'ViniciusCrisol',
    reponame: 'github-explorer',
    description: 'Um app de busca de repositórios no GitHub.',
    language: 'TypeScript',
    stars: 1,
    forks: 1,
  },
];

const Profile: React.FC = () => {
  const TabContent = () => (
    <div className='content'>
      <RepoIcon />
      <span className='label'>Repositories</span>
      <span className='number'>58</span>
    </div>
  );

  return (
    <Container>
      <Tab className='desktop'>
        <div className='wrapper'>
          <span className='offset' />
          <TabContent />
        </div>

        <span className='line'></span>
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username='ViniciusCrisol'
            name='Vinícius Poloni Crisol'
            avatarUrl='https://avatars0.githubusercontent.com/u/61323173?s=460&u=c6b1c4acabe438fe6ba6befbb17135b814d946c0&v=4'
            followers={2561}
            following={7}
            company='Incca Sistemas'
            location='Franca,SP,Brazil'
          />
        </LeftSide>

        <RightSide>
          <Tab className='mobile'>
            <TabContent />
            <span className='line' />
          </Tab>

          <Repos>
            <h2>Pinned</h2>

            <div>
              {repositories.map((repository) => (
                <RepoCard
                  key={repository.reponame}
                  username={repository.username}
                  reponame={repository.reponame}
                  description={repository.description}
                  language={repository.language}
                  stars={repository.stars}
                  forks={repository.forks}
                />
              ))}
            </div>
          </Repos>

          <CalendarHeading>875 contributions in the last year</CalendarHeading>

          <RandomCalendar />
        </RightSide>
      </Main>
    </Container>
  );
};

export default Profile;
