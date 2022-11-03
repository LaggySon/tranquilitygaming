import Separator from "../components/Separator";

//SWIPER STUFF
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import styles from "../styles/Landing.module.scss";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

//Slide Image Imports
import slide1 from "../public/slides/tranq_Ideation_Playoffs_Banner.png";
import slide2 from "../public/slides/tranq_Ideation_Podcast_Banner.png";
import slide3 from "../public/slides/tranq_Ideation_Merch_Banner.png";
// import { request } from "gaxios";

//datocms stuff
import { StructuredText } from "react-datocms";
import { request } from "../lib/datocms";

import Match from "../components/Match";

import axios from "axios";

export async function getServerSideProps() {
  const token = await axios.post("https://id.twitch.tv/oauth2/token", {
    client_id: process.env.TWITCH_CLIENT_ID,
    client_secret: process.env.TWITCH_CLIENT_SECRET,
    grant_type: "client_credentials",
  });

  //Get Stream Data
  let twitchdata = await axios.get(
    "https://api.twitch.tv/helix/streams?user_login=tranquilitygg",
    {
      headers: {
        "Client-ID": process.env.TWITCH_CLIENT_ID,
        Authorization: `Bearer ${token.data.access_token}`,
      },
    }
  );
  twitchdata = twitchdata.data;

  //Get Match Data
  const data = await request({
    query: `query {broadcastSchedule{
      descriptiveText
      matchList{
        tier
        homeName
        homeLogo{url}
        awayName
        awayLogo{url}
        matchTime
      }
    }
      homepage{letter{value}}
    }`,
  });
  console.log(data);
  return { props: { data, twitchdata } };
}

export default function Home({ data, twitchdata }) {
  const [isLive, setIsLive] = useState(twitchdata.data.length !== 0);

  return (
    <div>
      {isLive && (
        <div className={styles.LiveBanner}>
          <span onClick={() => setIsLive(false)}>&#10006;</span>
          <div>
            WE{"'"}RE LIVE AT&nbsp;
            <Link href="https://twitch.tv/tranquilitygg">
              TWITCH.TV/TRANQUILITYGG
            </Link>
            &nbsp; - {twitchdata.data[0].title}
          </div>
        </div>
      )}
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
                  className={styles.slideBg}
                  src={slide1}
                  width="1280"
                  height="400"
                ></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <Image
                  className={styles.slideBg}
                  src={slide2}
                  width="1280"
                  height="400"
                ></Image>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={styles.slide}>
                <Image
                  className={styles.slideBg}
                  src={slide3}
                  width="1280"
                  height="400"
                ></Image>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <Separator>
          <span>UPCOMING</span> BROADCASTS
        </Separator>
        <div id={styles.matches} className={"blockel"}>
          {data.broadcastSchedule.descriptiveText}
          <div id={styles.matchList}>
            {data.broadcastSchedule.matchList.map((match) => Match(match))}
          </div>
        </div>
        <Separator>
          <span>LATEST</span> NEWS
        </Separator>

        <div id={styles.letter} className="blockel">
          <StructuredText data={data.homepage.letter} />
        </div>
      </div>
    </div>
  );
}
