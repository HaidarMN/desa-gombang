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

      this.tipe = "budaya";

      const tb = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
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
    } else if (this.$route.params.tipe_wisata == "religi") {
      const q = query(collection(db, "wisata"), where("tipe", "==", "religi"));

      this.tipe = "religi";

      const tr = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
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
    } else if (this.$route.params.tipe_wisata == "kesenian") {
      const q = query(
        collection(db, "wisata"),
        where("tipe", "==", "kesenian")
      );

      this.tipe = "kesenian";

      const tk = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.data().desk.forEach((txt) => {
            this.text.push(txt);
          });
        });
      });

      const wk = onSnapshot(
        collection(db, "wisata_kesenian"),
        (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const kesenian = {
              id: doc.id,
              name: doc.data().nama_wisata,
              img: doc.data().gambar_wisata,
            };
            this.wisata.push(kesenian);
          });
        }
      );
    } else {
      const q = query(collection(db, "wisata"), where("tipe", "==", "makanan"));

      this.tipe = "makanan";

      const tm = onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          doc.data().desk.forEach((txt) => {
            this.text.push(txt);
          });
        });
      });

      const wm = onSnapshot(
        collection(db, "wisata_makanan"),
        (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            const makanan = {
              id: doc.id,
              name: doc.data().nama_wisata,
              img: doc.data().gambar_wisata,
            };
            this.wisata.push(makanan);
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
          this.text = [];
          this.tipe = "budaya";
          const q = query(
            collection(db, "wisata"),
            where("tipe", "==", "budaya")
          );

          const tb = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
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
        } else if (this.$route.params.tipe_wisata == "religi") {
          this.wisata = [];
          this.text = [];
          this.tipe = "religi";

          const q = query(
            collection(db, "wisata"),
            where("tipe", "==", "religi")
          );

          const tr = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
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
        } else if (this.$route.params.tipe_wisata == "kesenian") {
          this.wisata = [];
          this.text = [];
          this.tipe = "kesenian";

          const q = query(
            collection(db, "wisata"),
            where("tipe", "==", "kesenian")
          );

          const tk = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.data().desk.forEach((txt) => {
                this.text.push(txt);
              });
            });
          });

          const wk = onSnapshot(
            collection(db, "wisata_kesenian"),
            (querySnapshot) => {
              querySnapshot.forEach((doc) => {
                const kesenian = {
                  id: doc.id,
                  name: doc.data().nama_wisata,
                  img: doc.data().gambar_wisata,
                };
                this.wisata.push(kesenian);
              });
            }
          );
        } else {
          this.wisata = [];
          this.text = [];
          this.tipe = "makanan";

          const q = query(
            collection(db, "wisata"),
            where("tipe", "==", "makanan")
          );

          const tm = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach((doc) => {
              doc.data().desk.forEach((txt) => {
                this.text.push(txt);
              });
            });
          });

          const wm = onSnapshot(
            collection(db, "wisata_makanan"),
            (querySnapshot) => {
              querySnapshot.forEach((doc) => {
                const makanan = {
                  id: doc.id,
                  name: doc.data().nama_wisata,
                  img: doc.data().gambar_wisata,
                };
                this.wisata.push(makanan);
              });
            }
          );
        }
      }
    );
  },
};
</script>
