<template>
  <h1 class="header-feature-callout">
    <slot></slot>
  </h1>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-feature-callout {
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
}
</style>