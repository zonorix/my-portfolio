<template>
  <div class="app-layout">
    <div class="app-layout__inner-wrap">
      <div v-if="this.$route.name !== 'index'" class="header">
        <ul class="header__nav">
          <li v-for="linkTitle in linkTitles" :key="linkTitle.id" class="header__nav-title">
            <nuxt-link :to="{ name: `${linkTitle.address}` }">
              {{ linkTitle.name }}
            </nuxt-link>
          </li>
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
//Vuetify上書き---------------------------------
  .v-application--wrap {
    min-height: 0;
  }
//-------------------------------------------------
  .app-layout{
    background-color: $base-color;
    &__inner-wrap {
      width: $layout-width-inner;
      max-width: 100%;
      height: 100%;
      margin: auto;
      padding: 0 20px;
    }
  }
  .header {
    text-align: center;
    &__nav {
      padding: 40px 40px 0;
    }
    &__nav-title {
      color: $text-sub-color;
      display: inline-block;
      font-size: 1.4rem;
      font-weight: 900;
      text-transform: capitalize;
      background-color: $accent-color;
      border-radius: 20px;
      padding: 10px 0 12px;
      font-family: 'Lato', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      margin: 0 20px;
      border-bottom: 2px solid darken($accent-color, 50%);
      text-shadow: 1px 1px 1px rgba(255, 255, 255, 0.5);
      // overflow: hidden;
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
