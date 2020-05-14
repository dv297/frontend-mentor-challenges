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
      <form class="email-input-container" @submit="validateEmail">
        <input
          v-model="email"
          type="text"
          placeholder="Email Address"
          class="email-input"
        />
        <button class="submit-button" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
            <path
              fill="none"
              stroke="#FFF"
              stroke-width="2"
              d="M1 1l8.836 8.836L1 18.671"
            />
          </svg>
        </button>
        <div class="error-message" v-if="hasError">
          Please provide a valid email
        </div>
      </form>
    </main>
  </div>
</template>

<script>
import "reset-css";
import logo from "./assets/logo.svg";

export default {
  name: "BaseApparelComingSoon",
  data() {
    return {
      logo,
      hasError: false,
      email: null
    };
  },
  methods: {
    validateEmail(event) {
      event.preventDefault();
      this.hasError = !this.email.length || this.email.indexOf("@") === -1;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600&display=swap");

.application * {
  box-sizing: border-box;
}

.application {
  width: 100vw;
  min-height: 100vh;
  font-family: "Josefin Sans", sans-serif;
  font-size: 16px;
  padding-bottom: 48px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content min-content 1fr;

  background: url("./assets/bg-pattern-desktop.svg");
  background-size: cover;
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

.email-input-container {
  position: relative;
  width: 100%;
}

.email-input {
  box-sizing: border-box;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid hsl(0, 36%, 70%);
  line-height: 2.5rem;
  border-radius: 32px;
  padding-left: 24px;
  padding-right: 48px;
  width: 100%;
}

.email-input::placeholder {
  font-weight: 600;
  color: hsla(0, 36%, 70%, 0.5);
}

.submit-button {
  position: absolute;
  top: 0;
  right: -24px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.8rem;
  background: linear-gradient(135deg, hsl(0, 80%, 86%), hsl(0, 74%, 74%));
  line-height: 2.5rem;
  width: 64px;
  border-radius: 32px;
  border-style: none;
  box-shadow: 2px 10px 10px 5px rgba(248, 191, 191, 0.2);
}

.error-message {
  margin-top: 12px;
  margin-left: 24px;
  color: hsl(0, 77%, 73%);
}
</style>
