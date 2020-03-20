<template>
  <div class="contact">
    <Title :page-title="this.$route.name" />
    <v-app>
      <v-container class="inner-wrap">
        <v-form ref="form" v-model="contactFormValidation.valid" lazy-validation>
          <v-text-field
            v-model="contactForm.name"
            :rules="contactFormValidation.nameRules"
            label="お名前"
            filled
            required
          />
          <v-text-field
            v-model="contactForm.email"
            :rules="contactFormValidation.emailRules"
            label="メールアドレス"
            filled
            required
          />
          <v-text-field
            v-model="contactForm.title"
            label="タイトル"
            filled
          />
          <v-textarea
            v-model="contactForm.contents"
            :rules="contactFormValidation.contentsRules"
            label="内容"
            filled
            required
          />
          <div class="btn-wrap">
            <v-btn
              :loading="contactForm.loading"
              :disabled="!contactFormValidation.valid"
              large
              class="mt-4 submit-btn"
              @click="sendMail()"
            >
              送信
            </v-btn>
          </div>
        </v-form>
      </v-container>
      <v-snackbar
        v-model="snackBar.show"
        :color="snackBar.color"
        bottom
        right
        :timeout="6000"
        class="font-weight-bold"
      >
        {{ snackBar.message }}
      </v-snackbar>
    </v-app>
  </div>
</template>

<script>
import { functions } from '@/plugins/firebase'
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
        email: '',
        title: '',
        loading: false
      },
      contactFormValidation: {
        valid: false,
        nameRules: [v => !!v || '名前は必須項目です'],
        emailRules: [v => !!v || 'メールアドレスは必須項目です'],
        contentsRules: [v => !!v || '内容は必須項目です']
      },
      snackBar: {
        show: false,
        color: '',
        message: ''
      }
    }
  },
  methods: {
    sendMail () {
      if (this.$refs.form.validate()) {
        this.contactForm.loading = true
        const mailer = functions.httpsCallable('sendMail')

        mailer(this.contactForm)
          .then(() => {
            this.formReset()
            this.showSnackBar(
              'success',
              'お問い合わせありがとうございます。送信完了しました'
            )
          })
          .catch((err) => {
            this.showSnackBar(
              'error',
              '送信に失敗しました。時間をおいて再度お試しください'
            )
            alert(err)
          })
          .finally(() => {
            this.contactForm.loading = false
          })
      }
    },
    showSnackBar (color, message) {
      this.snackBar.message = message
      this.snackBar.color = color
      this.snackBar.show = true
    },
    formReset () {
      this.$refs.form.reset()
    }
  }
}

</script>

<style scoped lang="scss">
//Vuetify上書き-----------------------------------
  .v-application {
    background-color: $base-color;
    font-family: 'M PLUS 1p', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }
  .container {
    max-width: 400px;
  }
  .v-btn.v-size--large {
    font-size: 1.4rem;
  }
  .submit-btn {
    color: #fff !important;
  }
  .theme--light.v-btn:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
    background-color: #6964ad;
    width: 100px;
}
//------------------------------------------------

  .contact {
    margin: auto;
    padding: 60px 0 40px;
    min-height: 100vh;
  }
  .btn-wrap {
    text-align: center;
  }
</style>
