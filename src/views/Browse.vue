<template>
  <SelectProfile v-if="!profile.displayName" />
  <template v-else>
    <Loading v-show="loading" :src="profile.photoURL" />
    <AppHeader v-if="!loading" src="joker1">
      <template v-slot:header-navigation>
        <AppHeaderNavigation>
          <template v-slot:header-navigations>
            <HeaderGroup>
              <router-link :to="ROUTES.HOME"><AppLogo /></router-link>
              <HeaderTextLink
                :active="category === 'series'"
                @click="() => (category = 'series')"
              >
                Series
              </HeaderTextLink>
              <HeaderTextLink
                :active="category === 'films'"
                @click="() => (category = 'films')"
              >
                Films
              </HeaderTextLink>
            </HeaderGroup>
            <HeaderGroup>
              <HeaderSearch v-model:searchTerm="searchTerm" />
              <HeaderProfile>
                <HeaderPicture :src="profile.photoURL" />
                <HeaderDropdown>
                  <HeaderGroup>
                    <HeaderPicture :src="profile.photoURL" />
                    <HeaderTextLink>{{ profile.displayName }}</HeaderTextLink>
                  </HeaderGroup>
                  <HeaderGroup>
                    <HeaderTextLink @click="() => firebase.auth().signOut()">
                      Sign Out
                    </HeaderTextLink>
                  </HeaderGroup>
                </HeaderDropdown>
              </HeaderProfile>
            </HeaderGroup>
          </template>
        </AppHeaderNavigation>
      </template>
      <template v-slot:header-feature>
        <HeaderFeature>
          <HeaderFeatureCallout> Watch Joker Now </HeaderFeatureCallout>
          <HeaderFeatureText>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </HeaderFeatureText>
          <HeaderPlayButton> Play </HeaderPlayButton>
        </HeaderFeature>
      </template>
    </AppHeader>
  </template>
</template>

<script>
/* eslint-disable no-unused-vars */
import { watch, ref } from "vue";

import SelectProfile from "@/components/SelectProfile";
import AppHeader from "@/components/Header/AppHeader";
import AppHeaderNavigation from "@/components/Header/AppHeaderNavigation";
import AppLogo from "@/components/static/AppLogo";
import {
  HeaderSearch,
  HeaderPicture,
  HeaderProfile,
  HeaderDropdown,
  HeaderGroup,
  HeaderTextLink,
  HeaderFeature,
  HeaderPlayButton,
  HeaderFeatureCallout,
  HeaderFeatureText,
} from "@/components/Header";
import Loading from "@/components/Loading";

import { getProfile } from "@/store/user";
import * as ROUTES from "@/constants/routes";

export default {
  components: {
    SelectProfile,
    AppHeader,
    AppHeaderNavigation,
    AppLogo,
    HeaderGroup,
    HeaderTextLink,
    HeaderDropdown,
    HeaderSearch,
    HeaderProfile,
    HeaderPicture,
    HeaderFeature,
    HeaderPlayButton,
    HeaderFeatureCallout,
    HeaderFeatureText,
    Loading,
  },
  setup() {
    const profile = getProfile;

    return {
      profile,
    };
  },
  data: () => ({
    ROUTES,
    category: "series",
    searchTerm: "",
    loading: true,
  }),
  watch: {
    profile(val) {
      setTimeout(() => {
        this.loading = false;
      }, 3000);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>