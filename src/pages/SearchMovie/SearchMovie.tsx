import React, { useEffect } from 'react';
import AdminLayout from '../../layouts';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, Dispatch } from '../../store';
import { SearchMovieResult } from '../../store/features/movie/type';
import { useDebounce } from '@react-hook/debounce';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField
} from '@mui/material';
import HourglassDisabledIcon from '@mui/icons-material/HourglassDisabled';
import { actions } from '../../store/action';

const SearchMovie: React.FC<any> = () => {
  const dispatch = useDispatch<Dispatch>();
  const movieReducer = useSelector((state: RootState) => state.movieSlice.searchMovie);

  const [search, setSearch] = useDebounce<string>('', 200);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    dispatch(actions.getMovieBySearch(search));
  }, [search]);

  return (
    <>
      <AdminLayout>
        <Box mb={2}>
          <Typography variant="h6">Search Movies {search}</Typography>
          <TextField onChange={handleSearch} type="search" variant="outlined" label="Search" fullWidth />
        </Box>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>adult</TableCell>
                <TableCell>backdrop_path</TableCell>
                <TableCell>id</TableCell>
                <TableCell>title</TableCell>
                <TableCell>original_language</TableCell>
                <TableCell>original_title</TableCell>
                <TableCell>overview</TableCell>
                <TableCell>poster_path</TableCell>
                <TableCell>genre_ids</TableCell>
                <TableCell>popularity</TableCell>
                <TableCell>release_date</TableCell>
                <TableCell>video</TableCell>
                <TableCell>vote_average</TableCell>
                <TableCell>vote_count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movieReducer?.results.length ? (
                movieReducer?.results?.map((row: SearchMovieResult, index: number) => (
                  <>
                    <TableRow>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell>{String(row.adult)}</TableCell>
                      <TableCell>
                        <img
                          src={'https://image.tmdb.org/t/p/w500' + row.backdrop_path}
                          width={200}
                          alt="backdrop path"
                        />
                      </TableCell>
                      <TableCell>{row.id}</TableCell>
                      <TableCell>{row.title}</TableCell>
                      <TableCell>{row.original_language}</TableCell>
                      <TableCell>{row.original_title}</TableCell>
                      <TableCell>{row.overview}</TableCell>
                      <TableCell>
                        <img src={'https://image.tmdb.org/t/p/w500' + row.poster_path} width={200} alt="poster" />
                      </TableCell>
                      <TableCell>
                        {row?.genre_ids.map((row) => (
                          <ul>
                            <li>{row}</li>
                          </ul>
                        ))}
                      </TableCell>
                      <TableCell>{row.popularity}</TableCell>
                      <TableCell>{String(row.release_date)}</TableCell>
                      <TableCell>{String(row.video)}</TableCell>
                      <TableCell>{row.vote_average}</TableCell>
                      <TableCell>{String(row.vote_count)}</TableCell>
                    </TableRow>
                  </>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={15}>
                    <HourglassDisabledIcon sx={{ my: 8 }} fontSize="large" />
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </AdminLayout>
    </>
  );
};

export default SearchMovie;
