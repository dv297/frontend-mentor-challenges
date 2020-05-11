<template>
  <div class="application">
    <main>
      <div class="container">
        <h1 class="header">Reliable, efficient delivery</h1>
        <h2 class="impact-header">Powered by Technology</h2>
        <div class="description-container">
          <span class="description"
            >Our Artificial intelligence powered tools use millions of project
            data points to ensure that your project is successful</span
          >
        </div>
      </div>
      <div class="cards-container">
        <div class="cards-list">
          <Card
            class="card-wrapper"
            v-for="card in cards"
            :key="card.title"
            :title="card.title"
            :message="card.message"
            :accentColor="card.accentColor"
          >
            <template slot="image">
              <img :src="card.image" :alt="card.title" />
            </template>
          </Card>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Card from "@/views/challenges/FourCard/components/Card";
import teamBuilderImage from "@/views/challenges/FourCard/images/icon-team-builder.svg";
import superVisorImage from "@/views/challenges/FourCard/images/icon-supervisor.svg";
import calculatorImage from "@/views/challenges/FourCard/images/icon-calculator.svg";
import karmaImage from "@/views/challenges/FourCard/images/icon-karma.svg";

export default {
  name: "FourCard",
  components: { Card },
  data() {
    return {
      cards: [
        {
          title: "Supervisor",
          message: "Monitors activity to identify project roadblocks",
          accentColor: "hsl(180, 62%, 55%)",
          image: superVisorImage
        },
        {
          title: "Team Builder",
          message:
            "Scans our talent network to create the optimal team for your project",
          accentColor: "hsl(0, 78%, 62%)",
          image: teamBuilderImage
        },
        {
          title: "Karma",
          message: "Regularly evaluates our talent to ensure quality",
          accentColor: "hsl(34, 97%, 64%)",
          image: karmaImage
        },
        {
          title: "Calculator",
          message:
            "Uses data from past projects to provide better delivery estimates",
          accentColor: "hsl(212, 86%, 64%)",
          image: calculatorImage
        }
      ]
    };
  },
  methods: {
    getCard(index) {
      return this.cards[index];
    }
  }
};
</script>

<style scoped>
.application {
  box-sizing: border-box;
  font-size: 15px;
  width: calc(100vw - 20px);
  min-height: 100vh;
  background-color: hsl(0, 0%, 98%);
  font-family: "Poppins", sans-serif;
}

.application * {
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding-top: 32px;
  margin-bottom: 48px;
}

.header {
  color: hsl(234, 12%, 34%);
  font-size: x-large;
  font-weight: 200;
  margin-bottom: 16px;
}

.impact-header {
  color: hsl(234, 12%, 34%);
  font-size: x-large;
  font-weight: 600;
  margin-bottom: 24px;
}

.description-container {
  max-width: 500px;
  text-align: center;
}

.description {
  color: hsl(229, 6%, 66%);
  font-weight: normal;
  line-height: 1.6rem;
}

.cards-container {
  display: flex;
  justify-content: center;
  width: 100%;
}

.cards-list {
  display: grid;
}

.card-wrapper {
  margin-bottom: 32px;
  max-width: 400px;
}

@media screen and (min-width: 1240px) {
  .cards-list {
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 32px;
  }

  .card-wrapper:nth-child(1),
  .card-wrapper:nth-child(4) {
    grid-row: 1 / span 2;
    align-self: center;
  }

  .card-wrapper:nth-child(1) {
    grid-column: 1;
  }

  .card-wrapper:nth-child(4) {
    grid-column: 3;
  }
}
</style>
