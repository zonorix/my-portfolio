<template>
  <div class="contact">
    <Title :pageTitle="this.$route.name" />
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
  .contact {
    margin: 60px auto 0;
    min-height: 100vh;
  }
</style>
