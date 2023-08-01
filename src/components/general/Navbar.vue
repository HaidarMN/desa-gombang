<template>
  <div class="navbar">
    <router-link
      @click="(show = !show), (wisata = false), (tentangKami = false)"
      :to="{ name: 'Landing Page' }"
    >
      <img :src="logo" alt="logo" class="navbar-img" />
    </router-link>

    <button
      @click="(show = !show), (wisata = false), (tentangKami = false)"
      class="navbar-dropdown"
    >
      <box-icon v-if="!show" name="menu"></box-icon>
      <box-icon v-else name="x"></box-icon>
    </button>

    <div :class="show ? 'flex' : 'hidden'" class="navbar-menu">
      <div class="navbar-menu-dropdown group">
        <div
          @click="(wisata = !wisata), (tentangKami = false)"
          :class="wisata ? 'fill-[#79E0EE] text-[#79E0EE]' : ''"
          class="dropdown-menu"
        >
          <span class="navbar-menu-text">Wisata</span>
          <box-icon
            :class="wisata ? 'rotate-180 ' : 'rotate-0'"
            name="chevron-down"
            type="solid"
            style="width: 20px"
          ></box-icon>
        </div>

        <div :class="wisata ? 'flex' : 'hidden'" class="menu-dropdown-content">
          <router-link
            v-for="wst in wisataList"
            :key="wst"
            :to="{ name: 'Wisata Landing', params: { tipe_wisata: wst.link } }"
            @click="(wisata = !wisata), (show = !show)"
            class="navbar-menu-text"
            >{{ wst.text }}</router-link
          >
        </div>
      </div>

      <div class="navbar-menu-dropdown group">
        <div
          @click="(tentangKami = !tentangKami), (wisata = false)"
          :class="tentangKami ? 'fill-[#79E0EE] text-[#79E0EE]' : ''"
          class="dropdown-menu"
        >
          <span class="navbar-menu-text">Tentang Kami</span>
          <box-icon
            :class="tentangKami ? 'rotate-180 ' : 'rotate-0'"
            name="chevron-down"
            type="solid"
            style="width: 20px"
          ></box-icon>
        </div>

        <div
          :class="tentangKami ? 'flex' : 'hidden'"
          class="menu-dropdown-content"
        >
          <router-link
            v-for="tkl in tentaKamiList"
            :key="tkl"
            :to="{ name: tkl.link }"
            @click="(tentangKami = !tentangKami), (show = !show)"
            class="navbar-menu-text"
            >{{ tkl.text }}</router-link
          >
        </div>
      </div>

      <router-link
        v-for="x in menu"
        :key="x"
        @click="(show = !show), (wisata = false), (tentangKami = false)"
        :to="{ name: x.link }"
        class="group"
      >
        <span class="navbar-menu-text">{{ x.text }}</span>
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
      menu: [
        // {
        //   link: "Acara",
        //   text: "Acara",
        // },
        {
          link: "Berita",
          text: "Berita",
        },
      ],
      wisataList: [
        {
          link: "budaya",
          text: "Wisata Budaya",
        },
        {
          link: "religi",
          text: "Wisata Religi",
        },
        {
          link: "kesenian",
          text: "Wisata Kesenian",
        },
        {
          link: "makanan",
          text: "Wisata Makanan",
        },
      ],
      tentaKamiList: [
        {
          link: "Profile",
          text: "Profil",
        },
        {
          link: "Struktur Organisasi",
          text: "Struktur Organisasi",
        },
      ],
      show: false,
      wisata: false,
      tentangKami: false,
      logo: "",
    };
  },

  mounted() {
    const logo = onSnapshot(collection(db, "logo"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.logo = doc.data().logo;
      });
    });
  },
};
</script>
