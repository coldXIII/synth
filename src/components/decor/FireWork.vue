<template>
  <div class="box">
    <div class="firework">
      <span style="--i: 1"></span>
      <span style="--i: 2"></span>
      <span style="--i: 3"></span>
      <span style="--i: 4"></span>
      <span style="--i: 5"></span>
      <span style="--i: 5"></span>
      <span style="--i: 6"></span>
      <span style="--i: 7"></span>
      <span style="--i: 8"></span>
      <span style="--i: 9"></span>
      <span style="--i: 10"></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/assets/styles/variables';
.box {
  background-color: $black;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  flex: 1 1 50%;

  .firework {
    position: relative;
    width: 40vh;
    height: 40vh;

    @media (max-width: 560px) {
      width: 30vh;
      height: 30vh;
    }
    @media (max-width: 350px) {
      width: 20vh;
      height: 20vh;
    }

    span {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform: rotate(calc(36deg * var(--i)));

      &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        box-sizing: border-box;
        background: transparent;
        border: 4px solid $blue;
        box-shadow: 0 0 20px $blue, -30px -30px 0px $blue,
          -30px -30px 20px $blue, 30px 30px 0px $blue, 30px 30px 20px $blue,
          30px -30px 0 $blue, 30px -30px 20px $blue, -30px 30px 0 $blue,
          -30px 30px 20px $blue;
        transform-origin: 100px;
        animation-delay: calc(-0.25s * var(--i));
        animation: animate 5s linear infinite;
      }
    }

    &:hover span::before {
      transform-origin: 250px;
      box-shadow: 0 0 20px $blue, -200px -200px 0px $blue,
        -200px -200px 20px $blue, 200px 200px 0px $blue, 200px 200px 20px $blue,
        200px -200px 0 $blue, 200px -200px 20px $blue, -200px 200px 0 $blue,
        -200px 200px 20px $blue;
    }
  }
}
@keyframes animate {
  0% {
    transform: rotate(0deg);
    filter: hue-rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
    filter: hue-rotate(360deg);
  }
}
</style>
