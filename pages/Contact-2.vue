<template>
  <div class="contact">
    <Title :pageTitle="this.$route.name" />
    <form ref="form">
      <div class="contact__form">
        <input
          v-model="contactForm.name"
          class="contact__form-text"
          type="text"
          placeholder=""
        >
        <label class="contact__form-label">お名前</label>
      </div>
      <div class="contact__form">
        <input
          v-model="contactForm.email"
          class="contact-form-text"
          type="email"
          placeholder=""
        >
        <label class="contact__form-label">連絡先メールアドレス</label>
      </div>
      <div class="contact__form">
        <input
          v-model="contactForm.contents"
          class="contact-form-text"
          type="textarea"
          placeholder=""
        >
        <label class="contact__form-label">内容</label>
      </div>
      <div class="contact__form">
        <button class="contact__form-btn" type="button" @click="sendMail()">送信</button>
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
  }
</style>
