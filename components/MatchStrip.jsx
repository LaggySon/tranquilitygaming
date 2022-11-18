import { request } from "../lib/datocms";
import dayjs from "dayjs";

import styles from "../styles/MatchStrip.module.scss";

//components
import SmallMatch from "./SmallMatch";

export default function MatchStrip(props) {
  const data = props.data;
  return (
    <div id={styles.matches}>
      {data.broadcastSchedule.matchList.map((match, index) => {
        //Only show broadcasts until 4 hours after their scheduled start time
        if (
          dayjs().diff(dayjs(match.matchTime)) < 14400000 &&
          dayjs().diff(dayjs(match.startTime)) < 14400000
        ) {
          return <SmallMatch match={match} key={index} />;
        }
      })}
    </div>
  );
}
