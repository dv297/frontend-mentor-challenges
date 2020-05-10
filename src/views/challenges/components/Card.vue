<template>
  <div
    class="card"
    :style="{
      'border-top': `5px solid ${accentColor}`
    }"
  >
    <div class="body">
      <h1 class="title">{{ title }}</h1>
      <span class="message">{{ message }}</span>
    </div>
    <div class="footer">
      <slot name="image"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    title: {
      type: String,
      required: true
    },
    message: {
      type: String,
      required: true
    },
    accentColor: {
      type: String,
      default: "red"
    }
  }
};
</script>

<style scoped>
.card {
  padding: 32px;
  box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: #fff;
}

.body {
  margin-bottom: 32px;
}

.title {
  color: hsl(234, 12%, 34%);
  font-weight: 600;
  font-size: 1.2em;
  margin-bottom: 16px;
}

.message {
  color: hsl(229, 6%, 66%);
  line-height: 1.6rem;
}

.footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
</style>
