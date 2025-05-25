import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { fetchFilms, clearSelectedFilm } from "../features/films";
import FilmList from "../features/films/components/FilmList";
import FilmDetail from "../features/films/components/FilmDetail";
import styled from "styled-components";

const PageWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  gap: 1rem;
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid #ccc;

  input {
    flex: 1;
    padding: 0.5rem;
    font-size: 1rem;
  }

  select {
    padding: 0.5rem;
    font-size: 1rem;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
`;

const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"episode_id" | "release_date">(
    "episode_id"
  );

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
    <PageWrapper>
      <TopBar>
        <input
          type="search"
          placeholder="Search films..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value as "episode_id" | "release_date");
            dispatch(clearSelectedFilm());
          }}
        >
          <option value="episode_id">Episode</option>
          <option value="release_date">Year</option>
        </select>
      </TopBar>

      <ContentGrid>
        <FilmList searchTerm={searchTerm} sortBy={sortBy} />
        <FilmDetail />
      </ContentGrid>
    </PageWrapper>
  );
};

export default Home;