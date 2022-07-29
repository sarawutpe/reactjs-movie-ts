import MovieIcon from '@mui/icons-material/Movie';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';

export const menu = [
  {
    href: '/',
    icon: <MovieIcon fontSize="small" />,
    title: 'Movie'
  },
  {
    href: '/searchMovie',
    icon: <MovieFilterIcon fontSize="small" />,
    title: 'Search Movie'
  },
];
