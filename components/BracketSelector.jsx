import styles from "../styles/BracketSelector.module.scss";
import React, { useState } from "react";

import Image from "next/image";

export default function BracketSelector(props) {
  function findBracket() {
    //If there's nothing selected, show the placeholder
    if (
      !props.data.find((record) => {
        return record.tier === selectedTier;
      })
    ) {
      return "/placeholderbracket.png";
    }

    //find the brackets object assocatied with selected tier
    let bracket = props.data.find((record) => {
      return record.tier === selectedTier;
    })[selectedBracket.split(" ")[0].toLowerCase()];

    if (!bracket) {
      bracket = "/placeholderbracket.png";
    } else {
      bracket = bracket.url;
    }

    console.log(bracket);
    return bracket;
  }
  const tiers = [
    "Harmony EU",
    "Harmony NA",
    "Discord EU",
    "Discord NA",
    "Transcendence",
  ];
  const brackets = ["Lower Bracket", "Upper Bracket", "Championship Bracket"];

  const [selectedTier, setSelectedTier] = useState("");
  const [selectedBracket, setSelectedBracket] = useState("");

  return (
    <div className={["blockel ", styles.bracketBox].join(" ")}>
      <div className={styles.tierList}>
        {props.data.map((bracket, index) => (
          <>
            <div
              className={[
                styles.tier,
                selectedTier === bracket.tier && styles.active,
              ].join(" ")}
              onClick={() => setSelectedTier(bracket.tier)}
              key={bracket.tier}
            >
              {bracket.tier}
            </div>
            {index < props.data.length - 1 && (
              <div key={index + bracket.tier} className={styles.sep}>
                |
              </div>
            )}
          </>
        ))}
      </div>
      <div className={styles.bracketList}>
        {brackets.map((bracket, index) => (
          <>
            <div
              className={[
                styles.bracketName,
                selectedBracket === bracket && styles.active,
              ].join(" ")}
              onClick={() => setSelectedBracket(bracket)}
              key={bracket}
            >
              {bracket}
            </div>
            {index < brackets.length - 1 && (
              <div key={index + bracket} className={styles.sep}>
                |
              </div>
            )}
          </>
        ))}
      </div>
      <div className={styles.bracketContainer}>
        <Image
          quality={33}
          src={findBracket()}
          width="1600"
          height="900"
        ></Image>
      </div>
    </div>
  );
}
