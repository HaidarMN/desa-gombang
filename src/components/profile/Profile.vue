<template>
  <div class="profile">
    <h1 class="profile-title">Profil</h1>

    <div class="profile-content">
      <h2 class="profile-subtitle">Sejarah</h2>
      <p v-for="desc in profile.desc">{{ desc }}</p>
    </div>

    <div class="profile-content">
      <h2 class="profile-subtitle">Visi</h2>
      <p>{{ profile.visi }}</p>
    </div>

    <div class="profile-content">
      <h2 class="profile-subtitle">Misi</h2>
      <ol class="profile-list">
        <li v-for="misi in profile.misi" :key="misi">{{ misi }}</li>
      </ol>
    </div>

    <div class="profile-content">
      <h2 class="profile-subtitle">Batas Wilayah</h2>
      <ul class="profile-list">
        <li v-for="bw in batasWilayah" :key="bw">
          {{ bw.arah }}: {{ bw.batas }}
        </li>
      </ul>
    </div>

    <div class="profile-content">
      <h2 class="profile-subtitle">Hubungi Kami</h2>
      <div class="profile-contact">
        <box-icon name="map"></box-icon>
        <span>{{ profile.address }}</span>
      </div>
      <div class="profile-contact">
        <box-icon name="envelope"></box-icon>
        <span>{{ profile.email }}</span>
      </div>
      <div class="profile-contact">
        <box-icon name="phone"></box-icon>
        <span>+62 {{ profile.telp }}</span>
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
      profile: {},
      batasWilayah: [],
    };
  },

  mounted() {
    const pf = onSnapshot(collection(db, "profil"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const profile = {
          id: doc.id,
          desc: doc.data().sejarah,
          visi: doc.data().visi,
          misi: doc.data().misi,
          address: doc.data().alamat,
          email: doc.data().email,
          telp: doc.data().no_telp,
        };
        this.profile = profile;
      });
    });

    const bw = onSnapshot(collection(db, "batas_wilayah"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const bw = {
          id: doc.id,
          arah: doc.data().arah,
          batas: doc.data().batas,
        };
        this.batasWilayah.push(bw);
      });
    });
  },
};
</script>
