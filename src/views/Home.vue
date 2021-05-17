<template>
  <AppHeader />
  <Jumbotron></Jumbotron>
  <Accordion />
</template>

<script>
import AppHeader from "../components/AppHeader";
import Jumbotron from "../components/Jumbotron";
import Accordion from "../components/Accordion/Accordion";

export default {
  name: "Home",
  components: {
    AppHeader,
    Jumbotron,
    Accordion,
  },
};
</script>
