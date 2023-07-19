<template>
  <div class="wisata-landing">
    <h1 class="wisata-landing-title">Wisata {{ $route.params.tipe_wisata }}</h1>

    <div class="wisata-landing-desc">
      <p v-for="txt in text" :key="txt">{{ txt }}</p>
    </div>

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
import { collection, onSnapshot, where, query } from "firebase/firestore";

export default {
  data() {
    return {
      wisata: [],
      tipe: "",
      text: [],
    };
  },

  mounted() {
    if (this.$route.params.tipe_wisata == "budaya") {
      const q = query(collection(db, "wisata"), where("tipe", "==", "budaya"));

      const tb = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.tipe = doc.data().tipe;
          doc.data().desk.forEach((txt) => {
            this.text.push(txt);
          });
        });
      });

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
        }
      );
    } else {
      const q = query(collection(db, "wisata"), where("tipe", "==", "religi"));

      const tr = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.tipe = doc.data().tipe;
          doc.data().desk.forEach((txt) => {
            this.text.push(txt);
          });
        });
      });

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
          this.text = "";
          this.tipe = "";

          const q = query(
            collection(db, "wisata"),
            where("tipe", "==", "budaya")
          );

          const tb = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.tipe = doc.data().tipe;
              doc.data().desk.forEach((txt) => {
                this.text.push(txt);
              });
            });
          });
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
            }
          );
        } else {
          this.wisata = [];
          this.text = "";
          this.tipe = "";

          const q = query(
            collection(db, "wisata"),
            where("tipe", "==", "religi")
          );

          const tr = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
              this.tipe = doc.data().tipe;
              doc.data().desk.forEach((txt) => {
                this.text.push(txt);
              });
            });
          });

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
            }
          );
        }
      }
    );
  },
};
</script>
