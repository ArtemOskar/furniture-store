<template>
  <general-layout />
</template>

<script>
import GeneralLayout from '@/components/GeneralLayout.vue'

export default {
  components: {
    GeneralLayout,
  },
  mounted() {
    const userLanguage = navigator.language || navigator.userLanguage
    this.$i18n.locale = userLanguage.toLowerCase().slice(0, 2)
    // this.$i18n.locale = 'ua'
    // this.$i18n.locale = 'en'
  },
}
</script>

<style lang="scss">
@import '../public/scss/main.scss';
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
}
</style>
