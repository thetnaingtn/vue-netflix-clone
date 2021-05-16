<template>
  <div class="footer-container">
    <p class="footer-title">Questions? Contact us.</p>
    <div class="footer-row">
      <div class="footer-column">
        <a class="footer-link" href="#">FAQ</a>
        <a class="footer-link" href="#">Investor Relations</a>
        <a class="footer-link" href="#">Ways to Watch</a>
        <a class="footer-link" href="#">Corporate Information</a>
        <a class="footer-link" href="#">Netflix Originals</a>
      </div>
      <div class="footer-column">
        <a class="footer-link" href="#">Help Centre</a>
        <a class="footer-link" href="#">Jobs</a>
        <a class="footer-link" href="#">Terms of Use</a>
        <a class="footer-link" href="#">Contact Us</a>
      </div>
      <div class="footer-column">
        <a class="footer-link" href="#">Account</a>
        <a class="footer-link" href="#">Redeem gift cards</a>
        <a class="footer-link" href="#">Privacy</a>
        <a class="footer-link" href="#">Speed Test</a>
      </div>
      <div class="footer-column">
        <a class="footer-link" href="#">Media Centre</a>
        <a class="footer-link" href="#">Buy gift cards</a>
        <a class="footer-link" href="#">Cookie Preferences</a>
        <a class="footer-link" href="#">Legal Notices</a>
      </div>
    </div>
    <p class="footer-text">Netflix United Kingdom</p>
  </div>
</template>

<style lang="scss" scoped>
.footer-container {
  display: flex;
  padding: 70px 0;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
}

.footer-row {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
}

.footer-column {
  display: flex;
  flex-direction: column;
  text-align: left;
}

.footer-title {
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
}

.footer-text {
  font-size: 13px;
  color: #757575;
  margin-bottom: 40px;
}

.footer-link {
  color: #757575;
  margin-bottom: 20px;
  font-size: 13px;
  text-decoration: none;
}
</style>