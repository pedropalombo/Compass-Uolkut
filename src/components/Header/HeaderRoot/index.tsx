import { ReactNode } from "react";
import logo from "../../../assets/images/logo-orkut.svg";
import styles from "./HeaderRoot.module.css";

interface HeaderRootProps {
  className: string;
  children?: ReactNode;
}

export const HeaderRoot = ({ className, children }: HeaderRootProps) => {
  return (
    <header className={`${styles.header} ${styles[className]}`}>
      <h1>
        <img src={logo} alt="" />
      </h1>

      {children}
    </header>
  );
};
