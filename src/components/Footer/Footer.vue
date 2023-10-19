<template>
  <footer class="footer">
    <div class="footer__top">
      <ul class="footer__top-list">
        <li class="footer__top-link">
            <router-link to="/service">
          <button class="footer__top-btn">
            Посмотреть все услуги
          </button>
            </router-link>
        </li>
        <li class="footer__top-link">
           <a href="https://t.me/sevarsh_cosmetology">
          <button class="footer__top-btn">
           Записаться прямо сейчас
          </button>
           </a>
        </li>
      </ul>
    </div>
    <ul class="footer__list">
      <li class="footer__link">
        <a href="https://maps.app.goo.gl/vM2Fm8h5HJfkWz1r5"
          ><fa icon="map-marker-alt" class="footer__icon" />
          <span class="footer__link-text"> г.Ташкент, Мирабадский р-н, ул. С.Барака, 14д </span>
        </a>
      </li>
      <li class="footer__link">
        <fa icon="phone" class="footer__icon" /><a href="tel:+998977342621">
          <span class="footer__link-text"> +998977342621 </span>
        </a>
      </li>
    </ul>
    <ul class="footer__list">
      <li class="footer__link">
        <fa icon="fab fa-telegram-plane" class="footer__icon" />
        <a href="https://t.me/sevarsh_cosmetology">
        <span class="footer__link-text"> sevarsh_cosmetology</span></a>
      </li>
      <li class="footer__link">
    <a href="https://instagram.com/sevar.sh_cosmetology?igshid=NTc4MTIwNjQ2YQ==">
        <fa icon="fab fa-instagram" class="footer__icon" />
    <span class="footer__link-text">sevar.sh_cosmetology</span></a>
      </li>
    </ul>
    <div class="footer__bottom">
      <h3 class="footer__bottom-name">Dr. Sevar Nigmatovna</h3>
    </div>
  </footer>
</template>

<script setup>
</script>

<style>
</style>