<template>
  <div class="home">
    <img src="images/portfolio-icon.svg" alt="" class="home__portfolio-icon">
    <div class="title">
      <h1 class="title__text">
        zonorix
      </h1>
      <h2 class="title__sub">
        portfolio
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      linkTitles: this.$store.getters.filteredLinks
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  margin: -40px auto 0;
  min-height: 100vh;
  @include css3(display, flex);
  @include css3(justify-content, center);
  @include css3(align-items, center);
  @include css3(flex-direction, column);
  text-align: center;
  // background-color: #ccebd1;
  &__portfolio-icon {
    max-width: 150px;
    height: auto;
    display: block;
  }
}
.title {
  margin-top: 32px;
  &__text{
    font-family: 'Spinnaker', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    font-size: 8rem;
    color: $text-main-color;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  &__sub {
    font-weight: 300;
    font-size: 4.2rem;
    color: $text-sub-color;
    word-spacing: 5px;
    padding-bottom: 15px;
    text-transform: capitalize;
  }
}
.link {
  &__list {
    @include css3(display, flex);
    @include css3(align-items, center);
    margin-top: 40px;
  }
  &__list-item {
    color: $text-sub-color;
    display: inline-block;
    font-size: 1.4rem;
    font-weight: 900;
    text-transform: capitalize;
    background-color: $accent-color;
    border-radius: 20px;
    padding: 10px 0 12px;
    font-family: 'Lato', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    margin: 0 12px;
    border-bottom: 2px solid darken($accent-color, 50%);
    text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5);
    position: relative;
    width: 100px;
    height: 40px;
    transition: all 0.3s ease 0s;
    &:hover {
      letter-spacing: 2px;
    }
    &:active {
      transform: translateY(4px);
      border-bottom: none;
    }
  a {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      line-height: 40px;
    }
  }
}

</style>
