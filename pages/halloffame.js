import Separator from "../components/Separator";
import styles from "../styles/HallOfFame.module.scss";
import data from "../public/hof.json";

function Inductees(props) {
  return (
    <div className={styles.Inductees}>
      <h3>Inductees</h3>
      <div className={styles.List}>
        {props.list.map((name) => (
          <div className={styles.Member} key={name}>
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
      <h3>
        {props.tier && props.tier + " "} Champions - {props.list.name}
      </h3>
      <div className={styles.List}>
        {props.list.members.map((name) => (
          <div className={styles.Member} key={name}>
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

function Season(props) {
  console.log(props.list);
  return (
    <>
      <Separator>{props.when}</Separator>
      <div className={styles.Season}>
        {/* display inductees if they exist for the season */}
        {props.list.inductees && <Inductees list={props.list.inductees} />}
        {/* display hof info for seasons without tiers */}
        {props.list.onetier && (
          <ChampTeam list={props.list.onetier.winningteam} />
        )}
      </div>
    </>
  );
}

export default function halloffame() {
  // console.log(data.s3);
  return (
    <div className={"container " + styles.HofContainer}>
      <Season when="Inaugural Season" list={data.s1}></Season>
      <Season when="Season 2" list={data.s2}></Season>
    </div>
  );
}
