import styles from "../styles/Header.module.scss";
import Logo from "../public/tranquilityLogoMono.png";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";

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
                <Image src={Logo} />
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
                Schedule +
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
                Socials +
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
                    <Link href="/halloffame">
                      <a>Hall of Fame</a>
                    </Link>
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
