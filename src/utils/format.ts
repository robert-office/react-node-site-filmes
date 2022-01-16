import { LaravelResponseContent } from "backend/types/ApiExternalResponse";
import { format } from "date-fns";

export const round = (value: number, precision: number) => {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

export const formatLocalDate = (date: string, pattern: string) => {
    const dt = new Date(date);
    return format(dt, pattern);
}

export const formatStringWithReplaceSlash = (str : string) => {
    return str.replace(/_/g, " ");
}

export const verify = (list: LaravelResponseContent, id: number): boolean => {
    let have = false;

    list?.contents.map((list)=> {
      if ( Number(list.id_movie) == id ) {
        have = true;
      }
    });
    return have;
  }