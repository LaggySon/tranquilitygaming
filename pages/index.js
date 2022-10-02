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

export async function getServerSideProps() {
  const data = await request({
    query: `query {homepage{letter{value},schedule{value}}}`,
  });
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
          <span>UPCOMMING</span> BROADCASTS
        </Separator>
        <div id={styles.letter} className="blockel">
          <StructuredText data={data.homepage.schedule} />
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
