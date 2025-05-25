import React from 'react';
import { useAppSelector } from '../redux/hooks';
import styled from 'styled-components';
import type { RootState } from '../redux/store';

const DetailContainer = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #f7f7f7;
`;

type Film = {
  episode_id: number;
  title: string;
  director: string;
  producer: string;
  release_date: string;
  opening_crawl: string;
};

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