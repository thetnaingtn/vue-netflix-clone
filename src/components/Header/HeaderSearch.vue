<template>
  <div class="header-search">
    <button @click="() => (active = !active)" class="header-search-icon">
      <img src="/images/icons/search.png" alt="Search" />
    </button>
    <input
      :class="['header-search-input', active ? 'active' : 'inactive']"
      placeholder="Search Series and Films"
      type="text"
      :value="searchTerm"
      @input="search"
    />
  </div>
</template>

<script>
export default {
  props: {
    searchTerm: {
      type: String,
      default: "",
    },
  },
  data: () => ({
    active: false,
  }),
  methods: {
    search(e) {
      this.$emit("update:searchTerm", e.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.header-search {
  display: flex;
  align-items: center;

  svg {
    color: white;
    cursor: pointer;
  }

  @media (max-width: 700px) {
    display: none;
  }
}

.active {
  margin-left: 10px;
  padding: 10px;
  opacity: 1;
  width: 200px;
}

.inactive {
  margin-left: 0;
  padding: 0;
  opacity: 0;
  width: 0;
}

.header-search-input {
  background-color: rgba(64, 64, 64, 0.5);
  color: white;
  border: 1px solid white;
  transition: width 0.5s;
  height: 30px;
  font-size: 14px;
  border-radius: 4px;
  &:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.8);
  }
}

.header-search-icon {
  cursor: pointer;
  background-color: transparent;
  border: 0;
  outline: 0;
  height: 32px;
  width: 32px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    filter: brightness(0) invert(1);
    width: 16px;
  }
}
</style>