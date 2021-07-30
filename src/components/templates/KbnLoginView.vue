<template>
  <p>ログインページ</p>
</template>
<template>
  <div class="login-view">
    <h3>Kanban App</h3>
    <KbnLoginForm :onlogin="handleLogin"/>
  </div>
</template>

<script>
import KbnLoginForm from '@/components/molecules/KbnLoginForm'

export default {
  name: 'KbnLoginView',

  components: {
    KbnLoginForm
  },

  methods: {
    handleLogin (authInfo) {
      return this.$store.dispatch('login', authInfo)
        .then(() => {
          this.$router.push({ path: '/' })
        })
        .catch(e => this.throwReject(e))
    },
    throwReject (err) { return Promise.reject(err) }
  }
}
</script>

<style scoped>
.login-view {
  width: 320px;
  margin: auto;
}
</style>
