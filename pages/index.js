import { TwitterTimelineEmbed } from "react-twitter-embed";
import { TwitchPlayer } from "react-twitch-embed";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import Separator from "../components/Separator";
import styles from "../styles/Landing.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import Image from "next/image";

import schedgif1 from "../public/decapitaters_ratsociety.gif";
export default function Home() {
  return (
    <div>
      {/* <h1>Home Page</h1> */}
      <div className="container" id={styles.homepage}>
        <div id={styles.showcase} className="container">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={"auto"}
            autoplay={{
              delay: 10000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            navigation
            effect={"cards"}
            speed={1000}
            pagination={{ clickable: true }}
            loop
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <div className={styles.slide}>
                <Image
                  src="/../public/tranq-banner-newsite.png"
                  width="1280"
                  height="400"
                ></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <h1>ITS PLAYOFFS TIME!</h1>
                <h3>Broadcast Schedule:</h3>
                <p>Tuesday 2pm EST: Harmony EU</p>
                <p>Tuesday 8:30pm EST: Harmony</p>
                <p>Tuesday 8:30pm EST: Trancscendence</p>
                <p>Tuesday 2pm EST: Discord</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <Separator>
          <span>LATEST</span> NEWS
        </Separator>

        <div id={styles.letter} className="blockel">
          <h2>Letter From The Commissioner</h2>
          <p>
            Welcome to the Overwatch Tranquility Community. This community is
            intended to aid in the growth of players and their development in
            the game of Overwatch. It was first conceived as a casual intramural
            level tournament but has evolved into a developmental community
            helping players across multiple skill tiers in a season style
            format.
            <br />
            <br />
            With that being said, Overwatch Tranquility is a well-organized
            community and will take the structure, branding, production and
            operation seriously. It’s a community that is meant to be fun and
            drama free, but that only works if everyone participates and follows
            the developed guidelines.
            <br />
            <br />
            After five successful seasons we are set to kick off Season 6
            February 10, 2020 with an expanded group that now contains 72 total
            teams across three tiers.
            <br />
            <br />
            Harmony Tier (2000-3000 w/ 2650 SR avg) Discord Tier (2800-3500 w/
            3200 SR avg) Transcendence Tier (3300-4000 w/ 3650 SR avg)
            <br />
            <br />
            The OWTC is open to all players in the Gold (2000 SR) to Masters
            (4000 SR) range, and it is meant to be an inclusive space to help
            build a community of competition and friendship.
          </p>
        </div>
      </div>
    </div>
  );
}
