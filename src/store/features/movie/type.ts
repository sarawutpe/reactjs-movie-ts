export interface TrendingMovie {
  page: number;
  results: TrendingMovieResult[];
  total_pages: number;
  total_results: number;
}

export interface TrendingMovieResult {
  adult: boolean;
  backdrop_path: string;
  id: number;
  title?: string;
  original_language: OriginalLanguage;
  original_title?: string;
  overview: string;
  poster_path: string;
  media_type: MediaType;
  genre_ids: number[];
  popularity: number;
  release_date?: Date;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
  original_name?: string;
  first_air_date?: Date;
  origin_country?: string[];
}

export enum MediaType {
  Movie = 'movie',
  Tv = 'tv'
}

export enum OriginalLanguage {
  En = 'en',
  Es = 'es',
  Ko = 'ko'
}

export interface SearchMovie {
  page: number;
  results: SearchMovieResult[];
  total_pages: number;
  total_results: number;
}

export interface SearchMovieResult {
  adult: boolean;
  backdrop_path: null | string;
  genre_ids: number[];
  id: number;
  original_language: OriginalLanguage;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: null | string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface InitialState {
  trendingMovie: null | TrendingMovie;
  searchMovie: null | SearchMovie;
}
