<template>
  <div class="about">
    <Title :pageTitle="this.$route.name" />
    <div class="about__gray-back">
      <img src="images/face-icon.svg" alt="" class="about__face-icon">
      <div class="about__greet">
        Hello, I'm Shigeo Motozono
      </div>
      <div class="skillset">
        <h2 class="skillset__title">
          <span class="skillset__title--s">s</span>
          <span class="skillset__title--k">k</span>
          <span class="skillset__title--i">i</span>
          <span class="skillset__title--l">l</span>
          <span class="skillset__title--l-2">l</span>
          <span class="skillset__title--s-2">s</span>
          <span class="skillset__title--e">e</span>
          <span class="skillset__title--t">t</span>
        </h2>
        <div class="skillset__item-container">
          <div class="skillset__main-container">
            <h3 class="skillset__sub-title">main</h3>
            <div class="skillset__item">HTML</div>
            <div class="skillset__item">CSS</div>
            <div class="skillset__item">WordPress</div>
          </div>
          <div class="skillset__develop-container">
            <h3 class="skillset__sub-title">develop</h3>
            <div class="skillset__item">JavaScrip</div>
            <div class="skillset__item">PHP</div>
            <div class="skillset__item">Vue.js</div>
            <div class="skillset__item">Web Design</div>
          </div>
          <div class="skillset__others-container">
            <h3 class="skillset__sub-title">others</h3>
            <div class="skillset__item">Pug</div>
            <div class="skillset__item">SCSS</div>
            <div class="skillset__item">BEM</div>
            <div class="skillset__item">Gulp</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '~/components/Title.vue'

export default {
  components: {
    Title
  }
}
</script>

<style scoped lang="scss">
  .about {
    margin: 100px auto 40px;
    min-height: 100vh;
    &__gray-back {
      background-color: #F3F7FB;
      margin: 0 40px;
      border-radius: 40px;
      padding-bottom: 60px;
    }
    &__face-icon {
      max-width: 150px;
      height: auto;
      display: block;
      margin: 40px auto 0;
      padding-top: 60px;
    }
    &__greet {
      text-align: center;
      font-size: 1.8rem;
      margin-top: 20px;
      color: #526488;
    }
  }
  .skillset {
    width: 360px;
    max-width: 100%;
    height: 100%;
    margin: auto;
    padding: 0 20px;
    &__title {
      text-align: center;
      font-size: 2.0rem;
      color: #35495e;
      text-transform: uppercase;
      font-family: 'Patua One', cursive;
      margin-top: 48px;
      * {
        display: inline-block;
        margin: 0 1.6px;
        border-radius: 20px;
        line-height: 24px;
        width: 24px;
      }
      &--s, &--s-2 {
        background-color: #54BCF6;
        color: #fff;
      }
    }
    &__item-container {
      margin-top: 28px;
    }
    &__main-container, &__develop-container, &__others-container {
      margin-top: 20px;
    }
    &__sub-title {
      font-size: 1.6rem;
      font-weight: normal;
      font-family: 'Spinnaker', sans-serif;
      color: #35495e;
      text-transform: uppercase;
    }
    &__item {
      font-size: 1.6rem;
      display: inline-block;
      margin: 8px 10px 0 0;
      padding: 4px 14px 6px;
      border: 1px solid #54BCF6;
      color: #526488;
      background-color: #fff;
      line-height: 1;
    }
  }
</style>
