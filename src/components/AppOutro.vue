<template>
  <div class="container">
    <div class="row" v-for="x in 10" :key="x">
      <div class="hexagon" v-for="n in 16" :key="n"></div>
    </div>
    <div class="box">
      <div class="lamp-container">
        <button @click="turnOn = !turnOn">
          <i class="fa-solid fa-circle-play"></i>
        </button>
        <img src="/lamp.webp" alt="" class="lamp" />
        <img
          src="/light.webp"
          alt=""
          class="light"
          id="light"
          :class="{ on: turnOn }"
        />
        <a
          href="https://www.youtube.com/playlist?list=PLfZmxCD5mrzgJg3CQVAD0CiDGwBG4K7W0"
          target="_blank"
        >
          <div class="image">
            <img
              src="/albums/frozen_plasma.jpg"
              alt=""
              :class="{ on: turnOn }"
            /></div
        ></a>
        <div v-if="!turnOn" class="energy-ball">
          <EnergyBall />
        </div>
      </div>
    </div>
    <div class="right-side">
      <h1>DarkWave Offtop</h1>
      <DarkwaveVideoClips />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useVideoStore } from '../stores/video.store';
import EnergyBall from './decor/EnergyBall.vue';
import DarkwaveVideoClips from './videoclips/DarkwaveVideoClips.vue';
const videos = useVideoStore().darkwaveVideos;

const turnOn = ref(false);
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';
.container {
  position: relative;
  background-color: $black;
  overflow: hidden;

  @media (max-width: 995px) {
    min-height: 100vh;
  }

  .row {
    display: inline-flex;
    margin-top: -35px;
    margin-left: -50px;

    &:nth-child(even) {
      margin-left: 1px;
    }

    .hexagon {
      position: relative;
      width: 100px;
      height: 110px;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      background: linear-gradient(
        90deg,
        rgba(18, 17, 19, 1) 50%,
        rgba(0, 0, 0, 1)
      );
      border: 1px solid $black;
      transition: all 0.3s ease;
      animation: animate 2s linear infinite;
    }
  }
  .box {
    position: absolute;
    top: 7%;
    left: -10%;
    right: 0;
    transform: translateY(-20%);
    width: 100%;
    background-color: transparent;
    margin: 0 auto;

    @media (max-width: 995px) {
      top: 0;
    }
    .lamp-container {
      position: relative;
      top: -15%;
      left: 10%;
      width: 400px;
      @media (max-width: 995px) {
        width: 300px;
        top: 15%;
      }
      @media (max-width: 850px) {
        top: 12%;
        left: 38%;
      }
      @media (max-width: 650px) {
        left: 30%;
      }
      @media (max-width: 550px) {
        left: 22%;
      }
      @media (max-width: 450px) {
        left: 12%;
      }

      button {
        position: absolute;
        left: 3%;
        top: 28%;
        padding: 0.5rem;
        border: 1px solid $purple;
        border-radius: 0.5rem;
        background-color: $purple;
        box-shadow: 0 0 5px $purple;
        cursor: pointer;
        &:hover {
          border: 1px solid $red;
          background-color: $red;
          box-shadow: 0 0 5px $red;
        }
        i {
          font-size: 2rem;
          color: $white;
          text-shadow: 2px 2px 1px $pink, -2px -2px 1px $blue;
        }
      }
      .image {
        position: absolute;
        top: 100%;
        left: 30%;
        width: 10rem;
        border-radius: 0.5rem;

        @media (max-width: 995px) {
          left: 23%;
          top: 110%;
        }
        @media (max-width: 850px) {
          top: 95%;
        }
        img {
          width: 100%;
          border-radius: 0.5rem;
          opacity: 0;
          transition: opacity 0.5s;
          &.on {
            opacity: 1;
          }
        }
      }

      .lamp {
        width: 100%;
      }
      .light {
        position: absolute;
        top: 85%;
        left: 48%;
        transform: translateX(-50%);
        width: 650px;
        opacity: 0;
        transition: opacity 0.5s;
        &.on {
          opacity: 1;
        }
      }
      .energy-ball {
        position: absolute;
        top: 115%;
        left: 23%;

        @media (max-width: 990px) {
          left: 15%;
        }
        @media (max-width: 850px) {
          left: 23%;
        }
      }
    }
  }
  .right-side {
    position: absolute;
    top: 0;
    right: 0;
    width: 50%;
    padding: 2rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 995px) {
      width: 80%;
      top: 10%;
      right: -10%;
    }
    @media (max-width: 850px) {
      width: 100%;
      top: 38%;
      right: 0;
    }
    h1 {
      color: $purple;
      text-shadow: 0 0 10px $purple, 0 0 20px $purple, 0 0 40px $purple,
        0 0 80px $purple, 0 0 120px $purple;
      margin-bottom: 2rem;
      @media (max-width: 850px) {
        margin-bottom: 1rem;
      }
    }
  }
}
@keyframes animate {
  0% {
    border: 1px solid $pink;
  }
  50% {
    border: 1px solid $purple;
  }
  100% {
    border: 1px solid $blue;
  }
}
</style>
