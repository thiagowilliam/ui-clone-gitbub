import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

const Repo: React.FC = () => {
  return (
    <S.Container>
      <S.Breadcrumb>
        <S.RepoIcon />

        <Link className="username" to="/thiagowilliam">
          thiagowilliam
        </Link>

        <span>/</span>

        <Link className="reponame" to="/thiagowilliam/youtube-content">
          youtube-content
        </Link>
      </S.Breadcrumb>

      <p>Contains all of my youtube lessons code.</p>

      <S.Stats>
        <li>
          <S.StarIcon />
          <b>9</b>
        </li>

        <li>
          <S.ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </S.Stats>

      <S.LinkButton href="https://github.com/thiagowilliam/ui-clone-gitbub">
        <S.GithubIcon />
        <span>View on Github</span>
      </S.LinkButton>
    </S.Container>
  );
};

export default Repo;
