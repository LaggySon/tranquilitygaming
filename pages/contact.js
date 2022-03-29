import Link from "next/link";
import styles from "../styles/Contact.module.scss";

export default function contact() {
  return (
    <>
      <div className="container blockel">
        <Link href="mailto:cavelier@owtranquility.com">
          <a id={styles.contactinfo}>
            <h1>Email Cavelier (cavelier@owtranquility.com)</h1>
          </a>
        </Link>
      </div>
    </>
  );
}
