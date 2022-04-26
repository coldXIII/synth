<template>
  <div class="box">
    <h1>Best SynthWave Albums</h1>
    <Swiper
      class="swiper"
      :slidesPerView="1"
      :spaceBetween="10"
      :modules="[Navigation, A11y]"
      navigation
      grab-cursor
      :loop="true"
      :breakpoints="{
       '600': {
        slidesPerView: 2,
        spaceBetween: 20,
      },
     
      '768': {
        slidesPerView: 3,
        spaceBetween: 40,
      },
      '1024': {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      }"
    >
      <SwiperSlide v-for="item in albums" :key="item" class="customSlide">
        <img :src="item" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/bundle';
import { useAlbumsStore } from '../../stores/albums.store';
const albums = useAlbumsStore().synthwaveAlbums;
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';
.box {
      width: 100%;
  padding: 2rem 0;
  background-color: $black;
  overflow: hidden;

  h1 {
    font-size: 3rem;
    text-align: center;
    margin: 1rem auto;
    color: $white;
    text-shadow: 2px 2px 1px $pink, -2px -2px 1px $blue;
  }
  .swiper {
    width: 90%;
    padding: 1rem 3rem;
    border-radius: 1rem;
    overflow: hidden;
    .customSlide {
      max-width: 100%;
      display: grid;
      place-items: center;
      overflow: hidden;

      img {
        display: block;
        width: 100%;
        object-fit: cover;
        @media(max-width:600px){
          width: 80%;
        }
      }
    }
  }
}
</style>
