import { ReactComponent as Discord } from "../public/icons/discord.svg";
import { ReactComponent as Twitch } from "../public/icons/twitch.svg";
import { ReactComponent as Twitter } from "../public/icons/twitter.svg";
import { ReactComponent as Instagram } from "../public/icons/instagram.svg";
import { ReactComponent as Facebook } from "../public/icons/facebook.svg";
import styles from "../styles/Header.module.scss";
import Logo from "../public/tranqMonoToneLogo.png";

import Image from "next/image";

function NavBar(props) {
  return (
    <div className={styles.NavBar}>
      <ul className={styles.navlist}>
        <li>
          <div className={styles.dropdown}>
            <a href="/teams" className={styles.dropbtn}>
              Rosters
            </a>
            <div className={styles.drop}>
              <ul>
                <li>Harmony</li>
                <li>Harmony EU</li>
                <li>Discord</li>
                <li>Transcendence</li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.dropdown}>
            <a href="#" className={styles.dropbtn}>
              Schedule
            </a>
            <div className={styles.drop}>
              <ul>
                <li>Harmony</li>
                <li>Harmony EU</li>
                <li>Discord</li>
                <li>Transcendence</li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <div className={styles.dropdown}>
            <a href="#" className={styles.dropbtn}>
              Socials
            </a>
            <div className={styles.drop}>
              <ul>
                <li>Twitter</li>
                <li>Twitch</li>
                <li>YouTube</li>
                <li>Discord</li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <a href="#">Store</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </div>
  );
}

function Title(props) {
  return (
    <a href="/">
      <div className={styles.Title}>
        <div className={styles.logo}>
          <Image src={Logo} />
        </div>

        <h1>Tranquility Gaming</h1>
      </div>
    </a>
  );
}

function Header(props) {
  return (
    <div className={styles.header}>
      <Title />
      <NavBar />
    </div>
  );
}

export default Header;
