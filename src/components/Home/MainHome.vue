<template>
  
 <div class="main">
    <div class="main__left">
        <div class="main__left-box">
            <h2 class="main__left-title">
                Заботьтесь О Своей Коже,
                <br>
                Заботесь О Своей
                <br> Красоте
            </h2>
            <p class="main__left-text">
                Врач косметолог - это добрый волшебник, который щедро дарит людям красоту, хорошее настроение, отлчиное самочувствие, успех и счастье!    
            </p>
            <div class="main__left-bottom">
                <router-link to="/about">
                    <button class="main__left-btn"> Обо мне </button>

                </router-link>
                <router-link to="/contacts">
                    <button class="main__left-btn"> Связаться со мной </button>

                </router-link>

            </div>

           
        </div>
    </div>
    <div class="main__right">
        <img src="@/assets/images/main_img.png" alt="" class="main__right-img">
    </div>
 </div>
 <div class="bottom">
    <p class="bottom__text">«У вашей кожи есть память. Через десять, двадцать или тридцать лет ваша кожа продемонстрирует результаты того, как с ней обращались сегодня. И начните ходит к Косметолгу».</p>
 </div>
</template>

<script setup>

</script>

<style>

</style>