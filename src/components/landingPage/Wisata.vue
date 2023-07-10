<template>
  <div class="wisata">
    <h1 class="wisata-title">Wisata Budaya</h1>
    <div class="wisata-list">
      <router-link
        v-for="bdy in budaya"
        :key="bdy"
        :to="{
          name: 'Detail Wisata',
          params: { tipe_wisata: 'budaya', wisata: bdy.name },
        }"
        class="wisata-card group"
      >
        <img :src="bdy.img" :alt="bdy.name" class="card-img" />
        <div class="card-title group-hover:h-full group-hover:opacity-100">
          <span>{{ bdy.name }}</span>
        </div>
      </router-link>
    </div>

    <br />

    <h1 class="wisata-title">Wisata Religi</h1>
    <div class="wisata-list">
      <router-link
        v-for="rlg in religi"
        :key="rlg"
        :to="{
          name: 'Detail Wisata',
          params: { tipe_wisata: 'religi', wisata: rlg.name },
        }"
        class="wisata-card group"
      >
        <img :src="rlg.img" :alt="'wisata ' + rlg.name" class="card-img" />
        <div class="card-title group-hover:h-full group-hover:opacity-100">
          <span>{{ rlg.name }}</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase/index";
import { collection, onSnapshot } from "firebase/firestore";

export default {
  data() {
    return {
      budaya: [],
      religi: [],
    };
  },

  mounted() {
    const wb = onSnapshot(collection(db, "wisata_budaya"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const budaya = {
          id: doc.id,
          name: doc.data().nama_wisata,
          img: doc.data().gambar_wisata,
        };
        this.budaya.push(budaya);
      });
    });

    const wr = onSnapshot(collection(db, "wisata_religi"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const religi = {
          id: doc.id,
          name: doc.data().nama_wisata,
          img: doc.data().gambar_wisata,
        };
        this.religi.push(religi);
      });
    });
  },
};
</script>
