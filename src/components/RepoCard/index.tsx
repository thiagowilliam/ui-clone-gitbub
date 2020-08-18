import React from 'react';
import { Link } from 'react-router-dom';

import * as S from './styles';

interface Props {
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<Props> = ({
  username,
  reponame,
  description,
  language,
  stars,
  forks,
}) => {
  const languageClass = language ? language.toLocaleLowerCase() : 'other';

  return (
    <S.Container>
      <S.Topside>
        <header>
          <S.RepoIcon />
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
          <p>{description}</p>
        </header>
      </S.Topside>

      <S.Botside>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
          </li>
          <li>
            <S.StarIcon />
            <span>{stars}</span>
          </li>

          <li>
            <S.ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </S.Botside>
    </S.Container>
  );
};

export default RepoCard;
