import Link from "next/link";
import styles from "../styles/Contact.module.scss";
import Separator from "../components/Separator";

function ContactFrame(props) {
  return (
    <div className={"blockel " + styles.ContactFrame}>
      <h3 className="contactname">
        {/* <span>Name: </span> */}
        <span>{props.name}</span>
      </h3>
      <h3 className="contactroles">
        {/* <span>Position: </span> */}
        {props.roles}
      </h3>
      <h3 className="contactsubroles">
        {/* <span>Position: </span> */}
        {props.subroles}
      </h3>
      <h3 className="contactdiscord">
        {/* <span>Contact: </span> */}
        {props.discord}
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
      <div className="blockel">
        For business or any other general inquiries please contact{" "}
        <a href="mailto:cavalier@owtranquility.com">
          cavalier@owtranquility.com
        </a>{" "}
        or @ModMail inside the Tranquility Discord server.
      </div>

      <div className={styles.ContactsContainer}>
        <Separator>Commissioners</Separator>
        <ContactFrame
          name="Cavalier"
          roles="Founder, Owner, Commissioner, Admin"
          subroles="Art & Branding Manager, Moderator"
          discord="Cavalier#1706"
        />
        <ContactFrame
          name="MisterYeti"
          roles="Deputy Commissioner, Admin"
          subroles="Content Creation Team Manager, Moderator"
          discord="MisterYeti#9471"
        />
        <Separator>Tier Directors</Separator>
        <ContactFrame
          name="Chimanzy"
          roles="Transcendence NA Tier Director"
          subroles="Moderator"
          discord="Chimanzy#0006"
        />
        <ContactFrame
          name="Smarties"
          roles="Asst. Transcendence NA Tier Director"
          subroles="Moderator"
          discord="Smarties#0013"
        />
        <ContactFrame
          name="Crispy"
          roles="Admin, Discord NA Tier Director"
          subroles="Moderator"
          discord="Crispy#6261"
        />
        <ContactFrame
          name="Apathy"
          roles="Admin, Discord NA Tier Director"
          subroles="Moderator"
          discord="Crispy#6261"
        />
        <Separator>Community Leaders & Contributors</Separator>
      </div>
    </div>
  );
}
