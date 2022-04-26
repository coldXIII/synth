<template>
  <div class="player-box">
    <div class="list" v-if="!isPlayerVisible">
      <h1>Best Songs</h1>
      <div
        class="song"
        v-for="(song, index) in list"
        :key="index"
        @click="playSong(index)"
      >
        <div>
          <span class="name">{{ song.name }}</span>
          <br />
          <span class="artist"
            >{{ song.artistName }}
            <span class="info">({{ song.year }})</span>
          </span>
        </div>
        <div class="image">
          <img :src="song.image" />
        </div>
      </div>
    </div>
    <div class="player" v-if="isPlayerVisible">
      <SongPlayer
        :song="list[currentSongIndex]"
        @goBack="isPlayerVisible = !isPlayerVisible"
        @next="playNext"
        @prev="playPrev"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import SongPlayer from './SongPlayer.vue';

import { useSongsStore } from '../../stores/songs.store';
const list = useSongsStore().list;

const isPlayerVisible = ref(false);
let currentSongIndex = ref(0);
const song = ref(currentSongIndex);

const playSong = (index: number) => {
  currentSongIndex.value = index;
  isPlayerVisible.value = true;
};
const playNext = () => {
  if (currentSongIndex.value < list.length - 1) {
    currentSongIndex.value += 1;
  } else {
    currentSongIndex.value = 0;
  }
};
const playPrev = () => {
  if (currentSongIndex.value != 0) {
    currentSongIndex.value -= 1;
  } else {
    currentSongIndex.value = list.length - 1;
  }
};
</script>

<style scoped lang="scss">
@import '../../assets/styles/variables';

.player-box {
  flex: 1 1 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 850px) {
    flex: 1 1 100%;
  }

  .list {
    width: 25rem;
    height: 47rem;
    text-align: start;
    line-height: 1.7rem;
    background: linear-gradient(90deg, #000, #333);
    border-radius: 1rem;
    padding: 1rem 2rem;
    box-shadow: inset 0 0 10px rgba(0, 0, 0, 1),
      0 5px 20px rgba(56, 39, 39, 0.5), inset 0 0 15px rgba(0, 0, 0, 0.2),
      0 0 10px $blue, 0 0 20px $blue;

    @media (max-width: 995px) {
      width: 90%;
    }
    @media (max-width: 850px) {
      width: 50%;
    }
    @media (max-width: 550px) {
      width: 60%;
    }
    @media (max-width: 450px) {
      width: 80%;
    }
    h1 {
      text-align: center;
      margin: 1rem auto 3.5rem;
      color: $white;
      text-shadow: 2px 2px 1px $pink, -2px -2px 1px $blue;
    }
    .song {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0.5rem;
      cursor: pointer;
      .name {
        color: $blue;
        &:hover {
          color: $green;
          text-shadow: 2px 2px 10px $green, -2px -2px 10px $green;
        }
      }
      .artist {
        color: $purple;
        font-size: 0.7rem;
      }
      .info {
        color: $pink;
        font-size: 0.7rem;
      }
      .image {
        width: 4rem;
        cursor: pointer;
        img {
          width: 100%;
        }
      }
    }
  }
}
</style>
