<template>
  <div class="news">
    <h1 class="news-title">Berita Terbaru</h1>
    <swiper
      :slidesPerView="1"
      :spaceBetween="10"
      :breakpoints="swiperOption.breakpoints"
      :loop="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :modules="modules"
    >
      <swiper-slide v-for="n in news" :key="n">
        <router-link
          :to="{ name: 'Berita Detail', params: { berita: n.name } }"
        >
          <img :src="n.img" :alt="n.name" class="swiper-img" />
          <span class="swiper-title">{{ n.name }}</span>
        </router-link>
      </swiper-slide>
    </swiper>
    <router-link :to="{ name: 'Berita' }" class="news-more"
      >LIHAT SELENGKAPNYA</router-link
    >
  </div>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";

import { db } from "../../firebase/index";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },

  data() {
    return {
      swiperOption: {
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      },
      news: [],
    };
  },

  setup() {
    return {
      modules: [Autoplay],
    };
  },

  mounted() {
    const q = query(
      collection(db, "berita"),
      orderBy("tanggal_berita", "desc"),
      limit(10)
    );
    const ev = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const news = {
          id: doc.id,
          name: doc.data().nama_berita,
          img: doc.data().gambar_berita,
        };
        this.news.push(news);
      });
    });
    console.log(this.news);
  },
};
</script>
