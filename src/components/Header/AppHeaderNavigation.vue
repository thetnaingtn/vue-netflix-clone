<template>
  <div class="header-frame">
    <slot name="header-navigations">
      <router-link :to="ROUTES.HOME"><AppLogo /></router-link>
      <router-link class="header-buttonlink" :to="ROUTES.SIGN_IN">
        Sign In
      </router-link>
    </slot>
  </div>
</template>

<script>
import AppLogo from "@/components/static/AppLogo";

import * as ROUTES from "@/constants/routes";

export default {
  components: {
    AppLogo,
  },
  data: () => ({
    ROUTES,
  }),
};
</script>

<style lang="scss" scoped>
.header-frame {
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
  }
}

.header-buttonlink {
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #f40612;
  }
}
</style>