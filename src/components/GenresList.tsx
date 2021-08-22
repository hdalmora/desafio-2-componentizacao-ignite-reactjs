import { Button } from './Button';

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface GenresListProps {
  genres: GenreResponseProps[];
  handleClick(id: number): void;
  selectedGenreId: number;
}

export function GenresList(props: GenresListProps) {
  return (
    <div className='buttons-container'>
      {props.genres.map((genre) => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => props.handleClick(genre.id)}
          selected={props.selectedGenreId === genre.id}
        />
      ))}
    </div>
  );
}
