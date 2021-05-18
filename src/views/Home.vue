<template>
  <AppHeader>
    <template v-slot:header-navigation><AppHeaderNavigation /></template>
    <template v-slot:header-feature><Feature /></template>
  </AppHeader>
  <Jumbotron></Jumbotron>
  <Accordion />
</template>

<script>
import AppHeader from "@/components/Header/AppHeader";
import Jumbotron from "@/components/Jumbotron";
import Accordion from "@/components/Accordion/Accordion";
import Feature from "@/components/Feature";
import AppHeaderNavigation from "@/components/Header/AppHeaderNavigation";
export default {
  name: "Home",
  components: {
    AppHeader,
    AppHeaderNavigation,
    Jumbotron,
    Accordion,
    Feature,
  },
};
</script>
