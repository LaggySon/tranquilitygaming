import Link from "next/link";
import styles from "../styles/Contact.module.scss";
import Separator from "../components/Separator";

function ContactFrame(props) {
  return (
    <div className={"blockel " + styles.ContactFrame}>
      <h3 className="contactname">{props.name}</h3>
      <h3 className="contactposition">{props.position}</h3>
      <Link href={props.email}>
        <a>
          <h3 className="contactpoint">{props.email}</h3>
        </a>
      </Link>
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
      <div className={styles.ContactsContainer}>
        <ContactFrame
          name="Cavalier"
          position="Commisioner"
          email="cavalier@owtranquility.com"
        />
        <ContactFrame
          name="Cavalier"
          position="Commisioner"
          email="cavalier@owtranquility.com"
        />
        <Separator>ADMIN</Separator>
        <ContactFrame
          name="Cavalier"
          position="Commisioner"
          email="cavalier@owtranquility.com"
        />
        <Separator>MODERATORS</Separator>
        <ContactFrame
          name="Cavalier"
          position="Commisioner"
          email="cavalier@owtranquility.com"
        />
      </div>
    </div>
  );
}
