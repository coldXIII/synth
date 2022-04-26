<template>
  <div class="page">
    <div id="progressbar"></div>
    <div id="scrollpath"></div>
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot name="main" />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'PageLayout',
  components: {},
});
</script>

<style scoped lang="scss">
.page {
  display: flex;
  flex-direction: column;
  padding: 0;
  min-height: 100vh;
  header {
    position: relative;
  }
  main {
    position: relative;
    flex-grow: 1;
    overflow: hidden;
      color: gray;
  }
  footer {
    flex-grow: 0;
    flex-shrink: 0;
  }

  ::-webkit-scrollbar {
    width: 0;
  }
  #scrollpath {
    position: fixed;
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    z-index: 9999;
    background: rgba(255, 255, 255, 0.05);
  }
  #progressbar {
    position: fixed;
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    z-index: 9999;
    background: linear-gradient(to top, #008aff, #00ffe7);

    animation: animate 5s linear infinite;
  }
  @keyframes animate {
    0%,
    100% {
      filter: hue-rotate(0deg);
    }
    50% {
      filter: hue-rotate(360deg);
    }
  }
  #progressbar::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #008aff, #00ffe7);
    filter: blur(10px);
  }
  #progressbar::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, #008aff, #00ffe7);
    filter: blur(10px);
  }
}
</style>
