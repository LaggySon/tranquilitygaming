import styles from "../styles/SmallMatch.module.scss";

import dayjs from "dayjs";
import AdvancedFormat from "dayjs/plugin/advancedFormat";
import Timezone from "dayjs/plugin/timezone";

import Image from "next/image";
import Link from "next/link";

function convertTimestamp(string) {
  return (
    <>
      {dayjs(string).format("MMM D")}
      <br />
      {dayjs(string).format("HH:mm z")}
    </>
  );
}

export default function Match(props) {
  dayjs.extend(AdvancedFormat);
  dayjs.extend(Timezone);
  const Match = props.match;
  if (Match.tier) {
    return (
      <Link href="/matches">
        <div className={styles.matchBox}>
          <div className={styles.matchBlock}>
            <div className={styles.matchTeamBox}>
              <div className={styles.matchTeam}>
                <Image src={Match.homeLogo.url} width="40" height="40"></Image>
                {/* <span>{Match.homeName}</span> */}
              </div>
              <span id={styles.vs}>VS</span>
              <div className={styles.matchTeam}>
                <Image src={Match.awayLogo.url} width="40" height="40"></Image>
                {/* <span>{Match.awayName}</span> */}
              </div>
            </div>
            <span id={styles.time}>{convertTimestamp(Match.matchTime)}</span>
          </div>
          <span id={styles.tier}>
            {Match.tier[0] + "-" + Match.tier.split(" ")[1]}
          </span>
        </div>
      </Link>
    );
  } else {
    return (
      <Link
        href="/matches"
        className={[styles.matchBox, styles.eventBox].join(" ")}
      >
        <div>
          <span id={styles.tier}>&#8205;</span>
          <div className={styles.matchBlock}>
            <div className={styles.matchTeamBox}>
              <div className={styles.matchTeam}>
                <Image src={Match.image.url} width="40" height="40"></Image>
              </div>
            </div>
            <span id={styles.time}>{convertTimestamp(Match.startTime)}</span>
          </div>
        </div>
      </Link>
    );
  }
}
