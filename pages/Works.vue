<template>
  <div class="works">
    <div class="works__inner-wrap">
      <Title :pageTitle="this.$route.name" />
      <div class="works__items-container">
        <ul class="works__list">
          <li v-for="listItem in listItems" :key="listItem.id" class="works__list-item">{{ listItem.title }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Title from '~/components/Title.vue'

export default {
  components: {
    Title
  },
  data () {
    return {
      linkTitles: this.$store.state.linkData,
      listItems: [
        { id: 0, title: 'My portfolis' },
        { id: 1, title: 'iSara' },
        { id: 2, title: '30Daysトライアル' },
        { id: 3, title: '模写サイト' },
        { id: 4, title: 'Slack風アプリ' },
        { id: 5, title: 'メモアプリ' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .works {
    margin: 100px auto 40px;
    min-height: 100vh;
    &__list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      grid-auto-rows: 1fr;
      grid-gap: 28px;
      padding: 0.8rem;
    }
    &__list-item {
      background-image: url("~@/static/images/360x255.png");
      background-size: cover;
      background-position: center center;
      width: 100%;
      padding-top: 70.83333%;
      border-radius: 12px;
    }
  }
</style>
