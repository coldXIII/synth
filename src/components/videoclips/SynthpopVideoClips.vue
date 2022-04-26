<template>
  <div class="video-list">
    <h1>Best Videoclips</h1>

    <article class="articles">
      <ul>
        <li v-for="(video, idx) in videos" :key="idx">
          <a :href="video.url" target="_blank">
            <div class="image">
              <img :src="video.image" />
            </div>
            <div class="text">
              <span class="artist">{{ video.artist }}</span>
              <span class="song">{{ video.song }}</span>
            </div>
          </a>
        </li>
      </ul>
    </article>
  </div>
</template>

<script setup lang="ts">
import { useVideoStore } from '../../stores/video.store';
const videos = useVideoStore().synthpopVideos;
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';
.video-list {
  width: 80%;
  flex: 1 1 60%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (max-width: 995px) {
    width: 100%;
  }

  h1 {
    text-align: center;
    margin: 1rem auto;
    color: $white;
    text-shadow: $text-shadow-main;
  }
  .articles {
    width: 80%;
    position: relative;
    border-radius: 1rem;
    overflow-y: scroll;
    max-height: 30rem;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      width: 0;
    }
    @media (max-width: 1000px) {
      width: 70%;
      margin: 1rem auto;
    }
    @media (max-width: 600px) {
      width: 90%;
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
      box-shadow: inset 0 0 15px $blue, inset 0 0 15px $blue,
        inset 0 0 25px $blue, inset 0 0 35px $blue;

      a {
        font-size: 0.7rem;
        font-weight: 800;
        color: #fff;
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
              color: $blue;
              text-shadow: 2px 2px 10px $blue, -2px -2px 10px $blue;
              &:hover {
                color: $green;
                text-shadow: 2px 2px 10px $green, -2px -2px 10px $green;
              }
            }
            &.song {
              font-size: 1rem;
              color: $purple;
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
}
</style>
