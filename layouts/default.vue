<template>
  <div class="app-layout">
    <div class="app-layout__inner-wrap">
      <header class="header" :class="{ 'active' : isActive}">
        <nav class="header__nav" :class="{ 'active' : isActive}">
          <ul class="header__nav-list">
            <li v-for="linkTitle in linkTitles" :key="linkTitle.id" class="header__nav-title" @click="toggleSP">
              <nuxt-link :to="{ name: `${linkTitle.address}` }">
                {{ linkTitle.name }}
              </nuxt-link>
            </li>
          </ul>
        </nav>
        <div class="header__toggle" :class="{ 'active' : isActive}" @click="toggle" />
      </header>
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
      linkTitles: this.$store.state.linkData,
      isActive: false
    }
  },
  methods: {
    toggle () {
      this.isActive = !this.isActive
    },
    toggleSP () {
      if (this.isActive) {
        this.isActive = !this.isActive
      }
    }
  }
}
</script>

<style lang="scss">
//Vuetify上書き---------------------------------
  .v-application .v-application--wrap {
    min-height: 0;
    background-color: $base-color;
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
    top: 0;
    z-index: 10;
    // position: absolute;
    width: 100%;
    &__nav {
      max-width: 100%;
      height: 100%;
      text-align: center;
    }
    &__nav-list {
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
    &__toggle {
      display: none;
    }
  }

@media screen and (max-width:767px) {
  .header {
    background-color: #F4F4F5;
      position: relative;
      &.active::before {  //トグルクリック時の背景オーバーレイ
        width: 100%;
        height: 100%;
        z-index: 1;
        content: '';
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.5);
    }
    &__nav {
      position: fixed;
      z-index: 10;
      top: 0;
      right: -100vw;
      width: 300px;
      height: 100%;
      background-color: #fff;
      transition: 0.5s transform;
      transition-timing-function: cubic-bezier(.38,.52,.23,.99);
      @include css3(display, flex);
      @include css3(align-items, center);
      &.active {
          transform: translateX(-100vw);
          margin-left: 30px;
      }
    }
    &__nav-list {
      width: 100%;
      margin: 0;
      padding: 0;
    }
    &__nav-title {
      width: 100%;
      font-size: 4rem;
      padding: 0;
      margin: 0;
      letter-spacing: -0.45px;
      background-color: #fff;
      border-bottom: none;
      &:not(:first-child) {
        margin-top: 80px;
      }
      &::after {
        position: absolute;
        bottom: -4px;
        left: 0;
        right: 0;
        margin: auto;
        content: '';
        width: 30%;
        height: 4px;
        background: $accent-color;
        transform: scale(0, 1);
        transform-origin: center top;
        transition: transform .3s;
      }
      &:hover::after {
        transform: scale(1, 1);
      }
    }
    &__toggle {
      display: block;
      transition: 0.5s transform;
      transition-timing-function: cubic-bezier(0.61, -0.38, 0.37, 1.27);
      cursor: pointer;
      z-index: 10;
      position: fixed;
      height: 68px;
      top: 0;
      right: 16px;
      &::before {        //ハンバーガートグル
        font-family:'Font Awesome 5 Free';
        content: '\f0c9';
        font-size: 25px;
        line-height: 68px;
        font-weight: 900;
        color: $text-main-color;
      }
      &.active {          //トグルクリック時の位置
        transform: translateX(-300px);
        }
      &.active::before {        //×トグル
        content: '\f00d';
        color: #fff;
      }
    }
  }
}

</style>
