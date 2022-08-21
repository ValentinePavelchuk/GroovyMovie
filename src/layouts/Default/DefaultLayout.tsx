import React, { FC } from "react";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import styles from "./styles.module.scss";

interface IProps {
  children?: React.ReactNode;
}

export const DefaultLayout: FC<IProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
