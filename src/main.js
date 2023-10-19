import { createApp } from 'vue'
import '@/style/main.scss'
import App from './App.vue'
//    Swiper

import {routers} from '@/router'
import {service} from '@/service.js'

// Импортируем icon
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

const app = createApp(App)


library.add(fas, far, fab)
app.component('fa', FontAwesomeIcon)
app.use(routers)
app.use(service)

app.mount('#app')