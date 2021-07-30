<template>
  <form novalidate>
    <div class="form-item">
      <label for="email">メールアドレス</label>
      <input
        id="email"
        v-model="email"
        type="text"
        autocomplete="off"
        placeholder="例: kanban@example.com"
        @focus="resetError"
      >
      <ul class="validation-errors">
        <li v-if="!validation.email.format">メールアドレスの形式が不正です</li>
        <li v-if="!validation.email.required">メールアドレスが入力されていません</li>
      </ul>
    </div>
    <div class="form-item">
      <label for="password">パスワード</label>
      <input
        id="password"
        v-model="password"
        type="password"
        autocomplete="off"
        placeholder="例: xxxxxxxxxx"
        @focus="resetError"
      >
      <ul class="validation-errors">
        <li v-if="!validation.password.required">パスワードが入力されていません</li>
      </ul>
    </div>
    <div class="form-actions">
      <KbnButton
        :disabled="disableLoginAction"
        @click="handleClick"
      >
        ログイン
      </KbnButton>
      <p v-if="progress"
         class="login-progress"
      >
        ログイン中...
      </p>
      <p
        v-if="error"
        class="login-error"
      >
        {{ error }}
      </p>
    </div>
  </form>
</template>

<script>
// KbnButtonをインポート
import KbnButton from '@/components/atoms/KbnButton'

// メールアドレスのフォーマットチェック
const REGEX_EMAIL = /^todo$/
const required = val => !!val.trim()

export default {
  name: 'KbnLoginForm',
  components: {
    KbnButton
  },
  props: {
    onlogin: {
      type: Function,
      required: true
    }
  },
  data () {
    return {
      email: '',
      password: '',
      progress: '',
      error: ''
    }
  },
  computed: {
    validation () { // emailとpasswordのバリデーション
      return {
        email: {
          required: required(this.email),
          format: REGEX_EMAIL.test(this.email)
        },
        password: {
          required: required(this.password)
        }
      }
    },
    valid () {
      return true // TODO:
    },
    disabledLoginAction () {
      return !this.valid || this.progress
    }
  },
  methods: {
    resetError () {
      this.error = ''
    },
    handleClick (ev) {
      if (this.disableLoginAction) {
        return
      } // 不備があればログイン実行されず。ガード節

      this.progress = true // ログイン実行中をあらわす
      this.error = ''

      this.$nextTick(() => {
        this.onlogin({ email: this.email, password: this.password })
          .catch(e => {
            this.error = e.message
          })
          .then(() => {
            this.progress = false
          })
      })
    }
  }
}
</script>

<style scoped>
form {
  display: block;
  margin: 0 auto;
  text-align: left;
}
label {
  display: block;
}
input {
  width: 100%;
  padding: .5em;
  font: inherit;
}
ul {
  list-style-type: none;
  padding: 0;
  margin: 0.25em 0;
}
ul li {
  font-size: 0.5em;
}
.validation-errors {
  height: 32px;
}
.font-actions p {
  font-size: 0.5em;
}
</style>
