<template>
  <SelectProfile v-if="!profile.displayName" />
  <template v-else>
    <Loading :src="profile.photoURL" />
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
                    {{ profile.photoURL }}
                    <HeaderPicture :src="profile.photoURL" />
                    <HeaderTextLink>{{ profile.displayName }}</HeaderTextLink>
                  </HeaderGroup>
                  <HeaderGroup>
                    <HeaderTextLink @click="signOut"> Sign Out </HeaderTextLink>
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
    <CardGroup>
      <Card
        v-for="card in slideRows"
        :key="`${category}-${card.title.toLowerCase()}`"
        v-bind="{ card, category }"
      />
    </CardGroup>
    <AppFooter />
  </template>
</template>

<script>
/* eslint-disable no-unused-vars */
import { ref, computed, watch } from "vue";
import SelectProfile from "@/components/SelectProfile";
import AppHeader from "@/components/Header/AppHeader";
import AppFooter from "@/components/AppFooter";
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
import { Card, CardGroup } from "@/components/Card";

import * as ROUTES from "@/constants/routes";
import { firebase } from "@/lib/firebase.prod";
import selectionFilter from "@/util/selectionFilter";

import useContent from "@/composable/use-content";
import useContentSearch from "@/composable/use-content-search";
import { getProfile } from "@/composable/use-profile";
export default {
  components: {
    SelectProfile,
    AppHeader,
    AppFooter,
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
    Card,
    CardGroup,
  },
  setup() {
    const profile = getProfile();
    const category = ref("series");
    const searchTerm = ref("");
    const loading = ref(true);
    const { series } = useContent("series");
    const { films } = useContent("films");

    const slides = computed(() =>
      selectionFilter({ series: series.value, films: films.value })
    );

    const slideRows = useContentSearch(
      computed(() => slides.value[category.value]),
      searchTerm
    );

    watch(profile, () => {
      setTimeout(() => {
        loading.value = false;
      }, 3000);
    });

    return {
      profile,
      loading,
      series,
      searchTerm,
      slideRows,
      category,
    };
  },
  data: () => ({
    ROUTES,
  }),
  methods: {
    signOut() {
      firebase.auth().signOut();
      this.$router.push({ name: "Sign In" });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>