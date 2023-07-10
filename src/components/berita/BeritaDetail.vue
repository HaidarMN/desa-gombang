<template>
  <div class="berita-detail">
    <div class="berita-detail-title">
      <h2 class="berita-detail-subtitle">Berita</h2>
      <h1 class="berita-detail-maintitle">
        {{ $route.params.berita }}
      </h1>
    </div>

    <div class="berita-detail-content">
      <hr class="border-t-2" />
      <p v-for="desc in berita.desc" :key="desc">{{ desc }}</p>
      <img :src="berita.img" :alt="berita.name" class="detail-content-img" />
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase/index";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export default {
  data() {
    return {
      berita: [],
    };
  },

  mounted() {
    const q = query(
      collection(db, "berita"),
      where("nama_berita", "==", this.$route.params.berita)
    );
    const ev = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const news = {
          id: doc.id,
          name: doc.data().nama_berita,
          img: doc.data().gambar_berita,
          desc: doc.data().desk_berita,
        };
        this.berita = news;
      });
    });
  },
};
</script>
