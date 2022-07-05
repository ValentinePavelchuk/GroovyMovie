import { FC } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useGetAllProductsQuery } from "../../store/product/product.api";

export const Header: FC = () => {
  const router = useRouter();
  const currentProductId = router.asPath.split("/").pop();
  const nextProduct = currentProductId && parseInt(currentProductId, 10) + 1;
  const prevProduct = currentProductId && parseInt(currentProductId, 10) - 1;
  const { data } = useGetAllProductsQuery();
  const limitOfProducts = data && data?.length + 1;

  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/allProducts">
            <a>All products</a>
          </Link>
        </li>
        {!currentProductId && (
          <li>
            <Link href="/products/1">
              <a>First product</a>
            </Link>
          </li>
        )}
        {currentProductId && prevProduct !== 0 && (
          <li>
            <Link href={`/products/${prevProduct}`}>
              <a>Prev product</a>
            </Link>
          </li>
        )}
        {currentProductId && nextProduct !== limitOfProducts && (
          <li>
            <Link href={`/products/${nextProduct}`}>
              <a>Next product</a>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};
