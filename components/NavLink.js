import Link from "next/link";
import styles from "../styles/NavLink.module.scss";

export default function NavLink(props) {
  return (
    <Link href={props.href}>
      <a id={styles.Props}>{props.children}</a>
    </Link>
  );
}
