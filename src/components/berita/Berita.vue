<template>
  <div class="berita">
    <h1 class="berita-title">Berita</h1>

    <div class="berita-list">
      <router-link
        :to="{ name: 'Berita Detail', params: { berita: br.name } }"
        v-for="br in berita"
        class="berita-content"
      >
        <img :src="br.img" alt="" class="berita-img" />
        <div class="berita-text">
          <h2 class="text-title">
            {{ br.name }}
          </h2>
          <p v-for="desc in br.desc.slice(0, 1)" class="text-paragraph">
            {{ desc }}
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase/index";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export default {
  data() {
    return {
      berita: [],
    };
  },

  mounted() {
    const q = query(
      collection(db, "berita"),
      orderBy("tanggal_berita", "desc")
    );
    const ev = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const news = {
          id: doc.id,
          name: doc.data().nama_berita,
          img: doc.data().gambar_berita,
          desc: doc.data().desk_berita,
        };
        this.berita.push(news);
      });
    });
    console.log(this.berita);
  },
};
</script>
