import { ExternalMovies } from "backend/ApiTypesObjects/ApiTypeExternalMovies";
import { httpController } from "backend/controllers/htppController";

export type ApiExternalResponseReviews = {
  id?: number;
  page?: number;
  results: ApiExternalResultsReviews[];
  total_pages?: number;
  total_results?: number;
};

export type ApiExternalResultsReviews = {
  author: string;
  author_details: ApiExternalAuthorDetails;
  content: string;
  created_at: string;
  id: string;
  updated_at: string;
  url: string;
};

export type ApiExternalAuthorDetails = {
  name: string;
  username: string;
  avatar_path: string;
  rating: number;
};

export class getReviewsService {
  execute(movieOrTv: string, id: number) {
    const http = new httpController();

    /// retorna o get da API
    return http
      .handle(new ExternalMovies())
      .get<ApiExternalResponseReviews>(
        `/${movieOrTv}/${id}/reviews?api_key=${process.env.REACT_APP_BASE_API_FILMES_KEY}`
      );
  }
}
