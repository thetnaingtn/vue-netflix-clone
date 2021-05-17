<template>
  <div
    v-if="bg"
    class="header-background"
    :style="{ backgroundImage: `url(${backgroundImage}` }"
  >
    <div class="header-frame">
      <router-link to="/">
        <AppLogo />
      </router-link>
      <router-link class="header-buttonlink" :to="ROUTES.SIGN_IN">
        Sign In
      </router-link>
    </div>
    <Feature />
  </div>
</template>

<script>
import AppLogo from "@/components/static/AppLogo";
import Feature from "@/components/Feature";

import * as ROUTES from "@/constants/routes";

export default {
  components: {
    AppLogo,
    Feature,
  },
  props: {
    src: {
      type: String,
    },
    bg: {
      type: Boolean,
      default: true,
    },
  },
  data: () => ({
    ROUTES,
  }),
  computed: {
    backgroundImage() {
      return !this.src
        ? "/images/misc/home-bg.jpg"
        : `/images/misc/${this.src}.jpg`;
    },
  },
};
</script>

<style lang="scss" scoped>
.header-background {
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.35),
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.35)
  );
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top left;

  // @media (max-width: 1100px){
  //     ${({ doNotShowOnSmallPort }) => doNotShowOnSmallPort && `background: none`}
  // }
}

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