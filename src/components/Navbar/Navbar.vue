
  <template>
  <div class="container">
  <header class="header">
    <nav class="header__nav" :class="{color: scrolled > 0}" >
      <div class="header__nav-top">
        <ul class="header__nav-top-list">
          <li class="header__nav-top-link">
           <a href="tel:+998977342621">
           <fa icon="phone" class="navbar__icon" />
        </a>
          </li>
          <li class="header__nav-top-link">
           <a href="https://t.me/sevarsh_cosmetology">
           <fa icon="fab fa-telegram-plane" class="navbar__icon" />
        </a>
          </li>
            <li class="header__nav-top-link">
    <a href="https://instagram.com/sevar.sh_cosmetology?igshid=NTc4MTIwNjQ2YQ==">
        <fa icon="fab fa-instagram" class="navbar__icon" /></a>
      </li>
      <li class="header__nav-top-link">
        <a href="https://t.me/sevarsh_cosmetology">
        <button class="header__nav-top-btn">Онлайн-запись</button>
        </a>
      </li>
        </ul>
      </div>
        <div class="header__nav-container">
          <router-link to="/" class="header__nav-logo" @click="burger = false" >
            <h2 class="header__nav-logo-name">Dr. Sevar<span class="second__name"> Nigmatovna</span></h2>
          </router-link>
          <Transition name="fade" mode="out-in">
            <div class="header__nav-btn"  @click="burger = !burger" :class="{active: burger}" >
              <span></span>
            </div>

</Transition>
<Transition name="fade">
  <ul class="header__nav-list"  :class="{active: burger}">
    <li v-for="link in links" :key="link.url">
        <router-link :to="link.url" class="header__nav-link" @click="burger = false">
            {{ link.title }}
        </router-link>
    </li>

  </ul>

</Transition>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'


let burger = ref(false)
let scrolled = ref(0)
  
const links = ref([
              {title: 'Главная', url: '/'},
              {title: 'Мои услуги', url: '/service'},
              {title: 'Обо мне', url: '/about'},
              {title: 'Контакты', url: '/contacts'},
        ])

   


    const updateScroll = () =>{
      scrolled.value = window.scrollY
    }

  onMounted(() =>{
    window.addEventListener('scroll', updateScroll)
  })

</script>

<style>

</style>