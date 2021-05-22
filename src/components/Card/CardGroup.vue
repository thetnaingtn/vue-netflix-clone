<template>
  <div class="card-group" :style="{ flexDirection, margin, alignItems }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    flexDirection: {
      type: String,
      default: "column",
    },
    margin: {
      type: String,
      default: "0px",
    },
    alignItems: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-group {
  display: flex;

  & > .card:first-of-type {
    @media (min-width: 1100px) {
      margin-top: -150px;
    }
  }
}
</style>