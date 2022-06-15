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
      <h3>Champions - {props.list.name}</h3>
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

function AllStars(props) {
  return (
    <div className={styles.AllStars}>
      <h3>All-Stars</h3>
      <div className={styles.List}>
        {props.list.dps.map((name) => (
          <div className={styles.Member} key={name}>
            {name}
          </div>
        ))}
        {props.list.tank.map((name) => (
          <div className={styles.Member} key={name}>
            {name}
          </div>
        ))}
        {props.list.support.map((name) => (
          <div className={styles.Member} key={name}>
            {name}
          </div>
        ))}
      </div>
    </div>
  );
}

/*
Create Season Objects
*/
function Season(props) {
  // console.log(props.list);
  return (
    <>
      <Separator>{props.when}</Separator>

      <div className={styles.Season + " " + styles.box}>
        {/* display inductees if they exist for the season */}
        {props.list.inductees && <Inductees list={props.list.inductees} />}
        {/* display hof info for seasons without tiers */}
        {props.list.onetier && (
          <>
            <ChampTeam list={props.list.onetier.winningteam} />
            <AllStars list={props.list.onetier.allstars} />
          </>
        )}
        {props.list.harmony && (
          <>
            <h2 className={styles.bg}>Harmony Tier</h2>
            <ChampTeam list={props.list.harmony.winningteam} tier="Harmony" />
            <AllStars list={props.list.harmony.allstars} />
          </>
        )}
        {props.list.discord && (
          <>
            <h2 className={styles.bg}>Discord Tier</h2>
            <ChampTeam list={props.list.discord.winningteam} tier="Discord" />
            <AllStars list={props.list.discord.allstars} />
          </>
        )}
        {props.list.transcendence && (
          <>
            <h2 className={styles.bg}>Transcendence Tier</h2>
            <ChampTeam
              list={props.list.transcendence.winningteam}
              tier="Transcendence"
            />
            <AllStars list={props.list.transcendence.allstars} />
          </>
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
      <Season when="Season 3" list={data.s3}></Season>
      <Season when="Season 4" list={data.s4}></Season>
      <Season when="Season 5" list={data.s5}></Season>
      <Season when="Season 6" list={data.s6}></Season>
      <Season when="Season 7" list={data.s7}></Season>
    </div>
  );
}
