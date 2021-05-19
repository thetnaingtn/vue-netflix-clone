<template>
  <div class="header-dropdown">
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header-dropdown {
  display: none;
  position: absolute;
  background-color: black;
  padding: 10px;
  width: 125px;
  top: 32px;
  right: 10px;

  .header-group:last-of-type .header-textlink {
    cursor: pointer;
  }

  .header-group {
    margin-bottom: 10px;

    &:last-of-type {
      margin-bottom: 0;
    }

    .header-picture,
    .header-textlink {
      cursor: default;
    }
  }

  button {
    margin-right: 6px;
  }

  p {
    font-size: 12px;
    margin-bottom: 0;
    margin-top: 0;
  }
}
</style>