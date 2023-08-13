import Link from "next/link";
import styles from "../styles/NavLink.module.scss";

export default function NavLink(props) {
  return (
    <Link href={props.href} id={styles.Props}>
      {props.children}
    </Link>
  );
}
