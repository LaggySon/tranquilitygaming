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

import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";

import dayjs from "dayjs";

//Slide Image Imports
import slide1 from "../public/slides/tranq_Ideation_Playoffs_Banner.png";
import slide2 from "../public/slides/tranq_Ideation_Podcast_Banner.png";
import slide3 from "../public/slides/tranq_Ideation_Merch_Banner.png";
// import { request } from "gaxios";

//datocms stuff
import { StructuredText } from "react-datocms";
import { request } from "../lib/datocms";

import BracketSelector from "../components/BracketSelector";
import MatchStrip from "../components/MatchStrip";

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

  const bracketData = await request({
    query: `query {bracketList{brackets{tier lower{url}upper{url}championship{url}}}}`,
  });

  //Get Match Data
  const data = await request({
    query: `query {broadcastSchedule{
      descriptiveText
      matchList{
        
          ... on MatchRecord {
            tier
            homeName
            homeLogo{url}
            awayName
            awayLogo{url}
            matchTime
          } ... on EventRecord {
          image{url}
          title
          startTime
          }
        }
    }
      homepage{letter{value}}
    }`,
  });

  let articles = await request({
    query: `query {allArticles{title,content{value},slug}}`,
  });

  let slides = await request({
    query: `query {allSlides{image{url},linksTo}}`,
  });

  articles = articles.allArticles;
  slides = slides.allSlides;

  return { props: { data, twitchdata, bracketData, articles, slides } };
}

export default function Home({
  data,
  twitchdata,
  bracketData,
  articles,
  slides,
}) {
  const [isLive, setIsLive] = useState(twitchdata.data.length !== 0);

  function getSeparatorStuff(title) {
    const stuff = title.split(" ");
    return (
      <>
        <span>{stuff[0]}</span> {stuff.length > 1 && stuff.slice(1).join(" ")}
      </>
    );
  }

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
      <MatchStrip data={data} />

      <div className="container" id={styles.homepage}>
        <div id={styles.showcase} className="container">
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={"auto"}
            autoplay={{
              delay: 10000,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            // navigation
            effect={"cards"}
            speed={1000}
            pagination={{ clickable: true }}
            loop
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {slides &&
              slides.map((slide, i) => (
                <SwiperSlide key={i} style={{ cursor: "pointer" }}>
                  {process.browser && (
                    <Link
                      href={slide.linksTo}
                      className={styles.slide}
                      legacyBehavior
                    >
                      <Image
                        className={styles.slideBg}
                        src={slide.image.url}
                        width="1500"
                        height="500"
                      ></Image>
                    </Link>
                  )}
                </SwiperSlide>
              ))}
          </Swiper>
        </div>

        <div className={styles.articles}>
          {articles &&
            articles.map((article) => (
              <div key={article.slug} className={styles.article}>
                <Separator>{getSeparatorStuff(article.title)}</Separator>
                <div className="blockel">
                  <a href={`/articles/${article.slug}`}>
                    <StructuredText data={article.content} />
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
