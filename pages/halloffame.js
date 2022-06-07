import Separator from "../components/Separator";
import styles from "../styles/HallOfFame.module.scss";
import data from "../public/hof.json";

function HofInductees(props) {
  return (
    <div className={styles.HofInductees}>
      <h3>Inductees</h3>
      <div className={styles.HofList}>
        {props.list.map((name) => (
          <div className={styles.HofMember} key={name}>
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

function ChampTeam(props) {
  return (
    <div className={styles.ChampTeam}>
      <h3>Champions</h3>
      <div className={styles.ChampMembers}>
        {props.list.map((name) => (
          <div key={name}>{name}</div>
        ))}
      </div>
    </div>
  );
}

function Season(props) {
  return (
    <div className={styles.season}>
      <Separator>{props.when}</Separator>
      {/* display inductees if they exist for the season */}
      {props.list.inductees && <HofInductees list={props.list.inductees} />}
    </div>
  );
}

export default function halloffame() {
  console.log(data.s3);
  return (
    <div className={"container " + styles.HofContainer}>
      <Season when="Inaugural Season" list={data.s1}></Season>
      <Season when="Season 2" list={data.s2}></Season>
    </div>
  );
}
