<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>

<script>
import Navbar from "./components/general/Navbar.vue";
import Footer from "./components/general/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
