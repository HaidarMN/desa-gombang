import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
  history: createWebHistory(),
  routes: [
    // Landing Page
    {
      path: "/desa_wisata",
      name: "Landing Page",
      component: () => import("../components/landingPage/LandingPage.vue"),
    },

    // Wisata
    {
      path: "/desa_wisata/wisata-:tipe_wisata",
      name: "Wisata Landing",
      component: () => import("../components/wisata/WisataLanding.vue"),
    },
    {
      path: "/desa_wisata/wisata-:tipe_wisata/:wisata",
      name: "Detail Wisata",
      component: () => import("../components/wisata/DetailWisata.vue"),
    },

    // Profile
    {
      path: "/desa_wisata/profile",
      name: "Profile",
      component: () => import("../components/profile/Profile.vue"),
    },
    {
      path: "/desa_wisata/struktur-organisasi",
      name: "Struktur Organisasi",
      component: () => import("../components/profile/StrukturOrganisasi.vue"),
    },
  ],
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
