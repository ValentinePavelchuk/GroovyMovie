import type { NextPage } from "next";
import Head from "next/head";
import Cart from "@components/Cart/Cart";
import Products from "../components/Products/Products";
import Hello, { BackgroundColor } from "../components/Hello/Hello";
import Users from "../components/Users/Users";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sand box</title>
        <meta name="description" content="My sandbox" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* <Hello title="Hello Friend" background={BackgroundColor.blue} /> */}
        <Users />
        <div style={{ display: "flex" }}>
          <Products productsCount={6} />
          <Cart />
        </div>
      </main>
    </div>
  );
};

export default Home;
