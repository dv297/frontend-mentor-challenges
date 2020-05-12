<template>
  <div class="email-input-container">
    <input type="email" placeholder="Email Address" class="email-input" />
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
  </div>
</template>

<script>
import caretSvg from "../assets/icon-arrow.svg";

export default {
  name: "EmailInput",
  data() {
    return { caretSvg };
  }
};
</script>

<style scoped>
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
</style>
