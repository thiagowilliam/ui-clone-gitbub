import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import * as S from './styles';

const Header: React.FC = () => {
  const [search, setSearch] = useState('');
  const navigate = useNavigate();
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate(`/${search.toLowerCase().trim()}`);
  }

  return (
    <S.Container>
      <S.GithubLogo />
      <S.SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Userbane or Repo..."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </S.SearchForm>
    </S.Container>
  );
};

export default Header;
