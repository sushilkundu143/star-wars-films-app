import React from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectFilm } from '../filmsSlice';
import styled from 'styled-components';
import type { RootState } from '../../../app/store';
import type { Film } from '../filmTypes';

const ListContainer = styled.div`
  padding: 1rem;
  overflow-y: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background-color: #f5f5f5;
  }

  th, td {
    padding: 0.75rem;
    text-align: left;
    border-bottom: 1px solid #ccc;
  }

  tbody tr {
    cursor: pointer;
  }

  tbody tr:hover {
    background-color: #eef2ff;
  }
`;


type Props = {
  searchTerm: string;
  sortBy: 'episode_id' | 'title' | 'release_date';
};

const FilmList: React.FC<Props> = ({ searchTerm, sortBy }) => {
  const dispatch = useAppDispatch();
  const films = useAppSelector((state: RootState) => state.films.items) as Film[];
  const status = useAppSelector((state) => state.films.status);

  if (status === 'loading') return <p>Loading films...</p>;
  if (status === 'failed') return <p>Failed to load films.</p>;

  // Filter films by searchTerm
  const filteredFilms = films.filter((film) =>
    film.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort films by the specified key
  const sortedFilms = [...filteredFilms].sort((a, b) => {
    if (sortBy === 'episode_id') {
      return a.episode_id - b.episode_id;
    }
    if (sortBy === 'release_date') {
      return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
    }
    return a.title.localeCompare(b.title);
  });

  return (
    <ListContainer>
      <Table>
        <tbody>
          {sortedFilms.map((film) => (
            <tr key={film.episode_id} onClick={() => dispatch(selectFilm(film))}>
              <td><span>EPISODE</span> {film.episode_id}</td>
              <td>{film.title}</td>
              <td>{film.release_date}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </ListContainer>
  );
};

export default FilmList;
