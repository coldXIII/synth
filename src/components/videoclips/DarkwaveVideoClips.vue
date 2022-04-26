<template>
  <article class="articles">
    <ul>
      <li v-for="(video, idx) in videos" :key="idx">
        <a :href="video.url" target="_blank">
          <div class="image">
            <img :src="video.image" />
          </div>
          <div class="text">
            <span class="artist">{{ video.name }}</span>
            <span class="song">{{ video.song }}</span>
          </div>
        </a>
      </li>
    </ul>
  </article>
</template>

<script setup lang="ts">
import { useVideoStore } from '../../stores/video.store';

const videos = useVideoStore().darkwaveVideos;
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';
.articles {
  position: relative;
  width: 80%;
  border-radius: 1rem;
  overflow-y: scroll;
  max-height: 35rem;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    width: 0;
  }
  @media (max-width: 1000px) {
    width: 70%;
    margin: 1rem auto;
  }
  @media (max-width: 850px) {
    width: 90%;
    max-height: 30rem;
  }
  @media (max-width: 400px) {
    width: 80%;
  }
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0.5rem 0;
    border: 2px solid transparent;
    border-radius: 0.5rem;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: inset 0 0 15px $purple, inset 0 0 15px $purple,
      inset 0 0 25px $purple, inset 0 0 35px $purple;

    a {
      font-size: 0.7rem;
      font-weight: 800;
      display: flex;
      width: 100%;
      text-decoration: none;

      .image {
        max-width: 6rem;
        flex-grow: 0;
        img {
          width: 100%;
          height: 100%;
          border-radius: 0.5rem;
          @media (max-width: 450px) {
            width: 80%;
          }
        }
      }
      .text {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: column;
        gap: 0.5rem;
        background-color: rgba(0, 0, 0, 0.6);
        padding: 0.2rem;
        width: 100%;
        flex-grow: 1;
        @media (max-width: 450px) {
          align-items: center;
        }
        span {
          font-size: 1.3rem;
          font-weight: 300;
          margin-left: 2rem;

          @media (max-width: 450px) {
            font-size: 1rem;
            margin-left: 0.5rem;
          }
          &.artist {
            color: $purple;
            text-shadow: 2px 2px 10px $purple, -2px -2px 10px $purple;
            &:hover {
              color: $red;
              text-shadow: 2px 2px 10px $red, -2px -2px 10px $red;
            }
          }
          &.song {
            font-size: 1rem;
            color: $pink;
            &:hover {
              color: $pink;
              text-shadow: 2px 2px 10px $pink, -2px -2px 10px $pink;
            }
            @media (max-width: 450px) {
              font-size: 0.8rem;
            }
          }
        }
      }
    }
  }
}
</style>
