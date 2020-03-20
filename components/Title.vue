<template>
  <div class="container">
    <h1 class="title">
      {{ pageTitle }}
    </h1>
    <div class="title-line" />
  </div>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    font-family: 'Spinnaker', sans-serif;
    font-weight: 400;
    color: #35495e;
    text-align: center;
    font-size: 4rem;
    text-transform: uppercase;
    letter-spacing: 0.25em;
  }
  .title-line {
    width: 80px;
    height: 4px;
    margin: 10px auto 44px;
    background-color: #a6deeb;
  }

  @media screen and (max-width:767px) {
    .title {
      font-size: 3.2rem;
      letter-spacing: 0.16em;
    }
  }
</style>
