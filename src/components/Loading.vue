<template>
  <div class="loading-spinner">
    <img
      :src="`/images/users/${src}.png`"
      alt="User Image"
      class="loading-image"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-spinner {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: black;
  z-index: 999;

  :after {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    background-image: url("/images/misc/spinner.png");
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: -150px;
    margin-left: -75px;
    width: 150px;
    height: 150px;
    animation-name: spin;
    animation-duration: 1000ms;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }

  @-ms-keyframes spin {
    from {
      -ms-transform: rotate(0deg);
    }
    to {
      -ms-transform: rotate(360deg);
    }
  }

  @-moz-keyframes spin {
    from {
      -moz-transform: rotate(0deg);
    }
    to {
      -moz-transform: rotate(360deg);
    }
  }

  @-webkit-keyframes spin {
    from {
      -webkit-transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
}

.loading-image {
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -100px;
  margin-left: -22px;
}
</style>