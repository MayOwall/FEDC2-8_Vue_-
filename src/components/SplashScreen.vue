<template lang="">
  <transition name="splashShow">
    <div class="SplashScreen" v-if="splashShow">
      <transition name="darkBackAnimation">
        <div class="darkBack" v-if="darkBackShow"></div>
      </transition>
      <div class="SplashScreen__box">
        <transition name="SplashScreenAnimation">
          <img
            v-if="imageShow"
            class="SplashScreen__image"
            :src="splashData.imageUrl"
            alt="image"
          />
        </transition>
        <div class="SplashScreen__quote">
          {{ splashData.quote }}
        </div>
        <div class="SplashScreen__title">{{ splashData.title }}</div>
        <div class="SplashScreen__copyright">© mayOwall, 2022</div>
      </div>
    </div>
  </transition>
</template>
<script>
import splashDataList from "../assets/splashDataList.js";
export default {
  name: "SplashScreen",
  data() {
    return {
      darkBackShow: true,
      imageShow: false,
      splashShow: true,
      splashData: splashDataList[Math.floor(Math.random() * 6)],
    };
  },
  mounted() {
    this.darkBackShow = false;
    this.imageShow = true;
    setTimeout(() => {
      this.splashShow = false;
    }, 4000);
  },
};
</script>
<style lang="scss">
.SplashScreen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  .darkBack {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: black;
    z-index: 2;
  }
  .SplashScreen__image {
    position: fixed;
    top: -1vh;
    left: -5vw;
    z-index: -1;

    width: 110vw;
    height: 110vh;
    filter: grayscale(100) brightness(50%);
  }
  .SplashScreen__quote {
    position: fixed;
    top: 30vh;
    left: 5rem;
    color: gold;
    opacity: 0.7;
    font-size: 5rem;
    font-weight: 900;
    text-align: left;
    max-width: 60vw;
    word-break: keep-all;
  }
  .SplashScreen__title {
    padding-top: 1rem;
    position: fixed;
    bottom: 4.5rem;
    right: 3rem;
    color: white;
    opacity: 0.5;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }
  .SplashScreen__copyright {
    position: fixed;
    bottom: 3rem;
    right: 3rem;
    color: white;
  }
}
.darkBackAnimation-leave-from {
  opacity: 1;
}
.darkBackAnimation-leave-active {
  transition: all 2s ease-out;
}
.darkBackAnimation-leave-to {
  opacity: 0;
}
.SplashScreenAnimation-enter-from {
  transform: translateX(0);
}
.SplashScreenAnimation-enter-active {
  transition: all 5s ease-out;
}
.SplashScreenAnimation-enter-to {
  transform: translateX(-30px);
}
.splashShow-leave-from {
  opacity: 1;
}
.splashShow-leave-active {
  transition: all 0.5s ease-in-out;
}
.splashShow-leave-to {
  opacity: 0;
}
</style>
