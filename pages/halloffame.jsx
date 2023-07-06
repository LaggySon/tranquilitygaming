import Separator from "../components/Separator";
import styles from "../styles/HallOfFame.module.scss";
import data from "../public/hof.json";

//import role icon SVGs
import SvgOwdps from "../components/icons/Owdps";
import SvgOwtank from "../components/icons/Owtank";
import SvgOwsupport from "../components/icons/Owsupport";

import React, { useState } from "react";
function Inductees(props) {
  return (
    <>
      {props.list && (
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
      )}
    </>
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
          <div
            className={[
              styles.Member,
              name.includes(" (MVP)") ? styles.Mvp : null,
            ].join(" ")}
            key={name + "1"}
          >
            <SvgOwdps />
            {name}
          </div>
        ))}
        {props.list.tank.map((name) => (
          <div
            className={[
              styles.Member,
              name.includes(" (MVP)") ? styles.Mvp : null,
            ].join(" ")}
            key={name + "2"}
          >
            <SvgOwtank />
            {name}
          </div>
        ))}
        {props.list.support.map((name) => (
          <div
            className={[
              styles.Member,
              name.includes(" (MVP)") ? styles.Mvp : null,
            ].join(" ")}
            key={name + "3"}
          >
            <SvgOwsupport />
            {name}
          </div>
        ))}
        {props.list.flex &&
          props.list.flex.map((name) => (
            <div
              className={[
                styles.Member,
                name.includes(" (MVP)") ? styles.Mvp : null,
              ].join(" ")}
              key={name + "4"}
            >
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
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
    console.log(isActive);
  };
  return (
    <>
      <>
        <div className={styles.Season + " " + styles.box}>
          <h1>{props.list.title}</h1>
          {/* display inductees if they exist for the season */}
          {props.list.inductees && <Inductees list={props.list.inductees} />}
          {/* display hof info for seasons without tiers */}
          {props.list.onetier && (
            <>
              <ChampTeam list={props.list.onetier.winningteam} />
              <AllStars list={props.list.onetier.allstars} />
            </>
          )}
          {props.list.tiers.map((tier) => (
            <>
              {tier.title !== "onetier" && (
                <Separator>
                  <span>{tier.title}</span> Tier
                </Separator>
              )}

              <ChampTeam list={tier.winningteam} />
              <AllStars list={tier.allstars} />
            </>
          ))}
        </div>
      </>
    </>
  );
}

export default function HallOfFame() {
  const [activeSeasonTitle, setActiveSeasonTitle] = useState("Season 10");
  const activeSeason = data.find(
    (season) => season.title === activeSeasonTitle
  );

  function displaySeason(title) {
    setActiveSeasonTitle(title);
  }

  return (
    <div className={"container " + styles.HofContainer}>
      <div className={styles.SeasonList}>
        <h3>Season: </h3>
        {data.map((season) => (
          <>
            <h3
              className={[
                styles.Selector,
                activeSeasonTitle === season.title ? styles.active : null,
              ].join(" ")}
              onClick={() => setActiveSeasonTitle(season.title)}
            >
              {season.title.split(" ")[1]}
            </h3>
          </>
        ))}
      </div>
      <Season list={activeSeason}></Season>
    </div>
  );
}
