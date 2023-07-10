<template>
  <div class="wisata-detail">
    <div class="wisata-detail-title">
      <h2 class="wisata-detail-subtitle">
        Wisata {{ $route.params.tipe_wisata }}
      </h2>
      <h1 class="wisata-detail-maintitle">
        {{ $route.params.wisata }}
      </h1>
    </div>

    <div class="wisata-detail-content">
      <hr class="h-1" />
      <p v-for="desc in wisata.desc" :key="desc">{{ desc }}</p>

      <div class="detail-wisata-gallery">
        <img
          v-for="(glr, index) in wisata.gallery"
          :src="glr"
          :alt="wisata.name + index"
          class="gallery-img"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase/index";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export default {
  data() {
    return {
      wisata: [],
    };
  },

  mounted() {
    if (this.$route.params.tipe_wisata == "budaya") {
      const q = query(
        collection(db, "wisata_budaya"),
        where("nama_wisata", "==", this.$route.params.wisata)
      );
      const wb = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const budaya = {
            id: doc.id,
            name: doc.data().nama_wisata,
            img: doc.data().gambar_wisata,
            desc: doc.data().desk_wisata,
            gallery: doc.data().galeri_wisata,
          };
          this.wisata = budaya;
        });
      });
    } else {
      const q = query(
        collection(db, "wisata_religi"),
        where("nama_wisata", "==", this.$route.params.wisata)
      );
      const wr = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const religi = {
            id: doc.id,
            name: doc.data().nama_wisata,
            img: doc.data().gambar_wisata,
            desc: doc.data().desk_wisata,
            gallery: doc.data().galeri_wisata,
          };
          this.wisata = religi;
        });
      });
    }
  },
};
</script>
