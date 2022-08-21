import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Logo from "@components/Header/components/Logo";
import { useGetProductsQuery } from "@store/product/product.api";
import Search from "./components/Search";
import styles from "./styles.module.scss";

export const Header: FC = () => {
  const router = useRouter();
  const [page, setPage] = useState(0);
  const { data } = useGetProductsQuery();
  const limitOfProducts = data && data?.length + 1;

  useEffect(() => {
    return setPage(Number(router?.asPath?.split("/").pop()));
  }, [router?.asPath]);

  return (
    <div className={styles.header}>
      <Logo />
      <Search />
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/topMovies">
            <a>Top Movies</a>
          </Link>
        </li>
        <li>
          <Link href="/allProducts">
            <a>All products</a>
          </Link>
        </li>
        {!page && (
          <li>
            <button type="button" onClick={() => setPage(1)}>
              <Link href="/products/1">
                <a>First product</a>
              </Link>
            </button>
          </li>
        )}
        {!!page && page !== 0 && page !== limitOfProducts && (
          <li>
            <button
              type="button"
              onClick={() => setPage((prevState) => prevState + 1)}
            >
              <Link href={`/products/${page + 1}`}>
                <a>Next product</a>
              </Link>
            </button>
          </li>
        )}
        {!!page && page !== 1 && (
          <li>
            <button
              type="button"
              onClick={() => setPage((prevState) => prevState - 1)}
            >
              <Link href={`/products/${page - 1}`}>
                <a>Prev product</a>
              </Link>
            </button>
          </li>
        )}
      </ul>
    </div>
  );
};
