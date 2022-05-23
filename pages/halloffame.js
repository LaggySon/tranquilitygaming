import Separator from "../components/Separator";
import styles from "../styles/HallOfFame.module.scss";

function HofClass(props) {
  return (
    <div className={styles.HofClass}>
      <Separator>
        <span>{props.when}</span> Inductees
      </Separator>
      <div className={styles.hofList}>
        {props.list.map((name) => (
          <div key={name}>{name}</div>
        ))}
      </div>
    </div>
  );
}

export default function halloffame() {
  const inaugural = ["Dunzo", "Nerdables", "Orsted", "Vellzen"];
  const s4 = [
    "Cavalier",
    "KourRage",
    "MisterYeti",
    "NPC",
    "Specs",
    "Thuggington",
  ];
  const s6 = [
    "Bethcon2",
    "Booth",
    "Door",
    "Impurse",
    "Rokit",
    "Vela",
    "Zoobi3",
  ];
  const s8 = [
    "Smuggzz",
    "Chimanzy",
    "Ice",
    "SneakyKittens",
    "Crispy",
    "Kapitol",
    "CrypticForce",
  ];
  return (
    <div className={"container " + styles.HofContainer}>
      <HofClass when="Inaugural" list={inaugural} />
      <HofClass when="Season 4" list={s4} />
      <HofClass when="Season 6" list={s6} />
      <HofClass when="Season 8" list={s8} />
    </div>
  );
}
