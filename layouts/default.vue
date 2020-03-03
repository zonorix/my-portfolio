<template>
  <div class="app-layout">
    <div class="inner-wrap">
      <div class="header">
        <ul class="header-nav">
          <li v-for="linkTitle in linkTitles" :key="linkTitle.id" class="nav-title">
            <nuxt-link :to="`/${linkTitle.address}`">
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
      linkTitles: [
        { id: 0, address: '', name: 'home' },
        { id: 1, address: 'works', name: 'works' },
        { id: 2, address: 'about', name: 'about' },
        { id: 3, address: 'contact', name: 'contact' }
      ]
    }
  }
}
</script>

<style lang="scss">
  .inner-wrap {
    width: $layout-width-inner;
    max-width: 100%;
    height: 100%;
    margin: auto;
    padding: 0 20px;
  }

  .header-nav {
    @include css3(display, flex);
    @include css3(justify-content, space-between);
    padding: 0 40px;
    margin-top: 8px;
    .nav-title {
      display: inline-block;
      font-size: 2.2rem;
      text-transform: uppercase;
    }
  }
</style>
