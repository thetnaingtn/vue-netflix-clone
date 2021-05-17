<template>
  <Jumbotron></Jumbotron>
  <Accordion />
</template>

<script>
import Jumbotron from "../components/Jumbotron";
import Accordion from "../components/Accordion/Accordion";
export default {
  name: "Home",
  components: {
    Jumbotron,
    Accordion,
  },
};
</script>
