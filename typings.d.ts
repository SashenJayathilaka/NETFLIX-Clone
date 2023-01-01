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

export interface Element {
  type:
    | "Bloopers"
    | "Featurette"
    | "Behind the Scenes"
    | "Clip"
    | "Trailer"
    | "Teaser";
}
