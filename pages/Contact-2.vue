<template>
  <div class="contact">
    <Title :page-title="this.$route.name" />
    <form ref="form" class="contact__form">
      <div class="contact__name-container">
        <label class="contact__name-label" for="name">お名前</label>
        <input
          id="name"
          v-model="contactForm.name"
          class="contact__name-text"
          type="text"
          placeholder=""
        >
      </div>
      <div class="contact__email-container">
        <label class="contact__email-label" for="email">メールアドレス</label>
        <input
          id="email"
          v-model="contactForm.email"
          class="contact__email-text"
          type="email"
          placeholder=""
        >
      </div>
      <div class="contact__content-container">
        <label class="contact__content-label" for="content">内容</label>
        <textarea
          id="content"
          v-model="contactForm.contents"
          class="contact__content-text"
          type="textarea"
          placeholder=""
        />
      </div>
      <div class="contact__submit-container">
        <button class="contact__submit-btn" type="button" @click="sendMail()">送信</button>
      </div>
    </form>
  </div>
</template>

<script>
import { functions } from '~/plugins/firebase'
import Title from '~/components/Title.vue'

export default {
  components: {
    Title
  },
  data () {
    return {
      contactForm: {
        name: '',
        contents: '',
        email: ''
      }
    }
  },
  methods: {
    sendMail () {
      const mailer = functions.httpsCallable('sendMail')

      mailer(this.contactForm)
        .then((res) => {
          this.formReset()
          alert(res)
        })
        .catch((err) => {
          alert(err)
        })
    },
    formReset () {
      this.$refs.form.reset()
    }
  }
}

</script>

<style scoped lang="scss">
  .contact {
    margin: 60px auto 0;
    min-height: 100vh;
    &__form {
      max-width: 400px;
      margin: auto;
    }
    &__name-container, &__email-container, &__content-container {
      margin-top: 18px;
    }
    &__name-label, &__email-label, &__content-label {
      font-size: 1.8rem;
      display: block;
      color: $text-main-color;
      font-family: 'M PLUS 1p', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
    &__name-text, &__email-text, &__content-text {
      background-color: lighten($accent-color, 16%);
      margin-top: 4px;
      border: 1px solid darken($accent-color, 30%);
      border-radius: 2px;
      width: 100%;
      font-size: 1.8rem;
      padding: 6px;
      font-family: 'M PLUS 1p', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    }
    &__content-text {
      height: 200px;
    }
    &__submit-container {
      margin-top: 28px;
      text-align: center;
    }
    &__submit-btn {
      font-size: 1.7rem;
      font-family: 'M PLUS 1p', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      display: inline-block;
      width: 90px;
      height: 40px;
      background-color: #6964ad;
      color: #fff;
      border: 1px solid darken($accent-color, 30%);
      border-radius: 4px;
    }
  }
</style>
