<template>
  <AppHeader>
    <template v-slot:header-navigation><AppHeaderNavigation /></template>
    <template v-slot:header-feature><Feature /></template>
  </AppHeader>
  <Jumbotron></Jumbotron>
  <Accordion />
  <AppFooter />
</template>

<script>
import AppHeader from "@/components/Header/AppHeader";
import AppFooter from "@/components/AppFooter";
import Jumbotron from "@/components/Jumbotron";
import Accordion from "@/components/Accordion/Accordion";
import Feature from "@/components/Feature";
import AppHeaderNavigation from "@/components/Header/AppHeaderNavigation";
export default {
  name: "Home",
  components: {
    AppFooter,
    AppHeader,
    AppHeaderNavigation,
    Jumbotron,
    Accordion,
    Feature,
  },
};
</script>
