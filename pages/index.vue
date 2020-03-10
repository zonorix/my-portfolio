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
    <div class="link">
      <ul class="link__list">
        <li v-for="linkTitle in linkTitles" :key="linkTitle.id" class="link__list-item">
          <nuxt-link :to="{ name: `${linkTitle.address}` }">
            {{ linkTitle.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      linkTitles: this.$store.state.linkData
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  margin: 0 auto;
  min-height: 100vh;
  @include css3(display, flex);
  @include css3(justify-content, center);
  @include css3(align-items, center);
  @include css3(flex-direction, column);
  text-align: center;
  background-color: #ccebd1;
  &__portfolio-icon {
    max-width: 150px;
    height: auto;
    display: block;
    margin-top: 40px;
  }
}
.title {
  margin-top: 32px;
  &__text{
    font-family: 'Spinnaker', sans-serif;
    display: block;
    font-weight: 300;
    font-size: 8rem;
    color: #35495e;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  &__sub {
    font-weight: 300;
    font-size: 4.2rem;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
    text-transform: capitalize;
  }
}
.link {
  // background-color: #a6deeb;
  // border-radius: 40px;
  // margin-top: 40px;
  &__list {
    @include css3(display, flex);
    @include css3(align-items, center);
    margin-top: 40px;
  }
  &__list-item {
    color: #526488;
    display: inline-block;
    font-size: 1.4rem;
    text-transform: capitalize;
    border: 2px solid #a6deeb;
    background-color: #a6deeb;
    border-radius: 40px;
    padding: 10px 28px 12px;
    font-family: 'Lato', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    margin: 0 12px;
  }
}

</style>
