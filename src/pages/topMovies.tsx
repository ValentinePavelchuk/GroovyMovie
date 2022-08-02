import React, { FC } from "react";
import { GetStaticProps } from "next";
import axios from "axios";
import { makeStore } from "../store/store";
import { getTopMovies } from "../store/kino/kino.api";
import TopMovieCard from "../components/TopMocieCard/TopMovieCard";
import { Movie } from "../interfaces/Movie/Movie";

const TopMovies: FC<any> = ({ data, movies }) => {
  const sortedMovies = movies.sort((a, b) => b.rating.kp - a.rating.kp);

  console.log(sortedMovies);

  return sortedMovies.map((item, index) => {
    return <TopMovieCard movie={item} index={index} />;
  });
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await axios.get(
    `https://api.kinopoisk.dev/movie?field=rating.kp&search=8-10&field=votes.kp&search=100000-10000000&sortField=rating.kp&sortType=-1&field=typeNumber&search=1&limit=1&token=RAGDFMM-MN8MP9S-MH96EDA-9FBPB8V`
  );
  const promises: any = [];
  const movies: Movie[] = [];

  data.docs.forEach((item) => {
    return promises.push(
      axios
        .get(
          `https://api.kinopoisk.dev/movie?search=${item.id}&field=id&token=RAGDFMM-MN8MP9S-MH96EDA-9FBPB8V`
        )
        .then((res) => {
          movies.push(res.data);
        })
    );
  });

  await Promise.all(promises);

  const store = makeStore();

  await store.dispatch(getTopMovies.initiate());

  return { props: { data, movies } };
};

export default TopMovies;
