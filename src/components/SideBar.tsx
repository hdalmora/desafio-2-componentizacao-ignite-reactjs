import { useEffect, useState, useRef } from 'react';

import { api } from '../services/api';
import { GenresList, GenreResponseProps } from './GenresList';

interface SideBarProps {
  handleClickSidebarOptionButton(id: number): void;
}

export function SideBar(props: SideBarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);
  const selectedGenreId = useRef<number>(1);

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then((response) => {
      setGenres(response.data);
    });
  }, []);

  const handleClickButton = (id: number) => {
    selectedGenreId.current = id;
    props.handleClickSidebarOptionButton(id);
  };

  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <GenresList
        genres={genres}
        handleClick={handleClickButton}
        selectedGenreId={selectedGenreId.current}
      />
    </nav>
  );
}
