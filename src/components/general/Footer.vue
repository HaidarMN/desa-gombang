<template>
  <div class="footer">
    <img :src="logo" alt="logo" class="footer-img" />

    <div class="footer-content">
      <h1 class="content-title">Hubungi Kami</h1>
      <div class="content-menu">
        <span class="content-text">{{ profile.address }}</span>
        <a :href="'mailto:' + profile.email" class="content-contact">{{
          profile.email
        }}</a>
        <a :href="'tel:+62' + profile.telp" class="content-contact"
          >+62 {{ profile.telp }}</a
        >
      </div>
    </div>

    <div class="footer-content">
      <h1 class="content-title">Ikuti Kami</h1>
      <div class="content-follow">
        <a
          href="https://www.instagram.com/pemdesa_gombang/"
          target="_blank"
          class="follow-link"
        >
          <box-icon name="instagram-alt" type="logo" color="#4FCFE0"></box-icon>
        </a>
      </div>
    </div>

    <div class="footer-content">
      <h1 class="content-title">Lainnya</h1>
      <div class="content-menu">
        <router-link :to="{ name: 'Acara' }" class="content-text"
          >Acara</router-link
        >
        <router-link :to="{ name: 'Berita' }" class="content-text"
          >Berita</router-link
        >
        <router-link :to="{ name: 'Kritik Saran' }" class="content-text"
          >Kritik Saran</router-link
        >
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
      logo: "",
    };
  },

  mounted() {
    const logo = onSnapshot(collection(db, "logo"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.logo = doc.data().logo;
      });
    });
    const pf = onSnapshot(collection(db, "profil"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const profile = {
          id: doc.id,
          address: doc.data().alamat,
          email: doc.data().email,
          telp: doc.data().no_telp,
        };
        this.profile = profile;
      });
    });
  },
};
</script>
