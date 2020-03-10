<template>
  <div class="app-layout">
    <div class="app-layout__inner-wrap">
      <div v-if="this.$route.name !== 'index'" class="header">
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
      color: #526488;
      display: inline-block;
      font-size: 1.4rem;
      text-transform: capitalize;
      border: 2px solid #a6deeb;
      border-radius: 20px;
      padding: 4px 14px 6px;
      font-family: 'Lato', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      &:not(:last-child) {
        margin-right: 20px;
      }
    }
    &__nav-title--home {
      color: #526488;
      display: inline-block;
      font-size: 1.4rem;
      text-transform: capitalize;
      border: 2px solid #a6deeb;
      border-radius: 20px;
      padding: 4px 14px 6px;
      font-family: 'Lato', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
  }
</style>
