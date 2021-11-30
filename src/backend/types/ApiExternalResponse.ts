import { Genre } from "./ApiExternalGenre";

export type ApiExternalResponse = {
  page?: number;
  results: ApiExternalResults[];
  total_pages?: number;
  total_results?: number;  
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
