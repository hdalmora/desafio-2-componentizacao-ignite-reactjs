import { GenreResponseProps } from './GenresList';
import { MoviesList, MovieProps } from './MoviesList';

interface GenresListProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}

export function Content(props: GenresListProps) {
  return (
    <div className='container'>
      <header>
        <span className='category'>
          Categoria:<span> {props.selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <MoviesList movies={props.movies} />
      </main>
    </div>
  );
}
