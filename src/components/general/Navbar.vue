<template>
  <div class="navbar">
    <router-link
      @click="(show = !show), (wisata = false), (tentangKami = false)"
      to="/desa_wisata"
    >
      <img
        src="../../assets/general/DakaraLogo.png"
        alt="logo"
        class="navbar-img"
      />
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
            :to="{ path: '/desa_wisata/wisata-budaya' }"
            @click="(wisata = !wisata), (show = !show)"
            class="navbar-menu-text"
            >Wisata Budaya</router-link
          >
          <router-link
            :to="{ path: '/desa_wisata/wisata-religi' }"
            @click="(wisata = !wisata), (show = !show)"
            class="navbar-menu-text"
            >Wisata Religi</router-link
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
            :to="{ path: '/desa_wisata/' + tkl.link }"
            @click="(tentangKami = !tentangKami), (show = !show)"
            class="navbar-menu-text"
            >{{ tkl.text }}</router-link
          >
        </div>
      </div>

      <router-link
        v-for="x in menu"
        :key="x"
        @click="show = !show"
        :to="{ name: x.link }"
        class="group"
      >
        <span class="navbar-menu-text">{{ x.text }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          link: "Landing Page",
          text: "Berita",
        },
        {
          link: "Landing Page",
          text: "Acara",
        },
      ],
      tentaKamiList: [
        {
          link: "profile",
          text: "Profil",
        },
        {
          link: "struktur-organisasi",
          text: "Struktur Organisasi",
        },
      ],
      show: false,
      wisata: false,
      tentangKami: false,
    };
  },
};
</script>
