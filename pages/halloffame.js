import Separator from "../components/Separator";
import styles from "../styles/HallOfFame.module.scss";

function HofClass(props) {
  return (
    <>
      <Separator>
        <span>{props.when}</span> Inductees
      </Separator>
      <div className={styles.HofList}>
        {props.list.map((name) => (
          <div className={styles.HofMember} key={name}>
            {name}
          </div>
        ))}
      </div>
    </>
  );
}

function ChampTeam(props) {
  return (
    <>
      <Separator>
        <span>
          {props.when} {props.tier}
        </span>{" "}
        Champions
      </Separator>
      <div className={styles.ChampMembers}>
        {props.list.map((name) => (
          <div className={styles.HofMember} key={name}>
            {name}
          </div>
        ))}
      </div>
    </>
  );
}

export default function halloffame() {
  const inauguralinductees = ["Dunzo", "Nerdables", "Orsted", "Vellzen"];
  const s4inductees = [
    "Cavalier",
    "KourRage",
    "MisterYeti",
    "NPC",
    "Specs",
    "Thuggington",
  ];
  const s6inductees = [
    "Bethcon2",
    "Booth",
    "Door",
    "Impurse",
    "Rokit",
    "Vela",
    "Zoobi3",
  ];
  const s8inductees = [
    "Smuggzz",
    "Chimanzy",
    "Ice",
    "SneakyKittens",
    "Crispy",
    "Kapitol",
    "CrypticForce",
  ];
  const s1 = {
    winningteam: {
      name: "Havoc",
      members: [
        "Nerdables",
        "Dunzo",
        "Shashzilla",
        "Satirical",
        "KourRage",
        "Smithpants",
        "Esulive",
        "Crackerboi",
        "CrimsonSaber",
        "Dark Requiem",
      ],
    },
    //TODO add teams, MVP? to each player
    allstars: {
      dps: [
        "Orsted",
        "Zoobi3",
        "F8TE",
        "Garbagio",
        "Vellzen",
        "KourRage",
        "OhStories",
        "Maxix",
      ],
      tank: [
        "CrypticForce",
        "Dunzo",
        "Evriin",
        "Sabrespuck",
        "Mimsie",
        "Player",
      ],
      support: ["Cavalier", "Rush", "Nerdables", "Arise", "IvyCat", "Timojo"],
    },
  };
  const s2 = {
    //TODO add teams, role, MVP? to each player
    winningteam: {
      name: "Otaku",
      members: [
        "YoJack87",
        "Klopsy",
        "Flufflepuffs",
        "Hybrid",
        "Smuggzz",
        "Cyph",
        "Panda",
        "PixelRocket",
        "Mr.Bubbles (Coach)",
        "PotatoGoddess (Coach)",
        "Gaemmmm (Coach)",
      ],
    },

    allstars: {
      dps: [
        "Smuggzz",
        "Maxix",
        "Vellzen",
        "Anarchy",
        "PetersGG",
        "GrumpyPants",
        "Guac",
      ],
      tank: ["Kingdom", "SilentMonkey", "YoJack87", "NPC", "HQC", "Dunzo"],
      support: [
        "Arise",
        "Laze",
        "Flufflepuffs",
        "Shadowph33r",
        "IvyCat",
        "MixReddy",
      ],
    },
  };
  const s3 = {
    //TODO add teams, role, MVP? to each player
    harmony: {
      winningteam: {
        name: "HOLY JALAPEÑOS",
        members: [
          "TheMallard",
          "TorbOnly",
          "BethCon2",
          "JohnnyRobot",
          "N33dul",
          "THEBork",
          "Meebles",
          "Spooderman (Coach)",
        ],
      },

      allstars: {
        dps: ["Kurt", "00H", "PDKKid", "Gekk0", "Triage3", "Cremsin"],
        tank: [
          "NPC",
          "Torraction",
          "Impurse",
          "Crispy",
          "Player",
          "Bebop",
          "Rigmedon",
        ],
        support: [
          "Sushi",
          "Crygenix",
          "YourTeammate",
          "N33Dul",
          "DrugsNotHugs",
          "Crossfade",
        ],
      },
    },
    discord: {
      winningteam: {
        name: "KOMMIT",
        members: [
          "Ice",
          "SirAndy",
          "Exas",
          "Koro",
          "Axiom",
          "HoneyBadger",
          "Shiro",
          "Raidbotti",
          "MyBigMarf",
        ],
      },

      allstars: {
        dps: [
          "Rokit",
          "Shiro",
          "Smuggzz",
          "JVice",
          "Pyro",
          "Kaizen",
          "OverNightCDR",
        ],
        tank: [
          "Kingdom",
          "Sir Andy",
          "CrypicForce",
          "KourRage",
          "Bandito",
          "HQC",
          "Booth",
        ],
        support: ["Ice", "Arise", "Koro", "Juke", "Unkempt", "Veets"],
      },
    },
  };
  return (
    <div className={"container " + styles.HofContainer}>
      <HofClass when="Inaugural" list={inauguralinductees} />
      <HofClass when="Season 4" list={s4inductees} />
      <HofClass when="Season 6" list={s6inductees} />
      <HofClass when="Season 8" list={s8inductees} />
    </div>
  );
}
