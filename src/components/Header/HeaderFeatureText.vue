<template>
  <p class="header-feature-text">
    <slot></slot>
  </p>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-feature-text {
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
}
</style>