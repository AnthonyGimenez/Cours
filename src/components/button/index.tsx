import Link from "@docusaurus/Link";
import { ReactNode } from "react";
import styles from './index.module.css';
import clsx from "clsx";

interface buttonProps {
  title: string,
  link: string
}

/**
 * @brief This function is a button for the main pages.
 *
 * @return Returns the button.
 */
export default function ButtonCourse({ title, link } : buttonProps) : ReactNode {
  return (
    <Link to={link} className={styles.button}>
      <h1>{title}</h1>
    </Link>
  );
}
