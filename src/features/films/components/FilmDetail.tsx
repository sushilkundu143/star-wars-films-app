import React from 'react';
import { useAppSelector } from '../../../app/hooks';
import styled from 'styled-components';
import type { RootState } from '../../../app/store';
import type { Film } from '../filmTypes';

const DetailContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const FilmDetail: React.FC = () => {
  const film = useAppSelector((state) => state.films.selected) as Film | null;
  const selectedFilm = useAppSelector((state: RootState) => state.films.selected);

  if (!selectedFilm) {
    return <DetailContainer>No movie is selected.</DetailContainer>;
  }

  if (!film) return <DetailContainer>No movie is selected.</DetailContainer>;

  return (
    <DetailContainer>
      <h2>
        Episode {film.episode_id} - {film.title}
      </h2>
      <p><strong>Director:</strong> {film.director}</p>
      <p><strong>Producer:</strong> {film.producer}</p>
      <p><strong>Release Date:</strong> {film.release_date}</p>
      <p>{film.opening_crawl}</p>
    </DetailContainer>
  );
};

export default FilmDetail;