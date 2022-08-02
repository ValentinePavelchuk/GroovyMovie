export interface Movie {
  externalId: ExternalID;
  logo: Logo;
  poster: Poster;
  backdrop: Backdrop;
  rating: Rating;
  votes: Rating;
  videos: Videos;
  budget: Budget;
  fees: Fees;
  distributors: Distributors;
  premiere: Premiere;
  images: Images;
  collections: any[];
  updateDates: any[];
  status: string;
  movieLength: number;
  productionCompanies: ProductionCompany[];
  spokenLanguages: SpokenLanguage[];
  id: number;
  type: string;
  name: string;
  description: string;
  slogan: string;
  year: number;
  facts: Fact[];
  genres: Country[];
  countries: Country[];
  seasonsInfo: any[];
  persons: Person[];
  lists: any[];
  typeNumber: number;
  alternativeName: string;
  enName: null;
  names: Country[];
  updatedAt: Date;
  ratingMpaa: string;
  shortDescription: null;
  technology: Technology;
  ticketsOnSale: boolean;
  imagesInfo: ImagesInfo;
  sequelsAndPrequels: SequelsAndPrequel[];
  similarMovies: SimilarMovie[];
  ageRating: number;
  createDate: Date;
}

export interface Logo {
  _id: string;
  url: null | string;
}

export interface Backdrop {
  _id: string;
  url: null | string;
}

export interface Budget {
  _id: string;
  value: number;
  currency: string;
}

export interface Country {
  name: string;
}

export interface Distributors {
  distributor: string;
  distributorRelease: string;
}

export interface ExternalID {
  _id: string;
  imdb: string;
}

export interface Fact {
  value: string;
  type: Type;
  spoiler: boolean;
}

export enum Type {
  Blooper = "blooper",
  Fact = "fact",
}

export interface Fees {
  world: Budget;
  usa: Budget;
  _id: string;
}

export interface Images {
  postersCount: number;
  backdropsCount: number;
  framesCount: number;
}

export interface ImagesInfo {
  _id: string;
  framesCount: number;
}

export interface Person {
  id: number;
  name: string;
  enName: string;
  description: null | string;
  enProfession: string;
  photo: string;
}

export interface Poster {
  _id: string;
  url: string;
  previewUrl: string;
}

export interface Premiere {
  _id: string;
  country: string;
  world: Date;
  russia: Date;
  cinema: Date;
  dvd: Date;
}

export interface ProductionCompany {
  name: string;
  url: string;
  previewUrl: string;
}

export interface Rating {
  _id: string;
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface SequelsAndPrequel {
  _id: string;
}

export interface SimilarMovie {
  _id: string;
  id: number;
  name: string;
  enName: string;
  alternativeName: string;
  poster: Poster;
}

export interface SpokenLanguage {
  name: string;
  nameEn: string;
}

export interface Technology {
  _id: string;
  hasImax: boolean;
  has3D: boolean;
}

export interface Videos {
  _id: string;
  trailers: Trailer[];
  teasers: any[];
}

export interface Trailer {
  _id: string;
  url: string;
  name: string;
  site: string;
}
