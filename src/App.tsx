// src/App.tsx
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "./redux/hooks";
import { fetchFilms } from "./redux/slices/filmsSlice";
import FilmList from "./components/FilmList";
import FilmDetail from "./components/FilmDetail";
import styled from "styled-components";
import { clearSelectedFilm } from "./redux/slices/filmsSlice";

const AppWrapper = styled.div`
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

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  // Optional: These can later dispatch actions for filtering/sorting
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState<"episode_id" | "release_date">(
    "episode_id"
  );

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  return (
    <AppWrapper>
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
            dispatch(clearSelectedFilm()); // Reset the detail
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
    </AppWrapper>
  );
};

export default App;
