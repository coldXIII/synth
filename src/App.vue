<template>
  <div class="container-box">
    <Page>
      <template #header>
        <AppHeader />
      </template>
      <template #main>
        <CardsBlock />
        <div class="playerbox">
          <SongList />
          <SynthpopVideoClips />
        </div>
        <div class="synthpop">
          <EclipseBlock />
          <SynthpopHistory />
        </div>
        <SynthpopSlider />
        <div class="synthwave">
          <SynthwaveHistory />
          <FireWork />
        </div>
        <SynthwaveSlider />
        <SynthpopGirls />
        <AppOutro />
      </template>
      <template #footer>
        <AppFooter />
      </template>
    </Page>
  </div>
</template>

<script setup lang="ts">
import Page from '@/layouts/AppPage.vue';
import AppHeader from '@/components/AppHeader.vue';
import CardsBlock from '@/components/CardsBlock.vue';
import SongList from '@/components/player/SongList.vue';
import SynthpopVideoClips from '@/components/videoclips/SynthpopVideoClips.vue';
import EclipseBlock from '@/components/decor/EclipseBlock.vue';
import SynthpopHistory from '@/components/history/SynthpopHistory.vue';
import SynthpopSlider from '@/components/sliders/SynthpopSlider.vue';
import SynthwaveHistory from '@/components/history/SynthwaveHistory.vue';
import FireWork from '@/components/decor/FireWork.vue';
import SynthwaveSlider from '@/components/sliders/SynthwaveSlider.vue';
import SynthpopGirls from '@/components/SynthpopGirls.vue';
import AppOutro from '@/components/AppOutro.vue';
import AppFooter from '@/components/AppFooter.vue';
</script>

<style  lang="scss">
@import '@/assets/styles/variables';

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.synthpop {
  background-color: $black;
  display: flex;
  @media (max-width: 950px) {
    flex-wrap: wrap;
  }
}
.synthwave {
  background-color: $black;
  display: flex;
  @media (max-width: 950px) {
    flex-wrap: wrap;
    flex-direction: column;
  }
}
.playerbox {
  background: url(/player-bg.webp) no-repeat;
  background-size: cover;
  display: flex;
  padding: 2rem 0;
  @media (max-width: 950px) {
    flex-wrap: wrap;
    padding: 1rem 0;
  }
}

</style>
