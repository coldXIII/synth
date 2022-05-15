<template>
  <div class="player">
    <audio
      :src="song.songSrc"
      preload="auto"
      ref="audioPlayer"
      type="mp3"
    ></audio>
    <button @click="goBack"><i class="fa-solid fa-angles-left"></i></button>
    <h1>Now Playing</h1>
    <div class="song-block">
      <div class="image">
        <img :src="song.image" />
      </div>
      <div class="info">
        <p class="song">{{ song.name }}</p>
        <p class="artist">{{ song.artistName }}</p>
        <p class="year">({{ song.year }})</p>
      </div>
    </div>
    <div class="buttons">
      <div class="button">
        <button @click="prev">Prev</button>
      </div>
      <div class="button">
        <button @click="togglePlay" class="play">
          {{ isPlaying ? 'Pause' : 'Play' }}
        </button>
      </div>
      <div class="button">
        <button @click="next">Next</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isPlaying = ref(false);
const audioPlayer = ref();

defineProps({
  song: {
    required: true,
    type: Object,
  },
});

const emit = defineEmits(['goBack', 'next', 'prev']);

const goBack = () => {
  emit('goBack');
};
const next = () => {
  emit('next');
  isPlaying.value = false;
};
const prev = () => {
  emit('prev');
  isPlaying.value = false;
};
const togglePlay = () => {
  if (isPlaying.value) {
    audioPlayer.value.pause();
  } else {
    audioPlayer.value.play();
  }
  isPlaying.value = !isPlaying.value;
};
</script>

<style scoped lang="scss">
@import '../../assets/styles/variables';
.player {
  width: 25rem;
  height: 47rem;
  text-align: start;
  line-height: 1.7rem;
  background: linear-gradient(90deg, #000, #333);
  padding: 1rem 2rem;
  border-radius: 1rem;
  margin: 0 auto;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 1), 0 5px 20px rgba(56, 39, 39, 0.5),
    inset 0 0 15px rgba(0, 0, 0, 0.2), 0 0 10px $blue, 0 0 20px $blue;
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

  button {
    display: block;
    background-color: transparent;
    padding: 0.3rem 1rem;
    border-radius: 0.5rem;
    border: 2px solid $blue;
    color: $white;
    margin: 0.5rem auto;
    cursor: pointer;
    &:hover {
      border: 2px solid $blue;
      box-shadow: 0 0 5px $blue, inset 0 0 5px $blue;
      color: $blue;
      text-shadow: 0 0 5px $blue;
    }
  }
  h1 {
    text-align: center;
    margin: 1.5rem auto 2.5rem;
    color: $white;
    text-shadow: 2px 2px 1px $pink, -2px -2px 1px $blue;
  }
  .song-block {
    .image {
      width: 90%;
      margin: 0 auto 1rem;
      img {
        width: 100%;
      }
    }
    .info {
      text-align: center;
      margin-bottom: 0.5rem;
      .song {
        color: $blue;
        font-size: 1.5rem;
        font-weight: 400;
        margin-bottom: 0.5rem;

        &:hover {
          text-shadow: 2px 2px 10px $blue, -2px -2px 10px $blue;
        }
      }
      .artist {
        color: $purple;
        font-size: 1rem;
      }
      .year {
        color: $pink;
        font-size: 0.8rem;
      }
    }
  }
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    .button {
      margin: 1rem 0.5rem;
      button {
        padding: 0.5rem 1rem;
        border: 2px solid $blue;
        box-shadow: 0 0 5px $blue, inset 0 0 5px $blue;
        color: $blue;
        text-shadow: 0 0 5px $blue;
        &.play {
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
        }
        &:hover {
          border: 2px solid $green;
          box-shadow: 0 0 5px $green, inset 0 0 5px $green;
          color: $green;
          text-shadow: 0 0 5px $green;
        }
      }
    }
  }
}
</style>
