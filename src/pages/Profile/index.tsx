import React from 'react';

import * as S from './styles';

import ProfileData from '../../components/ProfileData';

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
          <p>Right Side</p>
        </S.RightSide>
      </S.Main>
    </S.Container>
  );
};

export default Profile;
