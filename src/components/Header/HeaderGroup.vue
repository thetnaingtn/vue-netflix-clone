<template>
  <div class="header-group">
    <slot name="header-group"></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-group {
  display: flex;
  align-items: center;
}
</style>