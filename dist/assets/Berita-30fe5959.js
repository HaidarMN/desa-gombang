import{_ as u,R as b,x as p,a as g,I as f,e as x,o as e,c as r,b as a,F as c,r as l,d as B,f as k,w as v,t as _}from"./index-e90d17d9.js";const w={data(){return{berita:[]}},mounted(){const i=b(g(B,"berita"),p("tanggal_berita","desc"));f(i,n=>{n.forEach(t=>{const o={id:t.id,name:t.data().nama_berita,img:t.data().gambar_berita,desc:t.data().desk_berita};this.berita.push(o)})}),console.log(this.berita)}},$={class:"berita"},C=a("h1",{class:"berita-title"},"Berita",-1),D={class:"berita-list"},E=["src"],F={class:"berita-text"},I={class:"text-title"},R={class:"text-paragraph"};function q(i,n,t,o,d,y){const m=x("router-link");return e(),r("div",$,[C,a("div",D,[(e(!0),r(c,null,l(d.berita,s=>(e(),k(m,{to:{name:"Berita Detail",params:{berita:s.name}},class:"berita-content"},{default:v(()=>[a("img",{src:s.img,alt:"",class:"berita-img"},null,8,E),a("div",F,[a("h2",I,_(s.name),1),(e(!0),r(c,null,l(s.desc.slice(0,1),h=>(e(),r("p",R,_(h),1))),256))])]),_:2},1032,["to"]))),256))])])}const N=u(w,[["render",q]]);export{N as default};
