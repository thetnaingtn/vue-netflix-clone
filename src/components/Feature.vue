<template>
  <div class="feature-container">
    <h1 class="feature-title">Unlimited films, TV programmes and more.</h1>
    <h2 class="feature-subtitle">Watch anywhere, cancel at anytime.</h2>
    <OptForm />
  </div>
</template>

<script>
import OptForm from "@/components/Optform";
export default {
  components: {
    OptForm,
  },
};
</script>

<style lang="scss" scoped>
.feature-container {
  display: flex;
  flex-direction: column;
  text-align: center;
  border-bottom: 8px solid #222;
}

.feature-title {
  color: #fff;
  max-width: 640px;
  font-weight: 500;
  font-size: 50px;
  margin: auto;
  @media (max-width: 600px) {
    font-size: 35px;
  }
}

.feature-subtitle {
  font-weight: normal;
  font-size: 26px;
  color: #fff;
  margin: 16px auto;
}
</style>