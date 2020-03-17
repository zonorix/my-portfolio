<template>
  <div class="about">
    <Title :page-title="this.$route.name" />
    <div class="about__gray-back">
      <div class="about__icon-container">
        <img src="images/face-icon.svg" alt="" class="about__face-icon">
        <div class="about__greet">
          Hello, I'm Shigeo Motozono
        </div>
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
            <div class="skillset__item">jQuery</div>
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
            <div class="skillset__item">Git</div>
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
    margin: 60px auto 0;
    min-height: 100vh;
    &__gray-back {
      // background-color: #F3F7FB;
      margin: 0 40px;
      // border-radius: 40px;
      padding-bottom: 60px;
    }
    &__face-icon {
      max-width: 150px;
      height: auto;
      display: block;
      margin: auto;
    }
    &__greet {
      text-align: center;
      font-size: 1.8rem;
      margin-top: 20px;
      color: #526488;
    }
  }
  .skillset {
    width: 400px;
    max-width: 100%;
    height: 100%;
    margin: 40px auto 0;
    padding: 40px 60px;
    background-color: $gray-back-color;
    border-radius: 40px;
    &__title {
      text-align: center;
      font-size: 2.0rem;
      color: $text-main-color;
      text-transform: uppercase;
      font-family: 'Patua One', cursive;
      * {
        display: inline-block;
        margin: 0 1.6px;
        border-radius: 20px;
        line-height: 24px;
        width: 24px;
      }
      &--s, &--s-2 {
        background-color: $accent-color;
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
      color: $text-main-color;
      text-transform: uppercase;
    }
    &__item {
      font-size: 1.6rem;
      display: inline-block;
      margin: 8px 10px 0 0;
      padding: 4px 14px 6px;
      border: 1px solid $accent-color;
      color: $text-sub-color;
      background-color: #fff;
      line-height: 1;
    }
  }
</style>
