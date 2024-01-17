<template>
   <main-header/>
   <router-view/>
   <main-footer/>
</template>

<script>
import MainHeader from "@/components/MainHeader.vue";
import MainFooter from "@/components/MainFooter.vue";

   export default {
      name: 'GeneralLayout',
      components: {
         MainHeader,
         MainFooter,
      },
   }
</script>

<style lang="scss" scoped>

</style>