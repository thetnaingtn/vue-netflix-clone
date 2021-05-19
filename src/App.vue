<template>
  <router-view />
  <AppFooter />
</template>

<script>
import { onMounted } from "vue";
import AppFooter from "@/components/AppFooter.vue";

import { getUser, fetchUser } from "@/store/user";

export default {
  components: {
    AppFooter,
  },
  setup() {
    const user = getUser || { name: "tnt" };
    onMounted(fetchUser);

    return {
      user,
    };
  },
};
</script>
<style lang="scss">
@import "~@/styles/global-styles.scss";
</style>
