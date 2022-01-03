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