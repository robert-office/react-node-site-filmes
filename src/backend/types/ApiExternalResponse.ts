import { Genre } from "./ApiExternalGenre";

export type ApiExternalResponse = {
  page?: number;
  results: ApiExternalResults[];
  total_pages: number;
  total_results: number;  
};


export type ApiExternalResults = {
  backdrop_path?: string;
  first_air_date?: string;
  id: number;
  name?: string;
  title?: string;
  original_title? : string;
  origin_country?: [];
  original_language?: string;
  original_name?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  vote_average: number;
  vote_count?: number;
  genre_ids?: Genre[];
  media_type: string;
};

export type LaravelResponseContent = {
  lenght?: number,
  contents: content[]
}

export type content = {
  id? : string,
  id_movie? : string,
  name? : string,
  title? : string,
  poster_path? : string
}

export type HistoryContent = {
  lenght: number,
  history: HistoryType[]
}

export type HistoriesType = {
  history: HistoryType[]
}

export type HistoryType = {
  id: number,
  type: string,
  type_id: number,
  ad_content: string,
  created_at: string

}