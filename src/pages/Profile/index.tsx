import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './styles';

import ProfileData from '../../components/ProfileData';
import RepoCard from '../../components/RepoCard';
import RandomCalendar from '../../components/RandomCalendar';
import { APIUser, APIRepo } from '../../@types';

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const Profile: React.FC = () => {
  const { username = 'thiagowilliam' } = useParams();
  const [data, setData] = useState<Data>();

  useEffect(() => {
    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/repos`),
    ]).then(async (responses) => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: 'User not found!' });
        return;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();

      const shuffledRepos = repos.sort(() => 0.5 - Math.random());
      const sliceRepos = shuffledRepos.slice(0, 6);

      setData({
        user,
        repos: sliceRepos,
      });
    });
  }, [username]);

  if (data?.error) {
    return <h1>{data.error}</h1>;
  }

  if (!data?.user || !data?.repos) {
    return <h1>Loading...</h1>;
  }

  const TabContent = () => (
    <div className="content">
      <S.RepoIcon />
      <span className="label">Repositories</span>
      <span className="number">{data.user?.public_repos}</span>
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
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
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
              {data.repos.map((item) => (
                <RepoCard
                  key={item.name}
                  username={item.owner.login}
                  reponame={item.name}
                  description={item.description}
                  language={item.language}
                  stars={item.stargazers_count}
                  forks={item.forks}
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
