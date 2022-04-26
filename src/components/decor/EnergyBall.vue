<template>
  <div class="box">
    <span style="--clr: #fbad04; --i: 18px; --d: 2.5s"></span>
    <span style="--clr: #03a1d9; --i: 13px; --d: 5s"></span>
    <span style="--clr: #f7036d; --i: 15px; --d: 7.5s"></span>
    <span style="--clr: #93ff16; --i: 20px; --d: 10s"></span>
  </div>
</template>
<script setup lang="ts"></script>

<style lang="scss" scoped>
.box {
  position: relative;
  width: 300px;
  height: 300px;

  span {
    position: absolute;
    width: calc(12rem + var(--i));
    height: calc(12rem + var(--i));
    background-color: var(--clr);
    border-radius: 50%;
    transform-origin: calc(4rem + var(--i));
    // animation: rotate 5s linear infinite;
    animation-duration: var(--d);
    mix-blend-mode: plus-lighter;
    filter: blur(30px);
    &:nth-child(even) {
      animation-direction: reverse;
    }
    @media(max-width:850px){
        width: calc(9rem + var(--i));
    height: calc(9rem + var(--i));
      transform-origin: calc(3rem + var(--i));
    }
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
