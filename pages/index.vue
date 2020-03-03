<template>
  <div class="container">
    <div>
      <h1 class="title">
        shigeo motozono
      </h1>
      <h2 class="subtitle">
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
.container {
  margin: 0 auto;
  min-height: 100vh;
  @include css3(display, flex);
  @include css3(justify-content, center);
  @include css3(align-items, center);
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 8rem;
  color: #35495e;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.subtitle {
  font-weight: 300;
  font-size: 4.2rem;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

</style>
