<template>
  <button
    :class="classes"
    type="button"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  name: 'KbnButton',

  props: {
    type: {
      type: String,
      default: 'button'
    }
  },

  computed: {
    // typeに応じてクラスを動的に生成する
    classes () {
      const cls = this.type === 'text' ? this.type : ''
      return [`kbn-button-${cls}`]
    }
  },

  methods: {
    // TODO:
  }
}
</script>

<style scoped>
</style>
