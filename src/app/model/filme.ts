// src/app/model/filme.ts
export interface Filme {
    Title: string;
    Year: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Country: string;
    Poster: string;
    Type?: string;
    imdbID?: string;
    Response?: string;
    Error?: string;
}