import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';

const Profile: React.FC = () => {
  const { username = 'thiagowilliam' } = useParams();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async (responses) => {
      console.log(responses);
    });
  }, [username]);

  const TabContent = () => (
    <div className="content">
      <S.RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">26</span>
    </div>
  );
  return (
    <S.Container>
      <S.Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />

          <TabContent />
        </div>
        <span className="Line" />
      </S.Tab>
      <S.Main>
        <S.LeftSide>
          <ProfileData
            username="thiagowilliam"
            name="Thiago William"
            avatarUrl="https://avatars3.githubusercontent.com/u/21371119?v=4"
            followers={999}
            following={9999}
            company="Freelancer"
            location="Brasilia, Brazil"
            email="thiago.will.silva@gmail.com"
            blog="blog.thiago.will.silva@gmail.com"
          />
        </S.LeftSide>
        <S.RightSide>
          <S.Tab className="mobile">
            <TabContent />
            <span className="Line" />
          </S.Tab>
          <S.Repos>
            <h2>Radom repos</h2>

            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username="ThiagoWillaim"
                  reponame="Um repositorio qualquer"
                  description="Description repository whatever you want"
                  language={n % 3 === 0 ? 'JavaScript' : 'TypeScript'}
                  stars={4}
                  forks={16}
                />
              ))}
            </div>
          </S.Repos>

          <S.CalendarHeading>
            Radom calendar (do not represent actual data)
          </S.CalendarHeading>

          <RandomCalendar />
        </S.RightSide>
      </S.Main>
    </S.Container>
  );
};

export default Profile;
