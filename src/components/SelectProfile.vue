<template>
  <AppHeader :bg="false">
    <template v-slot:header-navigation>
      <AppHeaderNavigation>
        <template v-slot:header-navigations>
          <router-link :to="ROUTES.HOME"><AppLogo /></router-link>
        </template>
      </AppHeaderNavigation>
    </template>
  </AppHeader>
  <Profile />
</template>

<script>
import AppHeader from "@/components/Header/AppHeader";
import AppHeaderNavigation from "@/components/Header/AppHeaderNavigation";
import AppLogo from "@/components/static/AppLogo";
import Profile from "@/components/Profile";

import * as ROUTES from "@/constants/routes";

export default {
  components: {
    AppHeader,
    AppHeaderNavigation,
    AppLogo,
    Profile,
  },

  data: () => ({
    ROUTES,
  }),
};
</script>

<style lang="scss" scoped>
</style>