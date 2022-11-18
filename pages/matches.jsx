import styles from "../styles/Matches.module.scss";

import { request } from "../lib/datocms";
import dayjs from "dayjs";

import Separator from "../components/Separator";
import Match from "../components/Match";

export async function getServerSideProps() {
  //Get Match Data
  const data = await request({
    query: `query {broadcastSchedule{
        descriptiveText
        matchList{
          
            ... on MatchRecord {
              tier
              homeName
              homeLogo{url}
              awayName
              awayLogo{url}
              matchTime
            } ... on EventRecord {
            image{url}
            title
            startTime
            }
          }
      }
    }`,
  });
  return { props: { data } };
}

export default function Matches({ data }) {
  return (
    <div className="container">
      <Separator>
        <span>UPCOMING</span> BROADCASTS
      </Separator>
      <div id={styles.matches} className={"blockel"}>
        {data.broadcastSchedule.descriptiveText}
        <div id={styles.matchList}>
          {data.broadcastSchedule.matchList.map((match, index) => {
            //Only show broadcasts until 4 hours after their scheduled start time
            if (
              dayjs().diff(dayjs(match.matchTime)) < 14400000 &&
              dayjs().diff(dayjs(match.startTime)) < 14400000
            ) {
              return <Match match={match} key={index} />;
            }
          })}
        </div>
      </div>
    </div>
  );
}
