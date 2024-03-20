export interface IInitialData {
    count: number;
    next: string;
    previous?: string;
    formatted: string;
    results: {name: string, url: string}[]
}

export interface IResultData {
    name: string;
    height: number;
    weight: number;
    image:string;
    abilities: string[];
    moves: string[];
    id: number;
}
export interface ISpeciesData {
    evolution_chain: {url: string}
}
export interface IEvolutionChainData {
    chain: {species: {name: string}, evolves_to: EvolvesTo[]};
    evolves_to: EvolvesTo[];
    species?:{name: string}
}

interface EvolvesTo {
        evolves_to: [],
        species: {
          name: string,
        },
        chain?: {species: {name: string}, evolves_to: EvolvesTo[]};
}