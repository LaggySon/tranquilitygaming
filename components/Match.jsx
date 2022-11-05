import styles from "../styles/Match.module.scss";

import dayjs from "dayjs";
import AdvancedFormat from "dayjs/plugin/advancedFormat";
import Timezone from "dayjs/plugin/timezone";

import Image from "next/image";

function convertTimestamp(string) {
  return dayjs(string).format("MMMM D [at] h:mma z");
}

export default function Match(Match) {
  dayjs.extend(AdvancedFormat);
  dayjs.extend(Timezone);
  return (
    <div className={styles.matchBox}>
      <span id={styles.tier}>{Match.tier}</span>
      <span id={styles.time}>{convertTimestamp(Match.matchTime)}</span>
      <div className={styles.matchTeamBox}>
        <div className={styles.matchTeam}>
          <Image src={Match.homeLogo.url} width="200" height="200"></Image>
          <span>{Match.homeName}</span>
        </div>
        <span id={styles.vs}>VS</span>
        <div className={styles.matchTeam}>
          <Image src={Match.awayLogo.url} width="200" height="200"></Image>
          <span>{Match.awayName}</span>
        </div>
      </div>
    </div>
  );
}
