import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css"

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <menu>
        <li>
          <NavLink to={"/"}>Асосӣ</NavLink>
        </li>
        <li>
          <NavLink to={"/students-page"}>Донишҷуён</NavLink>
        </li>
        <li>
          <NavLink to={"/lectures-page"}>Лекторҳо</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Гуруҳҳо</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Фанҳо</NavLink>
        </li>
        <li>
          <NavLink to={"/"}>Ҷадвал</NavLink>
        </li>
      </menu>
    </nav>
  );
}
