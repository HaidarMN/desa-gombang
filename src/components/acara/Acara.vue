<template>
  <div class="acara">
    <h1 class="acara-title">Acara</h1>

    <div class="acara-list">
      <div v-for="ev in events" class="acara-content">
        <img :src="ev.img" alt="" class="acara-img" />
        <div class="acara-text">
          <h2 class="text-title">
            {{ ev.name }}
          </h2>
          <span class="text-date"
            >Dimulai tanggal {{ date(ev.tgl.seconds) }}</span
          >
          <router-link
            :to="{ name: 'Acara Detail', params: { acara: ev.name } }"
            class="text-more"
            >SELENGKAPNYA</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase/index";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

export default {
  data() {
    return {
      events: [],
    };
  },

  methods: {
    date: function (el) {
      const d = new Date(el * 1000);
      return this.$moment.formatDate(d);
    },
  },

  mounted() {
    const q = query(
      collection(db, "event"),
      orderBy("tanggal_acara", "asc"),
      limit(3)
    );
    const ev = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const events = {
          id: doc.id,
          name: doc.data().nama_acara,
          img: doc.data().gambar_acara,
          tgl: doc.data().tanggal_acara,
        };
        this.events.push(events);
      });
    });
  },
};
</script>
