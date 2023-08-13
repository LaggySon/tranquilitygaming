import styles from "../styles/Header.module.scss";
import Logo from "../public/tranquilityLogoMono.png";
import SmallLogo from "../public/tranqLogoWhite.png";

import React, { useState } from "react";

import Image from "next/image";
import Link from "next/link";
import NavLink from "./NavLink";

//import SVG components
import SvgTwitch from "./icons/Twitch";
import SvgTwitter from "./icons/Twitter";
import SvgYoutube from "./icons/Youtube";
import SvgFacebook from "./icons/Facebook";
import SvgInstagram from "./icons/Instagram";
import SvgDiscord from "./icons/Discord";
import SvgSheets from "./icons/Sheets";

function Header(props) {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
    console.log(isActive);
  };
  const closeMenu = () => {
    setActive(false);
  };
  return (
    <div className={styles.header}>
      <div className={styles.Title}>
        <Link href="/">
          <a>
            <div className={styles.logo} onClick={closeMenu}>
              <div>
                <Image src={Logo}></Image>
              </div>
            </div>
          </a>
        </Link>
        <div
          className={[styles.burger, isActive ? styles.active : null].join(" ")}
          onClick={handleToggle}
        >
          <span className={styles.bar} id={styles.bar1}></span>
          <span className={styles.bar} id={styles.bar2}></span>
          <span className={styles.bar} id={styles.bar3}></span>
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
                    <NavLink href="/harmonyrosters">
                      <SvgSheets />
                      Harmony
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="/discordrosters">
                      <SvgSheets />
                      Discord
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="/trancerosters">
                      <SvgSheets />
                      Transcendence
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="/ascendantrosters">
                      <SvgSheets />
                      Ascendant
                    </NavLink>
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
                    <NavLink href="/harmonyschedule">
                      <SvgSheets />
                      Harmony
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="/discordschedule">
                      <SvgSheets />
                      Discord
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="/tranceschedule">
                      <SvgSheets />
                      Transcendence
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="/ascendantschedule">
                      <SvgSheets />
                      Ascendant
                    </NavLink>
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
                    <NavLink href="https://twitter.com/tranquilitygg">
                      <SvgTwitter /> Twitter
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="https://twitch.tv/tranquilitygg">
                      <SvgTwitch /> Twitch
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="https://youtube.com/tranquilitygg">
                      <SvgYoutube />
                      YouTube
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="https://discord.gg/tranquilitygg">
                      <SvgDiscord />
                      Discord
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="https://www.instagram.com/ggtranquility">
                      <SvgInstagram /> Instagram
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="https://www.facebook.com/tranquilitygg">
                      <SvgFacebook /> Facebook
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className={styles.dropdown}>
              <a href="#" className={styles.dropbtn}>
                Shop +
              </a>
              <div className={styles.drop}>
                <ul>
                  <li>
                    <NavLink href="https://shop.spreadshirt.com/tranquilitygg/ ">
                      Main Store
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="https://shop.spreadshirt.com/tranquilityggjerseys/">
                      Jersey Store
                    </NavLink>
                  </li>
                  <li>
                    <NavLink href="https://shop.spreadshirt.com/tranquilityggretired/ ">
                      Retired Jersey Store
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <Link href="/contact">
              <a className={styles.dropbtn} onClick={handleToggle}>
                Contact
              </a>
            </Link>
            <div className={styles.drop}></div>
          </li>
          <li>
            <div className={styles.dropdown}>
              <a href="#" className={styles.dropbtn}>
                More +
              </a>
              <div className={styles.drop} onClick={handleToggle}>
                <ul>
                  <li>
                    <NavLink href="/halloffame">Hall of Fame</NavLink>
                  </li>
                  <li>
                    <NavLink href="/forms">Forms</NavLink>
                  </li>
                  <li>
                    <NavLink href="/calculator">SR Calculator</NavLink>
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
