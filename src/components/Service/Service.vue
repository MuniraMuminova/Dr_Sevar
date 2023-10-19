<template>
        <div class="container">
        <div class="service">
            <img src="@/assets/images/uslugi.jpg" alt="" class="service__image">
            <h1 class="service__image-title">Мои Услуги</h1>
        </div>
        <div class="service__box" >
            <div class="service__boxes"  v-for="item in services" :key="item.id">
              <img :src="item.img" alt="" class="service__box-img">
              <h3 class="service__box-name"> {{ item.name }}</h3>
              <router-link :to="/service/ + item.link">
                  <button class="service__box-btn">Подробнее</button>
              </router-link>
            </div>
        </div>

    </div>
</template>

<script setup>
  import {ref} from 'vue'
    import img1 from '@/assets/images/smas.jpg';
    import img2 from '@/assets/images/rf.jpg';
    import img3 from '@/assets/images/botox.jpg';
    import img4 from '@/assets/images/mezoap.jpg';
    import img5 from '@/assets/images/mezo.jpg';
    import img6 from '@/assets/images/biozev.jpg';
    import img7 from '@/assets/images/rev.jpg';
    import img8 from '@/assets/images/lips.jpg';
    import img9 from '@/assets/images/gkislota.jpg';
    import img10 from '@/assets/images/blefoplast.jpg';
    import img11 from '@/assets/images/nit.jpg';
    import img17 from '@/assets/images/volos.jpg';
    import img12 from '@/assets/images/piling.jpg';
    import img13 from '@/assets/images/pilingap.jpg';
    import img14 from '@/assets/images/chistka.jpg';
    import img15 from '@/assets/images/elekro.jpg';
    import img16 from '@/assets/images/lazer.jpg';
    import img18 from '@/assets/images/korrektel.jpg';
    import img19 from '@/assets/images/korreknos.jpg';
    import img20 from '@/assets/images/udrastyajka.jpg';
    import img21 from '@/assets/images/tatu.jpg';
    import img22 from '@/assets/images/udshildoy.jpg';
    import img23 from '@/assets/images/popeloma.jpg';
    import img24 from '@/assets/images/bezinyeksiya.jpg';



  const services = ref([
    {id: 1, name: 'SMAS-лифтинг', img: img1, link:'SmasLifting'},
    {id: 2, name: 'Микроигольчатый RF', img: img2, link:'MikroigolchatiyRF'},
    {id: 3, name: 'Ботокс', img: img3, link: 'Botox'},
    {id: 4, name: 'Аппаратная Мезотерапия ', img: img4, link:'ApparatnayaMezoterapiya'},
    {id: 5, name: 'Мезотерапия', img: img5, link:'Mezoterapiya'},
    {id: 6, name: 'Биоревитализация', img: img6, link: 'Biorevitalizatsiya'},
    {id: 7, name: 'Редермализация ', img: img7, link:'Redermalizatsiya'},
    {id: 8, name: 'Контурная пластика губ', img: img8, link:'KorrektsiyaGub'},
    {id: 9, name: 'Гиалуроновая Кислота', img: img9, link:'GialuronovayaKislota'},
    {id: 10, name: 'Косметологическая Блефаропластика', img: img10, link:'Blefoplastika'},
    {id: 11, name: 'Нитиевой Лифтинг', img: img11, link:'NitivoyKifting'},
    {id: 17, name: 'Лечение Выпадения Волос', img: img17, link:'ProtivoVipodaniyeVolos'},
    {id: 12, name: 'Пилинг', img: img12, link:'Piling'},
    {id: 13, name: 'Карбоновый Лазерный  Пилинг', img: img13, link:'ApparetniyPiling' },
    {id: 14, name: 'Чистка лица', img: img14, link:'Chistka'},
    {id: 15, name: 'Электроэпиляция', img: img15, link:'Elektoepilyatsiya'},
    {id: 16, name: 'Лазерная Эпиляция', img: img16, link:'LazernayaEpilyatsiya'},
    {id: 18, name: 'Коррекция фигуры', img: img18, link:'KorrektsiyaFiguri'},
    {id: 19, name: 'Коррекция Формы Носа', img: img19, link:'KorrektsiyaNosa'},
    {id: 20, name: 'Удаление Растяжек', img: img20, link:'UdaleniyeRastyajek'},
    {id: 21, name: 'Удаление Татуажа ', img: img21, link:'UdaleniyeTatuaja'},
    {id: 22, name: 'Удаление Татуажа С Век (Шильдой)', img: img22, link:'UdaleniyeShildoy'},
    {id: 23, name: 'Удаление Папиллом Лазером', img: img23, link:'UdaleniyePapilomi'},
    {id: 24, name: 'Безинъекционная Биоревитализация (Без укола)', img: img24, link: 'Bezinyektsionnaya'}
  ])
</script>

<style>

</style>