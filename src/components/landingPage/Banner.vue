<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide
      ><iframe
        v-for="bv in bannerVideo"
        :key="bv"
        :src="'https://www.youtube.com/embed/' + bv.code + '?autoplay=1&mute=1'"
        class="landing-page-banner"
      ></iframe
    ></swiper-slide>
    <swiper-slide>
      <img
        v-for="bnr in banner"
        :key="bnr"
        :src="bnr.img"
        :alt="bnr.name"
        class="landing-page-banner"
      />
    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

import { db } from "../../firebase/index";
import { collection, onSnapshot } from "firebase/firestore";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      banner: [],
      bannerVideo: [],
    };
  },

  setup() {
    return {
      modules: [Navigation],
    };
  },

  mounted() {
    const banner = onSnapshot(collection(db, "banner"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const banner = {
          id: doc.id,
          name: doc.data().nama_banner,
          img: doc.data().gambar_banner,
        };
        this.banner.push(banner);
      });
    });

    const bv = onSnapshot(collection(db, "banner_video"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const bannerVideo = {
          id: doc.id,
          code: doc.data().kode,
        };
        this.bannerVideo.push(bannerVideo);
      });
    });
  },
};
</script>
