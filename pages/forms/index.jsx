import React, { useState } from "react";
import styles from "../../styles/Forms.module.scss";

export default function Forms(props) {
  const [activeForm, setActiveForm] = useState("websitefeedback");
  return (
    <div className="container">
      <div className={["blockel", styles.selectors].join(" ")}>
        <h3
          className={[
            styles.formSelector,
            activeForm === "websitefeedback" ? styles.active : null,
          ].join(" ")}
          onClick={() => {
            setActiveForm("websitefeedback");
            console.log(activeForm);
          }}
        >
          Feedback Form
        </h3>

        <h3
          className={[
            styles.formSelector,
            activeForm === "twitchcaster" ? styles.active : null,
          ].join(" ")}
          onClick={() => setActiveForm("twitchcaster")}
        >
          Caster Application
        </h3>

        <h3
          className={[
            styles.formSelector,
            activeForm === "twitchproducer" ? styles.active : null,
          ].join(" ")}
          onClick={() => setActiveForm("twitchproducer")}
        >
          Producer Application
        </h3>
      </div>
      <div className={styles.formContainer}>
        <iframe
          src={"/" + activeForm + "?embedded=true"}
          // width="640"
          height="2323"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
