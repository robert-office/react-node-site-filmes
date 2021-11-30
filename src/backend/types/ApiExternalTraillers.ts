export type ApiExternalTraillers = {
    id?: number;
    results: TraillerResult[]
}

export type TraillerResult = {
    iso_639_1: string
    iso_3166_1: string
    name: string
    key: string
    site: string
    size: number
    type: string
    official: boolean
    published: string
    id: string
}