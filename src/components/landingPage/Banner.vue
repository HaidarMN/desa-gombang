<template>
  <img
    v-for="bnr in banner"
    :key="bnr"
    :src="bnr.img"
    :alt="bnr.name"
    class="landing-page-banner"
  />
</template>

<script>
import { db } from "../../firebase/index";
import { collection, onSnapshot } from "firebase/firestore";

export default {
  data() {
    return {
      banner: [],
    };
  },

  mounted() {
    const banner = onSnapshot(collection(db, "banner"), (querySnapshot) => {
      const fbBanner = [];
      querySnapshot.forEach((doc) => {
        const banner = {
          id: doc.id,
          name: doc.data().nama_banner,
          img: doc.data().gambar_banner,
        };
        fbBanner.push(banner);
      });
      this.banner = fbBanner;
    });
  },
};
</script>
