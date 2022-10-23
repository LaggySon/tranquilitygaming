import Link from "next/link";
import styles from "../styles/Contact.module.scss";
import Separator from "../components/Separator";
import { request } from "../lib/datocms";

export async function getServerSideProps() {
  let data = await request({
    query: `query {contact{
      commissioners{name,roles,subRoles,discord},
      tierDirectors{name,roles,subRoles,discord},
      communityLeadersContributors{name,roles,subRoles,discord}}}`,
  });
  data = data.contact;
  return { props: { data } };
}

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

export default function contact({ data }) {
  return (
    <div className="container">
      <Separator>
        <span>CONTACT</span> US
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
        {data.commissioners.map((staff) => (
          <ContactFrame
            name={staff.name}
            roles={staff.roles}
            subroles={staff.subRoles}
            discord={staff.discord}
            key={staff.name}
          />
        ))}
        <Separator>Tier Directors</Separator>
        {data.tierDirectors.map((staff) => (
          <ContactFrame
            name={staff.name}
            roles={staff.roles}
            subroles={staff.subRoles}
            discord={staff.discord}
            key={staff.name}
          />
        ))}
        <Separator>Community Leaders & Contributors</Separator>
        {data.communityLeadersContributors.map((staff) => (
          <ContactFrame
            name={staff.name}
            roles={staff.roles}
            subroles={staff.subRoles}
            discord={staff.discord}
            key={staff.name}
          />
        ))}
      </div>
    </div>
  );
}
