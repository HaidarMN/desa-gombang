<template>
  <div class="wisata-landing">
    <h1 class="wisata-landing-title">Wisata {{ $route.params.tipe_wisata }}</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed justo
      elit. Nunc hendrerit ante ac tincidunt consectetur. Cras ac vehicula
      massa. Aenean eu rhoncus lectus. Ut fringilla dolor non luctus malesuada.
      Vestibulum a facilisis dolor. In blandit, eros eu lobortis fringilla,
      augue dolor dignissim orci, ac feugiat ante arcu ac massa. Pellentesque
      habitant morbi tristique senectus et netus et malesuada fames ac turpis
      egestas. Nunc tristique dui eu dignissim congue. Donec vestibulum est id
      tellus faucibus fermentum. Curabitur nisi lacus, dictum eu urna nec,
      consequat tincidunt ligula. Nam ac urna augue.
    </p>

    <div class="wisata-landing-list">
      <router-link
        v-for="wst in wisata"
        :key="wst"
        :to="{
          name: 'Detail Wisata',
          params: { tipe_wisata: tipe, wisata: wst.name },
        }"
        class="wisata-landing-card"
      >
        <img :src="wst.img" :alt="wst.name" class="landing-card-img" />
        <div class="landing-card-title">
          <span>{{ wst.name }}</span>
        </div>
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
      wisata: [],
      tipe: "",
    };
  },

  mounted() {
    if (this.$route.params.tipe_wisata == "budaya") {
      const wb = onSnapshot(
        collection(db, "wisata_budaya"),
        (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const budaya = {
              id: doc.id,
              name: doc.data().nama_wisata,
              img: doc.data().gambar_wisata,
            };
            this.wisata.push(budaya);
          });
          this.tipe = "budaya";
        }
      );
    } else {
      const wr = onSnapshot(
        collection(db, "wisata_religi"),
        (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const religi = {
              id: doc.id,
              name: doc.data().nama_wisata,
              img: doc.data().gambar_wisata,
            };
            this.wisata.push(religi);
          });
          this.tipe = "religi";
        }
      );
    }
  },

  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        if (this.$route.params.tipe_wisata == "budaya") {
          this.wisata = [];
          const wb = onSnapshot(
            collection(db, "wisata_budaya"),
            (querySnapshot) => {
              querySnapshot.forEach((doc) => {
                const budaya = {
                  id: doc.id,
                  name: doc.data().nama_wisata,
                  img: doc.data().gambar_wisata,
                };
                this.wisata.push(budaya);
              });
              this.tipe = "budaya";
            }
          );
        } else {
          this.wisata = [];
          const wr = onSnapshot(
            collection(db, "wisata_religi"),
            (querySnapshot) => {
              querySnapshot.forEach((doc) => {
                const religi = {
                  id: doc.id,
                  name: doc.data().nama_wisata,
                  img: doc.data().gambar_wisata,
                };
                this.wisata.push(religi);
              });
              this.tipe = "religi";
            }
          );
        }
      }
    );
  },
};
</script>
