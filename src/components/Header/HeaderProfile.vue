<template>
  <div class="header-profile">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header-profile {
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > .header-dropdown {
    display: flex;
    flex-direction: column;
  }
}
</style>