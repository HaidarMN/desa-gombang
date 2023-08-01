<template>
  <div class="landing-page">
    <Banner />
    <About />
    <Wisata />
    <!-- <Events /> -->
    <News />
  </div>
</template>

<script>
import Banner from "../landingPage/Banner.vue";
import About from "../landingPage/About.vue";
import Wisata from "../landingPage/Wisata.vue";
import Events from "../landingPage/Events.vue";
import News from "../landingPage/News.vue";

export default {
  components: {
    Banner,
    About,
    Wisata,
    Events,
    News,
  },
};
</script>
