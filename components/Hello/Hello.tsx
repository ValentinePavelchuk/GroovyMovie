import { ReactElement } from "react";
import styles from "./Hello.module.scss";
import clsx from "clsx";

export enum BackgroundColor {
  red = "red",
  blue = "blue",
}

interface IHelloProps {
  title: string;
  background: BackgroundColor;
}

const componentClassNames = clsx(styles.hello, {
  [styles.red]: BackgroundColor.red,
  [styles.blue]: BackgroundColor.blue,
});

const Hello = ({ title }: IHelloProps): ReactElement => {
  return (
    <div className={componentClassNames}>
      <span>{title}</span>
    </div>
  );
};
export default Hello;
