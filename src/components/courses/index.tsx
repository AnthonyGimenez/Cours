import { ReactNode } from "react";
import ButtonCourse from "../button";
import styles from "./index.module.css"

/**
 * @brief Lis of all the courses.
 */
const courses = [
  {
    title: "Mathématique",
    link: "/docs/category/mathématique"
  },
  {
    title: "Algorithmie",
    link: "/docs/category/algorithmie"
  },
  {
    title: "foo",
    link: "/"
  },
  {
    title: "foo",
    link: "/"
  },
  {
    title: "foo",
    link: "/"
  },
  {
    title: "foo",
    link: "/"
  },
  {
    title: "foo",
    link: "/"
  },
  {
    title: "foo",
    link: "/"
  },
  {
    title: "foo",
    link: "/"
  }
]



/**
 * @brief This function returns the grid of the courses buttons.
 *
 * @return Returns the grid where there are the buttons.
 */
export default function CoursesGrid() : ReactNode {
  return (
    <div className={styles.grid}>
      {
        courses.map((props, _) => (
            <ButtonCourse {...props}/>
          )
        )
      }
    </div>
  );
}
