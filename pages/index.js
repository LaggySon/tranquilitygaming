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

//Slide Image Imports
import slide1 from "../public/slides/irisimage.png";
import slide2 from "../public/slides/ow2image.png";
// import { request } from "gaxios";

//datocms stuff
import { StructuredText } from "react-datocms";
import { request } from "../lib/datocms";

export async function getStaticProps() {
  const data = await request({ query: `query {homepage{letter{value}}}` });
  console.log(data);
  return { props: { data } };
}

export default function Home({ data }) {
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
          </Swiper>
        </div>

        <Separator>
          <span>LATEST</span> NEWS
        </Separator>

        <div id={styles.letter} className="blockel">
          <StructuredText data={data.homepage.letter} />
          {/* <h2>Letter From The Commissioner</h2>
          <p>
            Welcome to the Tranquility Gaming Community! This community is
            intended to aid in the growth of players, coaches, managers and
            associated contributors; furthering their development in online
            esports with a particular focus on Overwatch. Tranquility was first
            conceived as a casual intramural level tournament but has since
            evolved into a developmental community helping players across
            multiple games and skill tiers. Our Overwatch tournament currently
            runs over a 17 week season style format bi-annually.
            <br />
            <br />
            Tranquility is intended to be a well-organized community and will
            take structure, branding, production and operation seriously. It’s a
            community that is meant to be fun and drama free, but that only
            works if everyone participates and follows the developed guidelines.
            <br />
            <br />
            After eight successful seasons we are gearing up to kick off season
            9 this coming autumn 2022 with an expanded group that now contains
            five total tiers.
            <br />
            <br />
            NA & EU - Harmony Tier (2000-3000 w/ 2650 SR avg) <br />
            NA & EU - Discord Tier (2800-3500 w/ 3200 SR avg) <br />
            NA - Transcendence Tier (3300-4000 w/ 3750* SR avg)
            <br />
            <br />
            *Top six players only count towards team average.
            <br />
            <br />
            Tranquility Gaming is open to all players looking to help grow and
            expand esports. It is meant to be an inclusive space to help build a
            community of production, competition, and friendship.
            <br />
            <br />I look forward to meeting and interacting with you all, and I
            hope we can grow Tranquility into the best it can be!
            <br />
            <br />
            Regards, <br />
            Cavalier <br />
            Founder & Commissioner <br />
            Tranquility Gaming
          </p> */}
        </div>
      </div>
    </div>
  );
}
