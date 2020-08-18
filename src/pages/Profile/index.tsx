import React from 'react';

import * as S from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';

const Profile: React.FC = () => {
  return (
    <S.Container>
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
        </S.RightSide>
      </S.Main>
    </S.Container>
  );
};

export default Profile;
