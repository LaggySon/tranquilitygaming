import styles from "../styles/Header.module.scss";
import Logo from "../public/tranquilityLogoMono.png";
import SmallLogo from "../public/tranqLogoWhite.png";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

function Header(props) {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
    console.log(isActive);
  };
  return (
    <div className={styles.header}>
      <div className={styles.Title}>
        <Link href="/">
          <a>
            <div className={styles.logo}>
              <div>
                <Image src={Logo}></Image>
              </div>
            </div>
          </a>
        </Link>
        <div className={styles.burger} onClick={handleToggle}>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </div>
      </div>

      <div
        className={[styles.NavBar, isActive ? styles.active : null].join(" ")}
      >
        <ul className={styles.navlist}>
          <li>
            <div className={styles.dropdown}>
              <a href="#" className={styles.dropbtn}>
                Rosters +
              </a>
              <div className={styles.drop}>
                <ul>
                  <li>
                    <NavLink href="/naharmonyrosters">Harmony NA</NavLink>
                  </li>
                  <li>
                    <NavLink href="/euharmonyrosters">Harmony EU</NavLink>
                  </li>
                  <li>
                    <NavLink href="/nadiscordrosters">Discord NA</NavLink>
                  </li>
                  <li>
                    <NavLink href="/natrancerosters">Transcendence NA</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.dropdown}>
              <a href="#" className={styles.dropbtn}>
                Schedule +
              </a>
              <div className={styles.drop}>
                <ul>
                  <li>
                    <NavLink href="/naharmonyschedule">Harmony NA</NavLink>
                  </li>
                  <li>
                    <NavLink href="/euharmonyschedule">Harmony EU</NavLink>
                  </li>
                  <li>
                    <NavLink href="/nadiscordschedule">Discord NA</NavLink>
                  </li>
                  <li>
                    <NavLink href="/natranceschedule">Transcendence NA</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div className={styles.dropdown}>
              <a href="#" className={styles.dropbtn}>
                Socials +
              </a>
              <div className={styles.drop}>
                <ul>
                  <li>
                    <NavLink href="https://twitter.com/owtranquility">
                      Twitter
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="https://twitch.tv/owtranquility">
                      Twitch
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="https://youtube.com/owtranquility">
                      YouTube
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="https://discord.gg/owtranquility">
                      Discord
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <Link href="https://shop.spreadshirt.com/owtranquility">
              <a className={styles.dropbtn}>Store</a>
            </Link>
            <div className={styles.drop}></div>
          </li>
          <li>
            <Link href="/contact">
              <a className={styles.dropbtn}>Contact</a>
            </Link>
            <div className={styles.drop}></div>
          </li>
          <li>
            <div className={styles.dropdown}>
              <a href="#" className={styles.dropbtn}>
                More +
              </a>
              <div className={styles.drop}>
                <ul>
                  <li>
                    <NavLink href="/halloffame">Hall of Fame</NavLink>
                  </li>
                  <li>
                    <NavLink href="/websitefeedback">Feedback Form</NavLink>
                  </li>
                  <li>
                    <NavLink href="/teams">[BETA] Teams</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
