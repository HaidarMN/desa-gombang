<template>
  <div class="events">
    <h1 class="events-title">Acara Mendatang</h1>
    <div class="events-list">
      <router-link
        v-for="(ev, index) in events"
        :key="ev"
        :to="{ name: 'Acara Detail', params: { acara: ev.name } }"
        class="events-card"
        :class="{ main: index == 0 }"
      >
        <img :src="ev.img" :alt="ev.name" class="card-img" />
        <span class="card-title">{{ ev.name }}</span>
      </router-link>
      <router-link :to="{ name: 'Acara' }" class="events-more group">
        <span class="more-text group-hover:text-white">Lihat Semuanya</span>
        <box-icon
          name="chevron-right"
          class="fill-[#79E0EE] group-hover:fill-white"
          type="solid"
        ></box-icon>
      </router-link>
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
        };
        this.events.push(events);
      });
    });
  },
};
</script>
