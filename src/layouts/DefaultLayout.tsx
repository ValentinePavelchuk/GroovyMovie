import React, { FC } from "react";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";

interface IProps {
  children?: React.ReactNode;
}

export const DefaultLayout: FC<IProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
