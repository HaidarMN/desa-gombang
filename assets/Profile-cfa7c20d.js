import{_ as m,I as d,a as f,e as b,o,c as l,b as s,F as p,r as _,t as i,g as h,d as u}from"./index-c763aa7d.js";const v={data(){return{profile:{},batasWilayah:[]}},mounted(){d(f(u,"profil"),n=>{n.forEach(e=>{const r={id:e.id,desc:e.data().sejarah,visi:e.data().visi,misi:e.data().misi,address:e.data().alamat,email:e.data().email,telp:e.data().no_telp};this.profile=r})}),d(f(u,"batas_wilayah"),n=>{n.forEach(e=>{const r={id:e.id,arah:e.data().arah,batas:e.data().batas};this.batasWilayah.push(r)})})}},y={class:"profile"},x=s("h1",{class:"profile-title"},"Profil",-1),g={class:"profile-content"},k=s("h2",{class:"profile-subtitle"},"Sejarah",-1),B={class:"profile-content"},W=s("h2",{class:"profile-subtitle"},"Visi",-1),E={class:"profile-content"},V=s("h2",{class:"profile-subtitle"},"Misi",-1),j={class:"profile-list"},F={class:"profile-content"},I=s("h2",{class:"profile-subtitle"},"Batas Wilayah",-1),N={class:"profile-list"},P={class:"profile-content"},S=s("h2",{class:"profile-subtitle"},"Hubungi Kami",-1),C={class:"profile-contact"},D={class:"profile-contact"},H={class:"profile-contact"};function K(n,e,r,L,a,M){const c=b("box-icon");return o(),l("div",y,[x,s("div",g,[k,(o(!0),l(p,null,_(a.profile.desc,t=>(o(),l("p",null,i(t),1))),256))]),s("div",B,[W,s("p",null,i(a.profile.visi),1)]),s("div",E,[V,s("ol",j,[(o(!0),l(p,null,_(a.profile.misi,t=>(o(),l("li",{key:t},i(t),1))),128))])]),s("div",F,[I,s("ul",N,[(o(!0),l(p,null,_(a.batasWilayah,t=>(o(),l("li",{key:t},i(t.arah)+": "+i(t.batas),1))),128))])]),s("div",P,[S,s("div",C,[h(c,{name:"map"}),s("span",null,i(a.profile.address),1)]),s("div",D,[h(c,{name:"envelope"}),s("span",null,i(a.profile.email),1)]),s("div",H,[h(c,{name:"phone"}),s("span",null,"+62 "+i(a.profile.telp),1)])])])}const w=m(v,[["render",K]]);export{w as default};
