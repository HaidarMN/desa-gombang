<template>
  <div class="organisasi">
    <div class="organisasi-title">
      <h2 class="organisasi-subtitle">Struktur Organisasi</h2>
      <h1 class="organisasi-maintitle">
        {{ subtitle }}
      </h1>
    </div>

    <hr class="border-t-2" />

    <div class="organisasi-panel">
      <div class="organisasi-left">
        <div
          @click="chooseCategories(1)"
          :class="pd ? 'active' : ''"
          class="ol-border"
        >
          <span>Pemerintah Desa</span>
        </div>
        <div
          @click="chooseCategories(2)"
          :class="bpd ? 'active' : ''"
          class="ol-border"
        >
          <span>Badan Permusyawaratan Desa</span>
        </div>
        <div
          @click="chooseCategories(3)"
          :class="lkd ? 'active' : ''"
          class="ol-border"
        >
          <span>Lembaga Kemasyarakatan Desa</span>
        </div>
      </div>

      <div class="organisasi-right">
        <div v-if="pd" class="organisasi-content">
          <div class="organisasi-list">
            <div
              v-for="(pd, index) in pemerintahDesa"
              :key="pd"
              :class="{
                'md:col-start-1': index == 1 || index == 2 || index == 6,
              }"
              class="list-content"
            >
              <img
                src="../../assets/landingPage/banner.png"
                alt=""
                class="list-content-img"
              />
              <div class="list-content-text">
                <span class="list-content-name">{{ pd.name }}</span>
                <span class="list-content-position">{{ pd.position }}</span>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="bpd" class="organisasi-content">
          <div class="organisasi-list">
            <div
              v-for="(bpd, index) in badanPermusyawaratanDesa"
              :key="bpd"
              :class="{ 'md:col-start-1': index == 1 || index == 3 }"
              class="list-content"
            >
              <img
                src="../../assets/landingPage/banner.png"
                alt=""
                class="list-content-img"
              />
              <div class="list-content-text">
                <span class="list-content-name">{{ bpd.name }}</span>
                <span class="list-content-position">{{ bpd.position }}</span>
              </div>
            </div>
          </div>
        </div>

        <div v-else class="organisasi-content">
          <div class="organisasi-list">
            <div
              v-for="(lkd, index) in lembagaKemasyarakatanDesa"
              :key="lkd"
              :class="{ 'md:col-start-1': index == 10 }"
              class="list-content"
            >
              <img
                src="../../assets/landingPage/banner.png"
                alt=""
                class="list-content-img"
              />
              <div class="list-content-text">
                <span class="list-content-name">{{ lkd.name }}</span>
                <span class="list-content-position">{{ lkd.position }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../../firebase/index";
import { collection, onSnapshot } from "firebase/firestore";

export default {
  data() {
    return {
      pemerintahDesa: [],
      badanPermusyawaratanDesa: [],
      lembagaKemasyarakatanDesa: [],
      pd: true,
      bpd: false,
      lkd: false,
      subtitle: "Pemerintah Desa",
    };
  },

  methods: {
    chooseCategories: function (category) {
      if (category == 1) {
        this.pd = true;
        this.bpd = false;
        this.lkd = false;
        this.subtitle = "Pemerintah Desa";
      } else if (category == 2) {
        this.pd = false;
        this.bpd = true;
        this.lkd = false;
        this.subtitle = "Badan Permusyawaratan Desa";
      } else {
        this.pd = false;
        this.bpd = false;
        this.lkd = true;
        this.subtitle = "Lembaga Kemasyarakatan Desa";
      }
      console.log(category);
    },
  },

  mounted() {
    const pd = onSnapshot(
      collection(db, "pemerintah_desa"),
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const pemerintahDesa = {
            id: doc.id,
            name: doc.data().nama,
            position: doc.data().jabatan,
            img: doc.data().gambar,
          };
          this.pemerintahDesa.push(pemerintahDesa);
        });
      }
    );

    const bpd = onSnapshot(
      collection(db, "badan_permusyarawatan_desa"),
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const badanPermusyawaratanDesa = {
            id: doc.id,
            name: doc.data().nama,
            position: doc.data().jabatan,
            img: doc.data().gambar,
          };
          this.badanPermusyawaratanDesa.push(badanPermusyawaratanDesa);
        });
      }
    );

    const lkd = onSnapshot(
      collection(db, "lembaga_kemasyarakatan_desa"),
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const lembagaKemasyarakatanDesa = {
            id: doc.id,
            name: doc.data().nama,
            position: doc.data().jabatan,
            img: doc.data().gambar,
          };
          this.lembagaKemasyarakatanDesa.push(lembagaKemasyarakatanDesa);
        });
      }
    );
  },
};
</script>
