export interface PopularMoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface GenresResponse {
  genres: Genre[];
}

export interface Genre {
  id: number;
  name: string;
}

export interface MovieDetailsResponse {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null;
  budget: number;
  genres: Genre[];
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: ProductionCompany[];
  production_countries: ProductionCountry[];
  release_date: string;
  revenue: number;
  runtime: number | null;
  spoken_languages: SpokenLanguage[];
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  credits: Credits;
  videos: Videos;
  images: Images;
}

export interface Credits {
  cast: Cast[];
  crew: Crew[];
}

export interface Cast {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: string;
  job?: string;
}

export interface Crew {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  credit_id: string;
  department: string;
  job: string;
}

export interface Images {
  backdrops: Image[];
  posters: Image[];
}

export interface Image {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: null | string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface ProductionCompany {
  id: number;
  logo_path: null | string;
  name: string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface Videos {
  results: Video[];
}

export interface Video {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}

export interface SearchResponse {
  page: number;
  results: SearchResult[];
  total_results: number;
  total_pages: number;
}

export interface SearchResult {
  poster_path: null | string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: null | string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface PopularActorsResponse {
  page: number;
  results: PopularActor[];
  total_pages: number;
  total_results: number;
}

export interface PopularActor {
  adult: boolean;
  id: number;
  known_for: KnownFor[];
  name: string;
  popularity: number;
  profile_path: string;
}

export type KnownFor =
  | {
      poster_path: string | null;
      adult: boolean;
      overview: string;
      release_date: string;
      original_title: string;
      genre_ids: number[];
      id: number;
      media_type: 'movie';
      original_language: string;
      title: string;
      backdrop_path: string | null;
      popularity: number;
      vote_count: number;
      video: boolean;
      vote_average: number;
    }
  | {
      poster_path: string | null;
      popularity: number;
      id: number;
      overview: string;
      backdrop_path: string | null;
      vote_average: number;
      media_type: 'tv';
      first_air_date: string;
      origin_country: string[];
      genre_ids: number[];
      original_language: string;
      vote_count: number;
      name: string;
      original_name: string;
    };
