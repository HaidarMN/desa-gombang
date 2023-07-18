<template>
  <div class="ks">
    <h1 class="ks-title">Kritik dan Saran</h1>

    <div class="ks-form">
      <span>Nama</span>
      <input
        type="text"
        v-model="name"
        class="ks-input"
        placeholder="Nama anda"
      />
      <span>Kritik atau Saran</span>
      <textarea
        maxlength="500"
        name="kritikSaran"
        v-model="text"
        cols="30"
        rows="5"
        class="ks-input"
        placeholder="Kritik atau saran anda (maks. 500 karakter)"
      ></textarea>

      <div>
        <button @click="saveData" class="ks-btn">Bagikan</button>
      </div>
    </div>

    <div class="ks-list">
      <hr class="border-t" />
      <div v-for="ks in kritikSaran" :key="ks" class="ks-content">
        <span class="ks-content-name">{{ ks.name }}</span>
        <span class="ks-content-text">{{ ks.text }}</span>
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
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export default {
  data() {
    return {
      kritikSaran: [],
      name: "",
      text: "",
      date: "",
    };
  },

  methods: {
    saveData: function () {
      const data = addDoc(collection(db, "kritik_saran"), {
        nama: this.name,
        isi: this.text,
        waktu: serverTimestamp(),
      });
    },
  },

  mounted() {
    const q = query(
      collection(db, "kritik_saran"),
      orderBy("waktu", "desc"),
      limit(10)
    );
    const ks = onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const kritikSaran = {
          id: doc.id,
          name: doc.data().nama,
          text: doc.data().isi,
        };
        this.kritikSaran.push(kritikSaran);
      });
    });
  },
};
</script>
