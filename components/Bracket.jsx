import Image from "next/image";
import styles from "../styles/Bracket.module.scss";

export async function getServerSideProps() {}

export default function Bracket(props) {
  return (
    <div className={styles.bracketContainer}>
      <Image src="/DiscordNALowerWeek10.png" width="1280" height="720"></Image>
    </div>
  );
}
