<template>
  <div class="accordion-container">
    <div class="accordion-inner">
      <h1 class="accordion-title">Frequently Asked Questions</h1>
      <div class="accordion-frame">
        <AccordionItem v-for="item in faqs" :key="item.id" v-bind="{ item }" />
      </div>
    </div>
  </div>
</template>

<script>
import faqs from "@/fixtures/faqs.json";
import AccordionItem from "./AccordionItem";

export default {
  components: {
    AccordionItem,
  },
  data: () => ({
    faqs,
  }),
};
</script>

<style lang="scss" scoped>
.accordion-container {
  display: flex;
  border-bottom: 8px solid #222;
}

.accordion-inner {
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
}

.accordion-frame {
  margin-bottom: 40px;
}

.accordion-title {
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 35px;
  }
}
</style>