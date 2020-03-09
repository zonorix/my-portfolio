<template>
  <div class="app-layout">
    <div class="app-layout__inner-wrap">
      <div class="header">
        <ul class="header__nav">
          <li class="header__nav-title--home">
            <nuxt-link :to="{ name: 'index' }">home</nuxt-link>
          </li>
          <div class="header__right-container">
            <li v-for="linkTitle in linkTitles" :key="linkTitle.id" class="header__nav-title">
              <nuxt-link :to="{ name: `${linkTitle.address}` }">
                {{ linkTitle.name }}
              </nuxt-link>
            </li>
          </div>
        </ul>
      </div>
      <div class="main-content">
        <nuxt />
      </div>
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

<style lang="scss">
  .app-layout{
    &__inner-wrap {
      width: $layout-width-inner;
      max-width: 100%;
      height: 100%;
      margin: auto;
      padding: 0 20px;
    }
  }
  .header {
    &__nav {
      padding: 40px 40px 0;
    }
    &__right-container {
      float: right;
    }
    &__nav-title {
      font-weight: 400;
      color: #526488;
      display: inline-block;
      font-size: 1.8rem;
      text-transform: capitalize;
      background-color: #54BCF6;
      border-radius: 20px;
      padding: 4px 14px 6px;
      color: #fff;
      font-style: italic;
      font-weight: 300;
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
    &__nav-title--home {
      font-weight: 400;
      color: #526488;
      display: inline-block;
      font-size: 1.8rem;
      text-transform: capitalize;
      background-color: #54BCF6;
      border-radius: 20px;
      padding: 4px 14px 6px;
      color: #fff;
      font-style: italic;
      font-weight: 300;
    }
  }
</style>
