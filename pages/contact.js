import Link from "next/link";
import styles from "../styles/Contact.module.scss";
import Separator from "../components/Separator";

function ContactFrame(props) {
  return (
    <div className={"blockel " + styles.ContactFrame}>
      <parent className="contactname">
        {/* <span>Name: </span> */}
        <span>{props.name}</span>
      </parent>
      <p className="contactroles">
        {/* <span>Position: </span> */}
        <strong>Role(s): </strong>
        {props.roles}
      </p>
      <p className="contactsubroles">
        {/* <span>Position: </span> */}
        <strong>Sub role(s): </strong>
        {props.subroles}
      </p>
      <p className="contactdiscord">
        {/* <span>Contact: </span> */}
        <strong>Discord: </strong>
        {props.discord}
      </p>
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
          name="Thuggington"
          roles="Admin, Harmony NA Tier Director"
          subroles="Moderator"
          discord="Thuggington#6087"
        />
        <ContactFrame
          name="Crispy"
          roles="Admin, Discord NA Tier Director"
          subroles="Moderator"
          discord="Crispy#6261"
        />
        <ContactFrame
          name="Chimanzy"
          roles="Admin, Transcendence NA Tier Director"
          subroles="Moderator"
          discord="Chimanzy#0006"
        />
        <ContactFrame
          name="Sneakykittens"
          roles="Asst. Harmony NA Tier Director"
          subroles="Moderator"
          discord="Sneakykittens#5256"
        />
        <ContactFrame
          name="Apathy"
          roles="Asst. Discord NA Tier Director"
          subroles="Moderator"
          discord="Apathy#8987"
        />
        <ContactFrame
          name="Smarties"
          roles="Asst. Transcendence NA Tier Director"
          subroles="Moderator"
          discord="Smarties#0013"
        />
        <ContactFrame
          name="Elixir"
          roles="Harmony EU Tier Director"
          subroles="Moderator"
          discord="Arez#0955"
        />
        <ContactFrame
          name="Yoshi JD"
          roles="Discord EU Tier Director"
          subroles="Moderator"
          discord="Arez#0955"
        />
        <Separator>Community Leaders & Contributors</Separator>
        <ContactFrame
          name="Booth"
          roles="Admin, Twitch Team Manager"
          subroles="Moderator"
          discord="Booth#9643"
        />
        <ContactFrame
          name="Bethcon2"
          roles="Admin, Community Officer"
          subroles="LGBTQPIA+, Women, URM Lead, Community Liaison, Moderator"
          discord="Bethcon2#8201"
        />
        <ContactFrame
          name="NPC"
          roles="Admin, Social Media Manager"
          subroles="Moderator"
          discord="NPC#8058"
        />
        <ContactFrame
          name="Gheos"
          roles="Moderator"
          subroles="Tournament Specialist"
          discord="Gheos#0001"
        />
        <ContactFrame
          name="LaggySon"
          roles="Web & Social Media"
          subroles="Producer, Webmaster"
          discord="LaggySon#1311"
        />
      </div>
    </div>
  );
}
