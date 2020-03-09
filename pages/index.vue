<template>
  <div class="home">
    <div class="home__title-wrap">
      <h1 class="home__title">
        shigeo motozono
      </h1>
      <div class="home__deco"></div>
      <h2 class="home__subtitle">
        I'm a developer
      </h2>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped lang="scss">
.home {
  margin: 0 auto;
  min-height: 100vh;
  @include css3(display, flex);
  @include css3(justify-content, center);
  @include css3(align-items, center);
  text-align: center;
  &__title-wrap {
    transform: translateY(-60px);
  }
  &__title {
    font-family: 'Spinnaker', sans-serif;
    display: block;
    font-weight: 300;
    font-size: 8rem;
    color: #35495e;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  &__subtitle {
    font-weight: 300;
    font-size: 4.2rem;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }
  // &__deco {
  //   position: absolute;
  //   transform: translate(-50%, -50%);
  //   border-radius: 50%;
  //   top: 54%;
  //   left: 85%;
  //   width: 234px;
  //   height: 234px;
  //   z-index: -1;
  //   background: linear-gradient(-25deg, #43e97b, #38f9d7);
  // }
}

</style>
