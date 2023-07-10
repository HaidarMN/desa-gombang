<template>
  <div class="acara-detail">
    <div class="acara-detail-title">
      <h2 class="acara-detail-subtitle">Acara</h2>
      <h1 class="acara-detail-maintitle">
        {{ $route.params.acara }}
      </h1>
    </div>

    <div class="acara-detail-content">
      <hr class="border-t-2" />
      <p v-for="desc in events.desc" :key="desc">{{ desc }}</p>
      <img :src="events.img" :alt="events.name" class="detail-content-img" />
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase/index";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export default {
  data() {
    return {
      events: [],
    };
  },

  mounted() {
    const q = query(
      collection(db, "event"),
      where("nama_acara", "==", this.$route.params.acara)
    );
    const ev = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const events = {
          id: doc.id,
          name: doc.data().nama_acara,
          img: doc.data().gambar_acara,
          desc: doc.data().desk_acara,
        };
        this.events = events;
      });
    });
    console.log(this.events);
  },
};
</script>
