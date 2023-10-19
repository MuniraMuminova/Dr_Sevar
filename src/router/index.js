import { createRouter, createWebHashHistory} from "vue-router";

import Home from '@/pages/Home.vue'


export const routers = createRouter({
    history: createWebHashHistory(),
    routes:[
      {path:'/', name:'home', component: Home},
      {path:'/service', name:'service', component: () => import('@/components/Service/Service.vue')},
      {path:'/about', name:'about', component: () => import('@/components/About/AboutMe.vue')},
      {path:'/contacts', name:'contacts', component: () => import('@/components/Contacts/Contacts.vue')},
      {path:'/service/ApparatnayaMezoterapiya', name:'ApparatnayaMezoterapiya', component: () => import('@/pages/ServicePages/ApparatnayaMezoterapiya.vue')},
      {path:'/service/ApparetniyPiling', name:'ApparetniyPiling', component: () => import('@/pages/ServicePages/ApparetniyPiling.vue')},
      {path:'/service/Bezinyektsionnaya', name:'Bezinyektsionnaya', component: () => import('@/pages/ServicePages/Bezinyektsionnaya.vue')},
      {path:'/service/Biorevitalizatsiya', name:'Biorevitalizatsiya', component: () => import('@/pages/ServicePages/Biorevitalizatsiya.vue')},
      {path:'/service/Blefoplastika', name:'Blefoplastika', component: () => import('@/pages/ServicePages/Blefoplastika.vue')},
      {path:'/service/Botox', name:'Botox', component: () => import('@/pages/ServicePages/Botox.vue')},
      {path:'/service/Chistka', name:'Chistka', component: () => import('@/pages/ServicePages/Chistka.vue')},
      {path:'/service/Elektoepilyatsiya', name:'Elektoepilyatsiya', component: () => import('@/pages/ServicePages/Elektoepilyatsiya.vue')},
      {path:'/service/GialuronovayaKislota', name:'GialuronovayaKislota', component: () => import('@/pages/ServicePages/GialuronovayaKislota.vue')},
      {path:'/service/KorrektsiyaFiguri', name:'KorrektsiyaFiguri', component: () => import('@/pages/ServicePages/KorrektsiyaFiguri.vue')},
      {path:'/service/KorrektsiyaGub', name:'KorrektsiyaGub', component: () => import('@/pages/ServicePages/KorrektsiyaGub.vue')},
      {path:'/service/KorrektsiyaNosa', name:'KorrektsiyaNosa', component: () => import('@/pages/ServicePages/KorrektsiyaNosa.vue')},
      {path:'/service/LazernayaEpilyatsiya', name:'LazernayaEpilyatsiya', component: () => import('@/pages/ServicePages/LazernayaEpilyatsiya.vue')},
      {path:'/service/Mezoterapiya', name:'Mezoterapiya', component: () => import('@/pages/ServicePages/Mezoterapiya.vue')},
      {path:'/service/NitivoyKifting', name:'NitivoyLifting', component: () => import('@/pages/ServicePages/NitivoyKifting.vue')},
      {path:'/service/Piling', name:'Piling', component: () => import('@/pages/ServicePages/Piling.vue')},
      {path:'/service/ProtivoVipodaniyeVolos', name:'ProtivoVipodaniyeVolos', component: () => import('@/pages/ServicePages/ProtivoVipodaniyeVolos.vue')},
      {path:'/service/Redermalizatsiya', name:'Redermalizatsiya', component: () => import('@/pages/ServicePages/Redermalizatsiya.vue')},
      {path:'/service/MikroigolchatiyRF', name:'MikroigolchatiyRF', component: () => import('@/pages/ServicePages/MikroigolchatiyRF.vue')},
      {path:'/service/SmasLifting', name:'SmasLifting', component: () => import('@/pages/ServicePages/SmasLifting.vue')},
      {path:'/service/UdaleniyePapilomi', name:'UdaleniyePapilomi', component: () => import('@/pages/ServicePages/UdaleniyePapilomi.vue')},
      {path:'/service/UdaleniyeRastyajek', name:'UdaleniyeRastyajek', component: () => import('@/pages/ServicePages/UdaleniyeRastyajek.vue')},
      {path:'/service/UdaleniyeShildoy', name:'UdaleniyeShildoy', component: () => import('@/pages/ServicePages/UdaleniyeShildoy.vue')},
      {path:'/service/UdaleniyeTatuaja', name:'UdaleniyeTatuaja', component: () => import('@/pages/ServicePages/UdaleniyeTatuaja.vue')},
     
    ]
})