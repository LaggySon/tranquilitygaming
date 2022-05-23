import Link from "next/link";
import styles from "../styles/Contact.module.scss";
import Separator from "../components/Separator";

function ContactFrame(props) {
  return (
    <div className={"blockel " + styles.ContactFrame}>
      <h3 className="contactname">
        <span>Name: </span>
        {props.name}
      </h3>
      <h3 className="contactposition">
        <span>Position: </span>
        {props.position}
      </h3>

      <h3 className="contactpoint">
        <span>Contact: </span>
        {props.point}
      </h3>
    </div>
  );
}

export default function contact() {
  return (
    <div className="container">
      <Separator>
        {/* <h1> */}
        <span>CONTACT</span> US
        {/* </h1> */}
      </Separator>
      <div className="blockel">For general inquiries, please use ModMail.</div>

      <div className={styles.ContactsContainer}>
        <Separator>ADMIN</Separator>
        <ContactFrame
          name="Cavalier"
          position="Commisioner"
          point="Cavalier#1706"
        />
        <ContactFrame
          name="Chimanzy"
          position="Transcendence Tier Director"
          point=""
        />
        <ContactFrame
          name="Crispy"
          position="Discord Tier Director"
          point="Crispy#6261"
        />
        <ContactFrame
          name="Thuggington"
          position="Harmony Tier Director"
          point=""
        />
        <ContactFrame
          name="MisterYeti"
          position="Content Creation Team Manager"
          point="MisterYeti#9471"
        />
        <ContactFrame name="Bethcon2" position="Community Liaison" point="" />
        <ContactFrame name="NPC" position="Admin" point="NPC#8058" />
        <Separator>MODERATORS</Separator>
        <ContactFrame
          name="Arez"
          position="Harmony Tier Director EU"
          point="Arez#0955"
        />
        <ContactFrame
          name="Smarties"
          position="Asst. Transcendence Tier Director"
          point="smarties#0013"
        />
        <ContactFrame
          name="Apathy"
          position="Asst. Discord Tier Director"
          point=""
        />
        <ContactFrame
          name="Sneakykittens"
          position="Asst. Harmony Tier Director"
          point="sneakykittens#5256"
        />
        <ContactFrame name="Triage3" position="Moderator" point="" />
        <ContactFrame name="Gheos" position="Moderator" point="Gheos#0001" />
      </div>
    </div>
  );
}
