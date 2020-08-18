import React from 'react';

import * as S from './styles';

const Header: React.FC = () => {
  return (
    <S.Container>
      <S.GithubLogo />
      <S.SearchForm>
        <input type="text" placeholder="Enter Userbane or Repo" />
      </S.SearchForm>
    </S.Container>
  );
};

export default Header;
