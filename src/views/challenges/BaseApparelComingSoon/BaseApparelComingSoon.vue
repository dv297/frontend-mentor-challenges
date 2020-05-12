<template>
  <div class="application">
    <header class="header">
      <img :src="logo" alt="Base Apparel Logo" />
    </header>
    <div class="hero-image-container" />
    <main class="content">
      <h2 class="hero-header">
        <span>We're </span>
        <span>coming </span>
        <span>soon </span>
      </h2>
      <p class="description">
        Hello fellow shoppers! We're currently building our new fashion store.
        Add your email below to stay up-to-date with announcements and our
        launch deals.
      </p>
      <EmailInput />
    </main>
  </div>
</template>

<script>
import "reset-css";
import logo from "./assets/logo.svg";

import EmailInput from "@/views/challenges/BaseApparelComingSoon/components/EmailInput";
export default {
  name: "BaseApparelComingSoon",
  components: { EmailInput },
  data() {
    return {
      logo
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap");

:root {
  --desaturated-red: hsl(0, 36%, 70%);
  --softish-red: hsl(0, 93%, 68%);

  --dark-grayish-red: hsl(0, 6%, 24%);

  --gradient1: Linear, 135deg, from hsl(0, 0%, 100%), to hsl(0, 100%, 98%);
  --gradient2: Linear, 135deg, from hsl(0, 80%, 86%), to hsl(0, 74%, 74%);
}

.application * {
  box-sizing: border-box;
}

.application {
  width: 100vw;
  min-height: 100vh;
  font-family: "Josefin Sans", sans-serif;
  background-color: #fff4f4;
  font-size: 16px;
  padding-bottom: 48px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content 1fr;
}

.header {
  background-color: #fff;
  padding: 16px 32px 32px 32px;
}

.hero-image-container {
  background: url("./assets/hero-mobile.jpg");
  background-size: cover;
  height: 300px;
}

.content {
  padding: 64px 64px 32px 64px;
}

.hero-header {
  display: flex;
  flex-direction: column;
  text-transform: uppercase;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;
  color: hsl(0, 6%, 24%);
  margin-bottom: 24px;
  letter-spacing: 0.2em;
}

.hero-header > span {
  margin-bottom: 8px;
}

.hero-header > span:nth-child(1) {
  color: hsl(0, 36%, 70%);
  font-weight: 300;
}

.description {
  color: hsl(0, 36%, 70%);
  line-height: 1.5rem;
  text-align: center;
  font-weight: 600;
  margin-bottom: 32px;
}

@media screen and (min-width: 800px) {
  .application {
    background: url("./assets/bg-pattern-desktop.svg");
    background-size: contain;
    grid-template-columns: 1fr min-content;
    grid-template-rows: min-content 1fr;
    padding-bottom: 0;
  }

  .header {
    grid-row: 1;
    grid-column: 1;
    background: none;
  }

  .content {
    grid-row: 2;
    grid-column: 1;
    background: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 600px;
  }

  .hero-header {
    text-align: left;
  }

  .hero-image-container {
    background: url("./assets/hero-desktop.jpg");
    grid-row: 1 / span 2;
    grid-column: 2;
    background-size: cover;
    width: 600px;
    height: 100%;
  }

  .description {
    text-align: left;
  }

  .header,
  .content {
    padding-left: 128px;
  }
}
</style>
