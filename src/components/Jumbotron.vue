<template>
  <div class="jumbotron-container">
    <div v-for="item in jumbo" :key="item.id" class="jumbotron">
      <div class="jumbotron-inner" :style="{ flexDirection: item.direction }">
        <div class="jumbotron-pane">
          <h1 class="jumbotron-title">{{ item.title }}</h1>
          <h2 class="jumbotron-sub-title">{{ item.subTitle }}</h2>
        </div>
        <div class="jumbotron-pane">
          <img :src="`${item.image}`" :alt="item.alt" class="jumbotron-img" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import jumboData from "@/fixtures/jumbo.json";
export default {
  data: () => ({
    jumbo: jumboData,
  }),
};
</script>
<style lang="scss" scoped>
.jumbotron-title {
  font-size: 50px;
  line-height: 1.1;
  margin-bottom: 8px;

  @media (max-width: 600px) {
    font-size: 35px;
  }
}

.jummbotron-subtitle {
  font-size: 26px;
  font-weight: normal;
  line-height: normal;

  @media (max-width: 600px) {
    font-size: 18px;
  }
}

.jumbotron-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  width: 100%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
}

.jumbotron-pane {
  width: 50%;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
  }
}

.jumbotron-image {
  max-width: 100%;
  height: auto;
}

.jumbotron-container {
  @media (max-width: 1000px) {
    & > .jumbotron:last-of-type h2 {
      margin-bottom: 50px;
    }
  }
}

.jumbotron {
  display: flex;
  border-bottom: 8px solid #222;
  padding: 50px 5%;
  color: white;
  overflow: hidden;
}
</style>