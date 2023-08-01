<template>
  <div class="profile">
    <h1 class="profile-title">Profil</h1>

    <div class="profile-content">
      <h2 class="profile-subtitle">Sejarah</h2>
      <p v-for="desc in profile.desc">{{ desc }}</p>
    </div>

    <div class="profile-content">
      <h2 class="profile-subtitle">Visi</h2>
      <p>{{ profile.visi }}</p>
    </div>

    <div class="profile-content">
      <h2 class="profile-subtitle">Misi</h2>
      <ol class="profile-list">
        <li v-for="misi in profile.misi" :key="misi">{{ misi }}</li>
      </ol>
    </div>

    <div class="profile-content">
      <h2 class="profile-subtitle">Batas Wilayah</h2>
      <ul class="profile-list">
        <li v-for="bw in batasWilayah" :key="bw">
          {{ bw.arah }}: {{ bw.batas }}
        </li>
      </ul>
    </div>

    <div class="profile-content">
      <h2 class="profile-subtitle">Jumlah Penduduk</h2>
      <table class="profile-table">
        <thead>
          <tr>
            <th>RT</th>
            <th>Laki-Laki</th>
            <th>Perempuan</th>
            <th>L+P</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="jp in jumlahPenduduk" :key="jp">
            <td>{{ jp.rt }}</td>
            <td>{{ jp.lk }}</td>
            <td>{{ jp.pr }}</td>
            <td>{{ jmlhLP(jp.lk, jp.pr) }}</td>
          </tr>
          <tr>
            <td><strong>Total</strong></td>
            <td>
              <strong>{{ jumlahLaki }}</strong>
            </td>
            <td>
              <strong>{{ jumlahPerempuan }}</strong>
            </td>
            <td>
              <strong>{{ totalJumlah }}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="profile-content">
      <h2 class="profile-subtitle">Hubungi Kami</h2>
      <div class="profile-contact">
        <box-icon name="map"></box-icon>
        <span>{{ profile.address }}</span>
      </div>
      <div class="profile-contact">
        <box-icon name="envelope"></box-icon>
        <span>{{ profile.email }}</span>
      </div>
      <div class="profile-contact">
        <box-icon name="phone"></box-icon>
        <span>+62 {{ profile.telp }}</span>
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
      batasWilayah: [],
      jumlahPenduduk: [],
      jumlahLaki: 0,
      jumlahPerempuan: 0,
      totalJumlah: 0,
    };
  },

  methods: {
    jmlhLP: function (l, p) {
      return parseInt(l) + parseInt(p);
    },
  },

  mounted() {
    const pf = onSnapshot(collection(db, "profil"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const profile = {
          id: doc.id,
          desc: doc.data().sejarah,
          visi: doc.data().visi,
          misi: doc.data().misi,
          address: doc.data().alamat,
          email: doc.data().email,
          telp: doc.data().no_telp,
        };
        this.profile = profile;
      });
    });

    const bw = onSnapshot(collection(db, "batas_wilayah"), (querySnapshot) => {
      querySnapshot.forEach((doc) => {
        const bw = {
          id: doc.id,
          arah: doc.data().arah,
          batas: doc.data().batas,
        };
        this.batasWilayah.push(bw);
      });
    });

    const jp = onSnapshot(
      collection(db, "jumlah_penduduk"),
      (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const jp = {
            id: doc.id,
            rt: doc.data().rt,
            lk: doc.data().laki,
            pr: doc.data().perempuan,
          };
          this.jumlahPenduduk.push(jp);
          this.jumlahLaki += parseInt(doc.data().laki);
          this.jumlahPerempuan += parseInt(doc.data().perempuan);
        });
        this.totalJumlah = this.jumlahLaki + this.jumlahPerempuan;
      }
    );
  },
};
</script>
