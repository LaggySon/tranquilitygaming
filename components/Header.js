import { ReactComponent as Discord } from "../public/icons/discord.svg";
import { ReactComponent as Twitch } from "../public/icons/twitch.svg";
import { ReactComponent as Twitter } from "../public/icons/twitter.svg";
import { ReactComponent as Instagram } from "../public/icons/instagram.svg";
import { ReactComponent as Facebook } from "../public/icons/facebook.svg";
import styles from "../styles/Header.module.scss";
import Logo from "../public/tranqLogoWhite.png";

import Image from "next/image";
import Link from "next/link";

function NavBar(props) {
  return (
    <div className={styles.NavBar}>
      <ul className={styles.navlist}>
        <li>
          <div className={styles.dropdown}>
            <a href="#" className={styles.dropbtn}>
              Rosters
            </a>
            <div className={styles.drop}>
              <ul>
                <li>
                  <Link href="/naharmonyrosters">
                    <a>Harmony NA</a>
                  </Link>
                </li>
                <li>
                  <Link href="/euharmonyrosters">
                    <a>Harmony EU</a>
                  </Link>
                </li>
                <li>
                  <Link href="/nadiscordrosters">
                    <a>Discord NA</a>
                  </Link>
                </li>
                <li>
                  <Link href="/natrancerosters">
                    <a>Transcendence NA</a>
                  </Link>
                </li>
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
                <li>
                  <Link href="/naharmonyschedule">
                    <a>Harmony NA</a>
                  </Link>
                </li>
                <li>
                  <Link href="/euharmonyschedule">
                    <a>Harmony EU</a>
                  </Link>
                </li>
                <li>
                  <Link href="/nadiscordschedule">
                    <a>Discord NA</a>
                  </Link>
                </li>
                <li>
                  <Link href="/natranceschedule">
                    <a>Transcendence NA</a>
                  </Link>
                </li>
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
                <li>
                  <Link href="https://twitter.com/owtranquility">
                    <a>Twitter</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://twitch.tv/owtranquility">
                    <a>Twitch</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://youtube.com/owtranquility">
                    <a>YouTube</a>
                  </Link>
                </li>
                <li>
                  <Link href="https://discord.gg/owtranquility">
                    <a>Discord</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <li>
          <Link href="https://shop.spreadshirt.com/owtranquility">
            <a className={styles.dropbtn}>Store</a>
          </Link>
        </li>
        <li>
          <Link href="mailto:cavalier@owtranquility.com">
            <a className={styles.dropbtn}>Contact</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

function Title(props) {
  return (
    <Link href="/">
      <a>
        <div className={styles.Title}>
          <div className={styles.logo}>
            <Image src={Logo} />
          </div>

          <h1>Tranquility Gaming</h1>
        </div>
      </a>
    </Link>
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
