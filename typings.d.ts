export interface Genre {
  id: number;
  name: string;
}

export interface Movie {
  title: string;
  backdrop_path: string;
  media_type?: string;
  release_date?: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
}

export interface Companies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

export interface Languages {
  english_name: string;
}

export interface Details {
  backdrop_path: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  genres: Genre[];
  production_companies: Companies[];
  title: string;
  name: string;
  original_name: string;
  spoken_languages: Languages[];
  seasons: Seasons[];
}

export interface Seasons {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface Result {
  id: number;
  key: string;
  name: string;
}

export interface Cast {
  id: number;
  profile_path: string;
  name: string;
  original_name: string;
  character: string;
}

export interface CastPerson {
  id: number;
  profile_path: string;
  name: string;
  known_for_department: string;
  biography: string;
  place_of_birth: string;
  birthday: string;
  gender: number;
  popularity: number;
  also_known_as: string[];
}

export interface PopularTyping {
  adult: boolean;
  gender: number;
  id: number;
  name: string;
  popularity: number;
  profile_path: string;
  known_for_department: string;
}

export interface CastDataTyping {
  id: number;
  poster_path: string;
  title: string;
}

export interface Episode {
  air_date: string;
  crew: any[];
  episode_number: number;
  guest_stars: Cast[];
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: number;
  vote_average: number;
  vote_count: number;
}

export interface SeasonDetail {
  air_date: string;
  name: string;
  episodes: Episode[];
  id: number;
  overview: string;
  poster_path: string;
  season_number: number;
  _id: string;
}

export interface MovieTrailer {
  id: string;
  iso_639_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}

export interface Element {
  type:
    | "Bloopers"
    | "Featurette"
    | "Behind the Scenes"
    | "Clip"
    | "Trailer"
    | "Teaser";
}
