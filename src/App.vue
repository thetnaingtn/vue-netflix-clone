<template>
  <router-view />
  <AppFooter />
</template>

<script>
import AppFooter from "@/components/AppFooter.vue";
export default {
  components: {
    AppFooter,
  },
};
</script>
<style lang="scss">
@import "~@/styles/global-styles.scss";
</style>
