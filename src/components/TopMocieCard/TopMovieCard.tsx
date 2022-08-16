import React, { FC } from "react";
import Image from "next/image";

const TopMovieCard: FC<any> = ({ movie, index }) => {
  const {
    alternativeName = "",
    name = "",
    type = "",
    shortDescription = "",
    year = "",
    rating = "",
    similarMovies = "",
    ageRating = "",
    fees = "",
    genres = "",
    slogan = "",
    budget = "",
    movieLength = "",
    countries = "",
    premiere = "",
    description = "",
    facts = "",
    persons = "",
    poster = "",
  } = { ...movie };

  return (
    <div>
      <div>
        <Image src={poster?.previewUrl} alt={name} />
      </div>
      <div>{name}</div>
      <div>
        {alternativeName}, {year}, {movieLength}min
      </div>
      <div>
        {countries && countries[0].name} * {genres && genres[0].name}
      </div>
      <div>{rating?.kp}</div>
      <div>Top 250 {index + 1}</div>
    </div>
  );
};

export default TopMovieCard;
