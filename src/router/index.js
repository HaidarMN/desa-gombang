import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  history: createWebHashHistory(),
  routes: [
    // Landing Page
    {
      path: "/",
      name: "Landing Page",
      component: () => import("../components/landingPage/LandingPage.vue"),
    },

    // Wisata
    {
      path: "/wisata-:tipe_wisata",
      name: "Wisata Landing",
      component: () => import("../components/wisata/WisataLanding.vue"),
    },
    {
      path: "/wisata-:tipe_wisata/:wisata",
      name: "Detail Wisata",
      component: () => import("../components/wisata/DetailWisata.vue"),
    },

    // Profile
    {
      path: "/profile",
      name: "Profile",
      component: () => import("../components/profile/Profile.vue"),
    },
    {
      path: "/struktur-organisasi",
      name: "Struktur Organisasi",
      component: () => import("../components/profile/StrukturOrganisasi.vue"),
    },

    // Acara
    {
      path: "/acara",
      name: "Acara",
      component: () => import("../components/acara/Acara.vue"),
    },
    {
      path: "/acara/:acara",
      name: "Acara Detail",
      component: () => import("../components/acara/AcaraDetail.vue"),
    },

    // Berita
    {
      path: "/berita",
      name: "Berita",
      component: () => import("../components/berita/Berita.vue"),
    },
    {
      path: "/berita/:berita",
      name: "Berita Detail",
      component: () => import("../components/berita/BeritaDetail.vue"),
    },

    // Kritik Saran
    {
      path: "/kritik-saran",
      name: "Kritik Saran",
      component: () => import("../components/kritikSaran/KritikSaran.vue"),
    },
  ],
  base: "/desa_wisata/#",
});

router.beforeEach(async (to, from, next) => {
  let title = "Desa Wisata | ";
  if (to.name !== "Landing Page") {
    title += to.name;
  } else {
    title = "Desa Wisata";
  }
  document.title = title;
  next();
});

export default router;
